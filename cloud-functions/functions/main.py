from firebase_functions import https_fn, options
from firebase_admin import initialize_app
import mysql.connector
from mysql.connector import errorcode
import requests
import os
from datetime import datetime
import csv
from io import StringIO

app = initialize_app()

try:
    cnx = mysql.connector.connect(
        host=os.getenv('DATABASE_HOST'),
        user=os.getenv('DATABASE_USER'),
        password=os.getenv('DATABASE_PASS'),
        database=os.getenv('DATABASE_NAME')
    )
except mysql.connector.Error as err:
  if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
    print("Something is wrong with your user name or password")
  elif err.errno == errorcode.ER_BAD_DB_ERROR:
    print("Database does not exist")
  else:
    print(err)
else:
  cnx.close()

insert_covid_case = (
    "INSERT INTO Casos "
    """(
        data_coleta, tipo_de_local, confirm_acum, confirm_acum_por_100k_hab, confirm_no_dia,
        semana_epidemologica, obitos_acum, obitos_no_dia, obitos_por_confirm, popula_estimada_2019,
        ultima_atualizacao, dado_repetido, cod_ibge, popula_estimada, data_referencia, numero_atualizacao
    ) """
    "VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
)

options.set_global_options(max_instances=10) 

@https_fn.on_request()
def update_info_covid_database(req: https_fn.Request) -> https_fn.Response:
    cursor = cnx.cursor()
    
    # Obtem a data mais nova atualmente na tabela Casos 
    last_row = "SELECT data_referencia FROM Casos ORDER BY data_referencia DESC LIMIT 1"
    cursor.execute(last_row)
    last_data_referencia = cursor.fetchone()[14]
    
    # Baixa e lê o arquivo CSV mais atualizado
    caso_full_csv = requests.get('https://data.brasil.io/dataset/covid19/caso_full.csv.gz')
    csv_data = caso_full_csv.content.decode('utf-8')
    csv_reader = csv.DictReader(StringIO(csv_data))
    
    # Percorre o csv e insere os dados até atingir a data mais nova atualmente
    for row in csv_reader:
        data_referencia = datetime.strptime(row['data_referencia'], '%Y-%m-%d %H:%M:%S')
        if data_referencia > last_data_referencia:
            data = (row['data_coleta'], row['tipo_de_local'], row['confirm_acum'],
                    row['confirm_acum_por_100k_hab'], row['confirm_no_dia'],
                    row['semana_epidemologica'], row['obitos_acum'], row['obitos_no_dia'],
                    row['obitos_por_confirm'], row['popula_estimada_2019'], row['ultima_atualizacao'],
                    row['dado_repetido'], row['cod_ibge'], row['popula_estimada'],
                    row['data_referencia'], row['numero_atualizacao'])
            
            cursor.execute(insert_covid_case, data)

    cnx.commit()
    cursor.close()
    
    return https_fn.Response("Update completed.")