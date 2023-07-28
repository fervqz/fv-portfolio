import axios, { AxiosResponse } from "axios";
import { positionParser } from "./utils";
import { BusPosition, BusStatus } from "./map.types.d";
const API_URL = "http://datos.santander.es/api/rest/datasets";

export const getPositions = async (): Promise<BusPosition[] | void> => {

    return axios.get(`${API_URL}/control_flotas_posiciones.json`)
        .then((response: AxiosResponse) => {

            return positionParser(response.data.resources)
                .filter(pos => pos.status === BusStatus.RUNNING);

        })
        .catch(console.log);

};