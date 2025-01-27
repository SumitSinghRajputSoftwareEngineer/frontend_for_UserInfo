import axios from "axios";
import React from "react";

async function SortUserByAge(ascending) {
    const url = "http://localhost:8080/api/users/sort/age";

    try {
        const response = await axios({url, method: "GET", params: {"ascending": ascending}});
        return response.data;
    }
    catch (error){
        console.error("API error while sorting",error);
    }
};
