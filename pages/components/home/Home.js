import React, {useEffect, useState} from "react";
import axios from "axios";

function Home() {
const [story, setStory] = useState([])
useEffect(() => {
    axios.get(process.env.BASE_URL_STORIES,{
        params: {
            access_token: process.env.TOKEN_ACCESS,
        }
    }).then((resp) =>{
        console.log(resp)
    }).catch((err) =>{
        console.log(err)
    })
}, [])

    return(
        <>
        
        </>
    )

}

export default Home;