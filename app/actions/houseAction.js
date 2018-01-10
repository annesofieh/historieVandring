import {
  GET_HOUSE,
  GET_HOUSES
} from '../constants.js';
//import axios from "axios";
import {get, put, post, delete as axiosDelete} from 'axios'

const dbData = { url: "https://historievndrng-9dca.restdb.io", apiKey: "51bf371bfaa373f248ad7d64f1527f4e16029" }
const collection = "houses"


function getHeader(dbData) {

  const apiKey = {
     "x-apikey": dbData.apiKey
   }

  return { headers: Object.assign({}, apiKey) }
}

export function getHouses() {
  return function(dispatch) {
    console.log("Action getHouses");
    get(`${dbData.url}/rest/${collection}`, Object.assign(getHeader(dbData)
    ))
    .then(response => {
      console.log("Houses:", response.data);
      dispatch({
        type: GET_HOUSES,
        houses: response.data
      });
      })
    .catch(err => {
        console.error("error from axios/restdb", err)
      });
  }
}

/*
export function getHouse() {
let url = "https://historievndrng-9dca.restdb.io/rest/houses";
  return {
    axios.get(url, headers: {"x-apikey": dbData.apiKey})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      dispatch({
        type: GET_HOUSE
      });
  }
};*/

/*export function getHouses() {
  return {
    type: GET_HOUSES,
    houses: [
      {
        houseName: "Fredly",
        bNr: 97,
        gNr: 13,
        descpirtion: "Informajson om Fredly",
        frontImage: ""
      },
      {
        houseName: "Marenhuset",
        bNr: 88,
        gNr: 3,
        descpirtion: "Informajson om Marenhuset",
        frontImage: ""
      }
    ]
  }
};*/
