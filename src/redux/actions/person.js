import { PERSONS } from "../constant";

export const addPerson = personObj => ({type: PERSONS, data: personObj})