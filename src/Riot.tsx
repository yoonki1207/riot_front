import { SERVER_RIOT } from "./config";
import { ISummonerInfo } from "./dto/summoner.dto";

const axios = require('axios').default;

export const getSummonerDTO = async (summonerName: string): Promise<void> => {
    let ret: Promise<ISummonerInfo>;
    await axios.get(`${SERVER_RIOT}/get-summoner/${summonerName}`)
        .then((response: ISummonerInfo) => {
            console.log(response)
        })
        .catch(
            console.log('error')
        )
        .then(
            console.log('always')
        )
} 