import React from "react";




const Validator = maxNumb => value => (value && value.lenght > maxNumb?  console.log("max lenght") : undefined)


export default Validator