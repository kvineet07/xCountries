import React, {useState} from "react";
import Countriescard from "./countriescard";
import styles from "./countriescard.module.css";
import axios from "axios";

const Countries = ()=>{
   const API_ENDPOINT = "https://xcountries-backend.azurewebsites.net/all";

   const [flags, setFlags] = useState([]);

   const fetchData = async () => {
    try {
      const response = await axios.get(API_ENDPOINT);
      setFlags(response.data);
    //   console.log(response.data);
      return response.data;
      
    } catch (e) {
      console.error("Error fetching data: ", e);
    }
  };

fetchData();

console.log(flags);
    return(
    
       <div className={styles.countries}>
        {flags.map((flag)=>(
        
        <Countriescard
        key={flag.abbr}
        name={flag.name}
        flagImg ={flag.flag}
        flagAltText ={flag.abbr}
        />
    ))}
       </div>
       

    )
}
export default Countries;