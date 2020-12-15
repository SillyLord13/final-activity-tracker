import axios from 'axios'
import {response} from "express";

const base_url = '/api/activities/'

export default {
    getAllRecords(){
        return axios.get(base_url).then(response => {
            return response.data
        })
    },
    addRecord(activity){
        return axios.post(base_url,activity).then( response =>{
            return response.data
        })
    }
}