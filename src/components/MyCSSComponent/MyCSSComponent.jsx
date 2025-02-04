import React from 'react'


import styles from './MyCSSComponent.module.css'

const MyCSSComponent = () => {

    const inLineStyles ={
        color: "blue",
        fontSize: "20px"
    }

    return (
        <>
            <h1 className={styles.title}>
                Título
            </h1>


            <p style={inLineStyles}>texto</p>
        </>
    )
}

export default MyCSSComponent