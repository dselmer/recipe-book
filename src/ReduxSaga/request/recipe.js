import axios from "axios";

export function requestRecipe(){
    return axios.request({
        method: 'GET',
        url: 'https://dev-252794735529558.api.raw-labs.com/json-programming-heroes',
        
    })
}