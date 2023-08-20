import { DataSource } from "typeorm"

const dataSource = new DataSource({
    type: "mysql",
    port: 3306,
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_NAME,
    entities: ["src/entity/*.entity.ts"],
    logging: true,
    synchronize: true,
})

export default dataSource;