import React from "react";
import styles from "./countriescard.module.css";

const countriescard = ({name,flagAltText,flagImg}) => {
    return(
        <div className={styles.card}>
            <img className={styles.countryImg} src={flagImg} alt={flagAltText} />
            <h2>{name}</h2>
        </div>
    )
}

export default countriescard;