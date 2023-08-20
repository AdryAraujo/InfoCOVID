import * as express from "express";
import { getStates } from '../controller/state.controller';
import { getCitiesByState } from '../controller/city.controller';
import { getUsersAccesses } from '../controller/user-access.controller';
import { getCases } from "../controller/covid-case.controller";
import { login, signup } from "../controller/user.controller";

const router = express.Router();

router.get('/state', getStates);
router.get('/city/:state', getCitiesByState);
router.get('/cases', getCases);
router.post('/auth/login', login);
router.post('/auth/signup', signup);
router.get('/access', getUsersAccesses);

export default router