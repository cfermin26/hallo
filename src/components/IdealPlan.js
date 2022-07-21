import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import PlanForm from "./PlanForm";
// import { useEffect } from "react";

const IdealPlan = () => {
  const StepUno = () => {
    document.getElementById("step1").className = "d-block";
    document.getElementById("step2casa").className = "d-none";
    document.getElementById("step2negocio").className = "d-none";
  };

  const StepDosCasa = () => {
    document.getElementById("step1").className = "d-none";
    document.getElementById("step2casa").className = "d-block";
    document.getElementById("step3casa").className = "d-none";
  };

  const StepDosNegocio = () => {
    document.getElementById("step1").className = "d-none";
    document.getElementById("step2negocio").className = "d-block";
    document.getElementById("step3negocio").className = "d-none";
  };

  const StepTresCasa = () => {
    document.getElementById("step2casa").className = "d-none";
    document.getElementById("step3casa").className = "d-block";
    document.getElementById("step4casa").className = "d-none";
  };

  const StepTresNegocio = () => {
    document.getElementById("step2negocio").className = "d-none";
    document.getElementById("step3negocio").className = "d-block";
    document.getElementById("step4negocio").className = "d-none";
  };

  const StepCuatroCasa = () => {
    document.getElementById("step3casa").className = "d-none";
    document.getElementById("step4casa").className = "d-block";
    document.getElementById("step5casa").className = "d-none";
    document.getElementById("plan-title").className = "d-block";
  };
  const StepCuatroNegocio = () => {
    document.getElementById("step3negocio").className = "d-none";
    document.getElementById("step4negocio").className = "d-block";
    document.getElementById("step5negocio").className = "d-none";
    document.getElementById("plan-title").className = "d-block";
  };
  const StepCincoCasa = () => {
    document.getElementById("step4casa").className = "d-none";
    document.getElementById("step5casa").className = "d-block";
    document.getElementById("plan-title").className = "d-none";
  };
  const StepCincoNegocio = () => {
    document.getElementById("step4negocio").className = "d-none";
    document.getElementById("step5negocio").className = "d-block";
    document.getElementById("plan-title").className = "d-none";
  };

  const [houseSize, setHouseSize] = useState(0);
  const [houseNumber, setHouseNumber] = useState(0);
  const [houseAgency, setHouseAgency] = useState(0);
  const [businessSize, setBusinessSize] = useState(0);
  const [businessNumber, setBusinessNumber] = useState(0);
  const [businessAgency, setBusinessAgency] = useState(0);

  // useEffect(() => {
  //   console.log("Plan: " + houseMegas);
  // }, [houseSize]);

  var houseMegas;
  var housePrice;
  var houseName;

  var businessMegas;
  var businessPrice;
  var businessName;

  /****** House Pequeño 1-2 ******/
  //Casa, Pequeño, 1-2, Azuay - Cuenca
  if (
    houseSize === "1" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "1"
  ) {
    houseName = "Basic";
    houseMegas = 45;
    housePrice = "19.50";

    //Casa, Pequeño, 1-2, Azuay - Pucara
  } else if (
    houseSize === "1" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "2"
  ) {
    houseMegas = 25;
    //Casa, Pequeño, 1-2, Bolivar - Las Naves
  } else if (
    houseSize === "1" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "3"
  ) {
    houseName = "Basic";
    houseMegas = 30;
    housePrice = "19.64";
  }
  //Casa, Pequeño, 1-2, Cañar - La Troncal
  else if (
    houseSize === "1" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "4"
  ) {
    houseName = "Basic";
    houseMegas = 45;
    housePrice = "17.50";
  }
  //Casa, Pequeño, 1-2, Loja - Loja
  else if (
    houseSize === "1" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "5"
  ) {
    houseName = "Basic";
    houseMegas = 50;
    housePrice = "19.50";
  }
  //Casa, Pequeño, 1-2, Los Ríos - Quinsaloma
  else if (
    houseSize === "1" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "6"
  ) {
    houseName = "Basic";
    houseMegas = 35;
    housePrice = "19.64";
  }
  //Casa, Pequeño, 1-2, Pichincha - Quito
  else if (
    houseSize === "1" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "7"
  ) {
    houseName = "Basic";
    houseMegas = 45;
    housePrice = "19.50";
  }
  //Casa, Pequeño, 1-2, Santa Elena - La Libertad
  else if (
    houseSize === "1" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "8"
  ) {
    houseName = "Basic";
    houseMegas = 35;
    housePrice = "19.50";
  }
  //Casa, Pequeño, 1-2, Zamora Chinchipe - Yantzaza
  else if (
    houseSize === "1" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "9"
  ) {
    houseMegas = 25;
  }

  /****** House Mediano 1-2 ******/
  //Casa, Mediano, 1-2, Azuay - Cuenca
  if (
    houseSize === "2" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "1"
  ) {
    houseName = "House";
    houseMegas = 80;
    housePrice = "23.50";

    //Casa, Mediano, 1-2, Azuay - Pucara
  } else if (
    houseSize === "2" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "2"
  ) {
    houseMegas = 35;
    //Casa, Mediano, 1-2, Bolivar - Las Naves
  } else if (
    houseSize === "2" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "3"
  ) {
    houseName = "Pro";
    houseMegas = 50;
    housePrice = "28.57";
  }
  //Casa, Mediano, 1-2, Cañar - La Troncal
  else if (
    houseSize === "2" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "4"
  ) {
    houseName = "House";
    houseMegas = 65;
    housePrice = "22.00";
  }
  //Casa, Mediano, 1-2, Loja - Loja
  else if (
    houseSize === "2" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "5"
  ) {
    houseName = "House";
    houseMegas = 75;
    housePrice = "23.50";
  }
  //Casa, Mediano, 1-2, Los Ríos - Quinsaloma
  else if (
    houseSize === "2" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "6"
  ) {
    houseName = "House";
    houseMegas = 45;
    housePrice = "24.55";
  }
  //Casa, Mediano, 1-2, Pichincha - Quito
  else if (
    houseSize === "2" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "7"
  ) {
    houseName = "House";
    houseMegas = 65;
    housePrice = "23.50";
  }
  //Casa, Mediano, 1-2, Santa Elena - La Libertad
  else if (
    houseSize === "2" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "8"
  ) {
    houseName = "House";
    houseMegas = 45;
    housePrice = "23.50";
  }
  //Casa, Mediano, 1-2, Zamora Chinchipe - Yantzaza
  else if (
    houseSize === "2" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "9"
  ) {
    houseMegas = 35;
  }

  /****** House Grande 1-2 ******/
  //Casa, Grande, 1-2, Azuay - Cuenca
  if (
    houseSize === "3" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "1"
  ) {
    houseName = "Gamer";
    houseMegas = 160;
    housePrice = "40.50";

    //Casa, Grande, 1-2, Azuay - Pucara
  } else if (
    houseSize === "3" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "2"
  ) {
    houseMegas = 35;
    //Casa, Grande, 1-2, Bolivar - Las Naves
  } else if (
    houseSize === "3" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "3"
  ) {
    houseName = "House";
    houseMegas = 40;
    housePrice = "24.11";
  }
  //Casa, Grande, 1-2, Cañar - La Troncal
  else if (
    houseSize === "3" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "4"
  ) {
    houseName = "Gamer";
    houseMegas = 100;
    housePrice = "35.50";
  }
  //Casa, Grande, 1-2, Loja - Loja
  else if (
    houseSize === "3" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "5"
  ) {
    houseName = "Pro";
    houseMegas = 100;
    housePrice = "30.50";
  }
  //Casa, Grande, 1-2, Los Ríos - Quinsaloma
  else if (
    houseSize === "3" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "6"
  ) {
    houseName = "House";
    houseMegas = 45;
    housePrice = "24.55";
  }
  //Casa, Grande, 1-2, Pichincha - Quito
  else if (
    houseSize === "3" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "7"
  ) {
    houseName = "Gamer";
    houseMegas = 100;
    housePrice = "32.50";
  }
  //Casa, Grande, 1-2, Santa Elena - La Libertad
  else if (
    houseSize === "3" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "8"
  ) {
    houseName = "Gamer";
    houseMegas = 75;
    housePrice = "29.50";
  }
  //Casa, Grande, 1-2, Zamora Chinchipe - Yantzaza
  else if (
    houseSize === "3" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "9"
  ) {
    houseMegas = 35;
  }

  /****** House Pequeño 3-4 ******/
  //Casa, Pequeño, 3-4, Azuay - Cuenca
  if (
    houseSize === "1" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "1"
  ) {
    houseName = "House";
    houseMegas = 80;
    housePrice = "23.50";
    //Casa, Pequeño, 3-4, Azuay - Pucara
  } else if (
    houseSize === "1" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "2"
  ) {
    houseMegas = 35;
    //Casa, Pequeño, 3-4, Bolivar - Las Naves
  } else if (
    houseSize === "1" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "3"
  ) {
    houseName = "House";
    houseMegas = 40;
    housePrice = "24.11";
  }
  //Casa, Pequeño, 3-4, Cañar - La Troncal
  else if (
    houseSize === "1" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "4"
  ) {
    houseName = "House";
    houseMegas = 65;
    housePrice = "22.00";
  }
  //Casa, Pequeño, 3-4, Loja - Loja
  else if (
    houseSize === "1" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "5"
  ) {
    houseName = "House";
    houseMegas = 75;
    housePrice = "23.50";
  }
  //Casa, Pequeño, 3-4, Los Ríos - Quinsaloma
  else if (
    houseSize === "1" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "6"
  ) {
    houseName = "House";
    houseMegas = 45;
    housePrice = "24.55";
  }
  //Casa, Pequeño, 3-4, Pichincha - Quito
  else if (
    houseSize === "1" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "7"
  ) {
    houseName = "House";
    houseMegas = 65;
    housePrice = "23.50";
  }
  //Casa, Pequeño, 3-4, Santa Elena - La Libertad
  else if (
    houseSize === "1" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "8"
  ) {
    houseName = "House";
    houseMegas = 45;
    housePrice = "23.50";
  }
  //Casa, Pequeño, 3-4, Zamora Chinchipe - Yantzaza
  else if (
    houseSize === "1" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "9"
  ) {
    houseMegas = 35;
  }

  /****** House Mediano 3-4 ******/
  //Casa, Mediano, 3-4, Azuay - Cuenca
  if (
    houseSize === "2" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "1"
  ) {
    houseName = "Pro";
    houseMegas = 100;
    housePrice = "29.50";
    //Casa, Mediano, 3-4, Azuay - Pucara
  } else if (
    houseSize === "2" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "2"
  ) {
    houseMegas = 45;
    //Casa, Mediano, 3-4, Bolivar - Las Naves
  } else if (
    houseSize === "2" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "3"
  ) {
    houseName = "Pro";
    houseMegas = 50;
    housePrice = "28.57";
  }
  //Casa, Mediano, 3-4, Cañar - La Troncal
  else if (
    houseSize === "2" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "4"
  ) {
    houseName = "Pro";
    houseMegas = 80;
    housePrice = "26.50";
  }
  //Casa, Mediano, 3-4, Loja - Loja
  else if (
    houseSize === "2" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "5"
  ) {
    houseName = "Pro";
    houseMegas = 100;
    housePrice = "30.50";
  }
  //Casa, Mediano, 3-4, Los Ríos - Quinsaloma
  else if (
    houseSize === "2" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "6"
  ) {
    houseName = "Pro";
    houseMegas = 65;
    housePrice = "29.46";
  }
  //Casa, Mediano, 3-4, Pichincha - Quito
  else if (
    houseSize === "2" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "7"
  ) {
    houseName = "Pro";
    houseMegas = 80;
    housePrice = "29.50";
  }
  //Casa, Mediano, 3-4, Santa Elena - La Libertad
  else if (
    houseSize === "2" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "8"
  ) {
    houseName = "Pro";
    houseMegas = 55;
    housePrice = "27.50";
  }
  //Casa, Mediano, 3-4, Zamora Chinchipe - Yantzaza
  else if (
    houseSize === "2" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "9"
  ) {
    houseMegas = 50;
  }

  /****** House Grande 3-4 ******/
  //Casa, Grande, 3-4, Azuay - Cuenca
  if (
    houseSize === "3" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "1"
  ) {
    houseName = "Diamond";
    houseMegas = 250;
    housePrice = "56.50";
    //Casa, Grande, 3-4, Azuay - Pucara
  } else if (
    houseSize === "3" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "2"
  ) {
    houseMegas = 45;
    //Casa, Grande, 3-4, Bolivar - Las Naves
  } else if (
    houseSize === "3" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "3"
  ) {
    houseName = "Pro";
    houseMegas = 50;
    housePrice = "28.57";
  }
  //Casa, Grande, 3-4, Cañar - La Troncal
  else if (
    houseSize === "3" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "4"
  ) {
    houseName = "Diamond";
    houseMegas = 160;
    housePrice = "53.50";
  }
  //Casa, Grande, 3-4, Loja - Loja
  else if (
    houseSize === "3" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "5"
  ) {
    houseName = "Gamer";
    houseMegas = 200;
    housePrice = "60.50";
  }
  //Casa, Grande, 3-4, Los Ríos - Quinsaloma
  else if (
    houseSize === "3" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "6"
  ) {
    houseName = "Pro";
    houseMegas = 65;
    housePrice = "29.46";
  }
  //Casa, Grande, 3-4, Pichincha - Quito
  else if (
    houseSize === "3" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "7"
  ) {
    houseName = "Diamond";
    houseMegas = 160;
    housePrice = "45.50";
  }
  //Casa, Grande, 3-4, Santa Elena - La Libertad
  else if (
    houseSize === "3" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "8"
  ) {
    houseName = "Diamond";
    houseMegas = 100;
    housePrice = "40.50";
  }
  //Casa, Grande, 3-4, Zamora Chinchipe - Yantzaza
  else if (
    houseSize === "3" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "9"
  ) {
    houseMegas = 50;
  }

  /****** House Pequeño 5+ ******/
  //Casa, Pequeño, 5+, Azuay - Cuenca
  if (houseSize === "1" && houseNumber === "5" && houseAgency === "1") {
    houseName = "Pro";
    houseMegas = 100;
    housePrice = "29.50";
    //Casa, Pequeño, 5+, Azuay - Pucara
  } else if (houseSize === "1" && houseNumber === "5" && houseAgency === "2") {
    houseMegas = 45;
    //Casa, Pequeño, 5+, Bolivar - Las Naves
  } else if (houseSize === "1" && houseNumber === "5" && houseAgency === "3") {
    houseName = "Pro";
    houseMegas = 50;
    housePrice = "28.57";
  }
  //Casa, Pequeño, 5+, Cañar - La Troncal
  else if (houseSize === "1" && houseNumber === "5" && houseAgency === "4") {
    houseName = "Pro";
    houseMegas = 80;
    housePrice = "26.50";
  }
  //Casa, Pequeño, 5+, Loja - Loja
  else if (houseSize === "1" && houseNumber === "5" && houseAgency === "5") {
    houseName = "Pro";
    houseMegas = 100;
    housePrice = "30.50";
  }
  //Casa, Pequeño, 5+, Los Ríos - Quinsaloma
  else if (houseSize === "1" && houseNumber === "5" && houseAgency === "6") {
    houseName = "Pro";
    houseMegas = 65;
    housePrice = "29.46";
  }
  //Casa, Pequeño, 5+, Pichincha - Quito
  else if (houseSize === "1" && houseNumber === "5" && houseAgency === "7") {
    houseName = "Pro";
    houseMegas = 80;
    housePrice = "29.50";
  }
  //Casa, Pequeño, 5+, Santa Elena - La Libertad
  else if (houseSize === "1" && houseNumber === "5" && houseAgency === "8") {
    houseName = "Pro";
    houseMegas = 55;
    housePrice = "27.50";
  }
  //Casa, Pequeño, 5+, Zamora Chinchipe - Yantzaza
  else if (houseSize === "1" && houseNumber === "5" && houseAgency === "9") {
    houseMegas = 50;
  }

  /****** House Mediano 5+ ******/
  //Casa, Mediano, 5+, Azuay - Cuenca
  if (houseSize === "2" && houseNumber === "5" && houseAgency === "1") {
    houseName = "Gamer";
    houseMegas = 160;
    housePrice = "40.50";
    //Casa, Mediano, 5+, Azuay - Pucara
  } else if (houseSize === "2" && houseNumber === "5" && houseAgency === "2") {
    houseMegas = 45;
    //Casa, Mediano, 5+, Bolivar - Las Naves
  } else if (houseSize === "2" && houseNumber === "5" && houseAgency === "3") {
    houseName = "Pro";
    houseMegas = 50;
    housePrice = "28.57";
  }
  //Casa, Mediano, 5+, Cañar - La Troncal
  else if (houseSize === "2" && houseNumber === "5" && houseAgency === "4") {
    houseName = "Gamer";
    houseMegas = 100;
    housePrice = "35.50";
  }
  //Casa, Mediano, 5+, Loja - Loja
  else if (houseSize === "2" && houseNumber === "5" && houseAgency === "5") {
    houseName = "Pro";
    houseMegas = 100;
    housePrice = "30.50";
  }
  //Casa, Mediano, 5+, Los Ríos - Quinsaloma
  else if (houseSize === "2" && houseNumber === "5" && houseAgency === "6") {
    houseName = "Pro";
    houseMegas = 65;
    housePrice = "29.46";
  }
  //Casa, Mediano, 5+, Pichincha - Quito
  else if (houseSize === "2" && houseNumber === "5" && houseAgency === "7") {
    houseName = "Gamer";
    houseMegas = 100;
    housePrice = "32.50";
  }
  //Casa, Mediano, 5+, Santa Elena - La Libertad
  else if (houseSize === "2" && houseNumber === "5" && houseAgency === "8") {
    houseName = "Gamer";
    houseMegas = 75;
    housePrice = "29.50";
  }
  //Casa, Mediano, 5+, Zamora Chinchipe - Yantzaza
  else if (houseSize === "2" && houseNumber === "5" && houseAgency === "9") {
    houseMegas = 50;
  }

  /****** House Grande 5+ ******/
  //Casa, Grande, 5+, Azuay - Cuenca
  if (houseSize === "3" && houseNumber === "5" && houseAgency === "1") {
    houseName = "Platinium";
    houseMegas = 300;
    housePrice = "72.50";
    //Casa, Grande, 5+, Azuay - Pucara
  } else if (houseSize === "3" && houseNumber === "5" && houseAgency === "2") {
    houseMegas = 45;
    //Casa, Grande, 5+, Bolivar - Las Naves
  } else if (houseSize === "3" && houseNumber === "5" && houseAgency === "3") {
    houseName = "Gamer";
    houseMegas = 80;
    housePrice = "42.24";
  }
  //Casa, Grande, 5+, Cañar - La Troncal
  else if (houseSize === "3" && houseNumber === "5" && houseAgency === "4") {
    houseName = "Platinium";
    houseMegas = 200;
    housePrice = "78.50";
  }
  //Casa, Grande, 5+, Loja - Loja
  else if (houseSize === "3" && houseNumber === "5" && houseAgency === "5") {
    houseName = "Gamer";
    houseMegas = 200;
    housePrice = "60.50";
  }
  //Casa, Grande, 5+, Los Ríos - Quinsaloma
  else if (houseSize === "3" && houseNumber === "5" && houseAgency === "6") {
    houseName = "Gamer";
    houseMegas = 80;
    housePrice = "42.24";
  }
  //Casa, Grande, 5+, Pichincha - Quito
  else if (houseSize === "3" && houseNumber === "5" && houseAgency === "7") {
    houseName = "Platinium";
    houseMegas = 200;
    housePrice = "57.50";
  }
  //Casa, Grande, 5+, Santa Elena - La Libertad
  else if (houseSize === "3" && houseNumber === "5" && houseAgency === "8") {
    houseName = "Platinium";
    houseMegas = 160;
    housePrice = "56.50";
  }
  //Casa, Grande, 5+, Zamora Chinchipe - Yantzaza
  else if (houseSize === "3" && houseNumber === "5" && houseAgency === "9") {
    houseMegas = 50;
  }

  /****** Negocio Pequeño 1-2 ******/
  //Negocio, Pequeño, 1-2, Azuay - Cuenca
  if (
    businessSize === "1" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "1"
  ) {
    businessName = "Basic";
    businessMegas = 45;
    businessPrice = "19.50";
    //Negocio, Pequeño, 1-2, Azuay - Pucara
  } else if (
    businessSize === "1" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "2"
  ) {
    businessMegas = 25;
    //Negocio, Pequeño, 1-2, Bolivar - Las Naves
  } else if (
    businessSize === "1" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "3"
  ) {
    businessName = "Basic";
    businessMegas = 30;
    businessPrice = "19.64";
  }
  //Negocio, Pequeño, 1-2, Cañar - La Troncal
  else if (
    businessSize === "1" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "4"
  ) {
    businessName = "Basic";
    businessMegas = 45;
    businessPrice = "17.50";
  }
  //Negocio, Pequeño, 1-2, Loja - Loja
  else if (
    businessSize === "1" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "5"
  ) {
    businessName = "Basic";
    businessMegas = 50;
    businessPrice = "19.50";
  }
  //Negocio, Pequeño, 1-2, Los Ríos - Quinsaloma
  else if (
    businessSize === "1" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "6"
  ) {
    businessName = "Basic";
    businessMegas = 35;
    businessPrice = "19.64";
  }
  //Negocio, Pequeño, 1-2, Pichincha - Quito
  else if (
    businessSize === "1" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "7"
  ) {
    businessName = "Basic";
    businessMegas = 45;
    businessPrice = "19.50";
  }
  //Negocio, Pequeño, 1-2, Santa Elena - La Libertad
  else if (
    businessSize === "1" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "8"
  ) {
    businessName = "Basic";
    businessMegas = 35;
    businessPrice = "19.50";
  }
  //Negocio, Pequeño, 1-2, Zamora Chinchipe - Yantzaza
  else if (
    businessSize === "1" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "9"
  ) {
    businessMegas = 25;
  }

  /****** Negocio Mediano 1-2 ******/
  //Negocio, Mediano, 1-2, Azuay - Cuenca
  if (
    businessSize === "2" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "1"
  ) {
    businessName = "House";
    businessMegas = 80;
    businessPrice = "23.50";
    //Negocio, Mediano, 1-2, Azuay - Pucara
  } else if (
    businessSize === "2" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "2"
  ) {
    businessMegas = 35;
    //Negocio, Mediano, 1-2, Bolivar - Las Naves
  } else if (
    businessSize === "2" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "3"
  ) {
    businessName = "House";
    businessMegas = 40;
    businessPrice = "24.11";
  }
  //Negocio, Mediano, 1-2, Cañar - La Troncal
  else if (
    businessSize === "2" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "4"
  ) {
    businessName = "House";
    businessMegas = 65;
    businessPrice = "22.00";
  }
  //Negocio, Mediano, 1-2, Loja - Loja
  else if (
    businessSize === "2" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "5"
  ) {
    businessName = "House";
    businessMegas = 75;
    businessPrice = "23.50";
  }
  //Negocio, Mediano, 1-2, Los Ríos - Quinsaloma
  else if (
    businessSize === "2" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "6"
  ) {
    businessName = "House";
    businessMegas = 45;
    businessPrice = "24.55";
  }
  //Negocio, Mediano, 1-2, Pichincha - Quito
  else if (
    businessSize === "2" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "7"
  ) {
    businessName = "House";
    businessMegas = 65;
    businessPrice = "23.50";
  }
  //Negocio, Mediano, 1-2, Santa Elena - La Libertad
  else if (
    businessSize === "2" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "8"
  ) {
    businessName = "House";
    businessMegas = 45;
    businessPrice = "23.50";
  }
  //Negocio, Mediano, 1-2, Zamora Chinchipe - Yantzaza
  else if (
    businessSize === "2" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "9"
  ) {
    businessMegas = 35;
  }

  /****** Negocio Grande 1-2 ******/
  //Negocio, Grande, 1-2, Azuay - Cuenca
  if (
    businessSize === "3" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "1"
  ) {
    businessName = "Gamer";
    businessMegas = 160;
    businessPrice = "40.50";
    //Negocio, Grande, 1-2, Azuay - Pucara
  } else if (
    businessSize === "3" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "2"
  ) {
    businessMegas = 35;
    //Negocio, Grande, 1-2, Bolivar - Las Naves
  } else if (
    businessSize === "3" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "3"
  ) {
    businessName = "Pro";
    businessMegas = 50;
    businessPrice = "28.57";
  }
  //Negocio, Grande, 1-2, Cañar - La Troncal
  else if (
    businessSize === "3" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "4"
  ) {
    businessName = "Gamer";
    businessMegas = 100;
    businessPrice = "35.50";
  }
  //Negocio, Grande, 1-2, Loja - Loja
  else if (
    businessSize === "3" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "5"
  ) {
    businessName = "Pro";
    businessMegas = 100;
    businessPrice = "30.50";
  }
  //Negocio, Grande, 1-2, Los Ríos - Quinsaloma
  else if (
    businessSize === "3" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "6"
  ) {
    businessName = "House";
    businessMegas = 45;
    businessPrice = "24.55";
  }
  //Negocio, Grande, 1-2, Pichincha - Quito
  else if (
    businessSize === "3" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "7"
  ) {
    businessName = "Gamer";
    businessMegas = 100;
    businessPrice = "32.50";
  }
  //Negocio, Grande, 1-2, Santa Elena - La Libertad
  else if (
    businessSize === "3" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "8"
  ) {
    businessName = "Gamer";
    businessMegas = 75;
    businessPrice = "29.50";
  }
  //Negocio, Grande, 1-2, Zamora Chinchipe - Yantzaza
  else if (
    businessSize === "3" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "9"
  ) {
    businessMegas = 35;
  }

  /****** Negocio Pequeño 3-4 ******/
  //Negocio, Pequeño, 3-4, Azuay - Cuenca
  if (
    businessSize === "1" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "1"
  ) {
    businessName = "House";
    businessMegas = 80;
    businessPrice = "23.50";
    //Negocio, Pequeño, 3-4, Azuay - Pucara
  } else if (
    businessSize === "1" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "2"
  ) {
    businessMegas = 35;
    //Negocio, Pequeño, 3-4, Bolivar - Las Naves
  } else if (
    businessSize === "1" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "3"
  ) {
    businessName = "House";
    businessMegas = 40;
    businessPrice = "24.11";
  }
  //Negocio, Pequeño, 3-4, Cañar - La Troncal
  else if (
    businessSize === "1" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "4"
  ) {
    businessName = "House";
    businessMegas = 65;
    businessPrice = "22.00";
  }
  //Negocio, Pequeño, 3-4, Loja - Loja
  else if (
    businessSize === "1" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "5"
  ) {
    businessName = "House";
    businessMegas = 75;
    businessPrice = "23.50";
  }
  //Negocio, Pequeño, 3-4, Los Ríos - Quinsaloma
  else if (
    businessSize === "1" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "6"
  ) {
    businessName = "House";
    businessMegas = 45;
    businessPrice = "24.55";
  }
  //Negocio, Pequeño, 3-4, Pichincha - Quito
  else if (
    businessSize === "1" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "7"
  ) {
    businessName = "House";
    businessMegas = 65;
    businessPrice = "23.50";
  }
  //Negocio, Pequeño, 3-4, Santa Elena - La Libertad
  else if (
    businessSize === "1" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "8"
  ) {
    businessName = "House";
    businessMegas = 45;
    businessPrice = "23.50";
  }
  //Negocio, Pequeño, 3-4, Zamora Chinchipe - Yantzaza
  else if (
    businessSize === "1" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "9"
  ) {
    businessMegas = 35;
  }

  /****** Negocio Mediano 3-4 ******/
  //Negocio, Mediano, 3-4, Azuay - Cuenca
  if (
    businessSize === "2" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "1"
  ) {
    businessName = "Pro";
    businessMegas = 100;
    businessPrice = "29.50";
    //Negocio, Mediano, 3-4, Azuay - Pucara
  } else if (
    businessSize === "2" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "2"
  ) {
    businessMegas = 45;
    //Negocio, Mediano, 3-4, Bolivar - Las Naves
  } else if (
    businessSize === "2" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "3"
  ) {
    businessName = "Pro";
    businessMegas = 50;
    businessPrice = "28.57";
  }
  //Negocio, Mediano, 3-4, Cañar - La Troncal
  else if (
    businessSize === "2" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "4"
  ) {
    businessName = "Pro";
    businessMegas = 80;
    businessPrice = "26.50";
  }
  //Negocio, Mediano, 3-4, Loja - Loja
  else if (
    businessSize === "2" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "5"
  ) {
    businessName = "Pro";
    businessMegas = 100;
    businessPrice = "30.50";
  }
  //Negocio, Mediano, 3-4, Los Ríos - Quinsaloma
  else if (
    businessSize === "2" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "6"
  ) {
    businessName = "Pro";
    businessMegas = 65;
    businessPrice = "29.46";
  }
  //Negocio, Mediano, 3-4, Pichincha - Quito
  else if (
    businessSize === "2" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "7"
  ) {
    businessName = "Pro";
    businessMegas = 80;
    businessPrice = "29.50";
  }
  //Negocio, Mediano, 3-4, Santa Elena - La Libertad
  else if (
    businessSize === "2" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "8"
  ) {
    businessName = "Pro";
    businessMegas = 55;
    businessPrice = "27.50";
  }
  //Negocio, Mediano, 3-4, Zamora Chinchipe - Yantzaza
  else if (
    businessSize === "2" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "9"
  ) {
    businessMegas = 50;
  }

  /****** House Grande 3-4 ******/
  //Negocio, Grande, 3-4, Azuay - Cuenca
  if (
    businessSize === "3" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "1"
  ) {
    businessName = "Diamond";
    businessMegas = 250;
    businessPrice = "56.50";
    //Negocio, Grande, 3-4, Azuay - Pucara
  } else if (
    businessSize === "3" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "2"
  ) {
    businessMegas = 45;
    //Negocio, Grande, 3-4, Bolivar - Las Naves
  } else if (
    businessSize === "3" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "3"
  ) {
    businessName = "Gamer";
    businessMegas = 80;
    businessPrice = "42.24";
  }
  //Negocio, Grande, 3-4, Cañar - La Troncal
  else if (
    businessSize === "3" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "4"
  ) {
    businessName = "Diamond";
    businessMegas = 160;
    businessPrice = "53.50";
  }
  //Negocio, Grande, 3-4, Loja - Loja
  else if (
    businessSize === "3" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "5"
  ) {
    businessName = "Gamer";
    businessMegas = 200;
    businessPrice = "60.50";
  }
  //Negocio, Grande, 3-4, Los Ríos - Quinsaloma
  else if (
    businessSize === "3" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "6"
  ) {
    businessName = "Pro";
    businessMegas = 65;
    businessPrice = "29.46";
  }
  //Negocio, Grande, 3-4, Pichincha - Quito
  else if (
    businessSize === "3" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "7"
  ) {
    businessName = "Diamond";
    businessMegas = 160;
    businessPrice = "45.50";
  }
  //Negocio, Grande, 3-4, Santa Elena - La Libertad
  else if (
    businessSize === "3" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "8"
  ) {
    businessName = "Diamond";
    businessMegas = 100;
    businessPrice = "40.50";
  }
  //Negocio, Grande, 3-4, Zamora Chinchipe - Yantzaza
  else if (
    businessSize === "3" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "9"
  ) {
    businessMegas = 50;
  }

  /******Negocio Pequeño 5+ ******/
  //Negocio, Pequeño, 5+, Azuay - Cuenca
  if (
    businessSize === "1" &&
    businessNumber === "5" &&
    businessAgency === "1"
  ) {
    businessName = "Pro";
    businessMegas = 100;
    businessPrice = "29.50";
    //Negocio, Pequeño, 5+, Azuay - Pucara
  } else if (
    businessSize === "1" &&
    businessNumber === "5" &&
    businessAgency === "2"
  ) {
    businessMegas = 45;
    //Negocio, Pequeño, 5+, Bolivar - Las Naves
  } else if (
    businessSize === "1" &&
    businessNumber === "5" &&
    businessAgency === "3"
  ) {
    businessName = "Pro";
    businessMegas = 50;
    businessPrice = "28.57";
  }
  //Negocio, Pequeño, 5+, Cañar - La Troncal
  else if (
    businessSize === "1" &&
    businessNumber === "5" &&
    businessAgency === "4"
  ) {
    businessName = "Pro";
    businessMegas = 80;
    businessPrice = "26.50";
  }
  //Negocio, Pequeño, 5+, Loja - Loja
  else if (
    businessSize === "1" &&
    businessNumber === "5" &&
    businessAgency === "5"
  ) {
    businessName = "Pro";
    businessMegas = 100;
    businessPrice = "30.50";
  }
  //Negocio, Pequeño, 5+, Los Ríos - Quinsaloma
  else if (
    businessSize === "1" &&
    businessNumber === "5" &&
    businessAgency === "6"
  ) {
    businessName = "Pro";
    businessMegas = 65;
    businessPrice = "29.46";
  }
  //Negocio, Pequeño, 5+, Pichincha - Quito
  else if (
    businessSize === "1" &&
    businessNumber === "5" &&
    businessAgency === "7"
  ) {
    businessName = "Pro";
    businessMegas = 80;
    businessPrice = "29.50";
  }
  //Negocio, Pequeño, 5+, Santa Elena - La Libertad
  else if (
    businessSize === "1" &&
    businessNumber === "5" &&
    businessAgency === "8"
  ) {
    businessName = "Pro";
    businessMegas = 55;
    businessPrice = "27.50";
  }
  //Negocio, Pequeño, 5+, Zamora Chinchipe - Yantzaza
  else if (
    businessSize === "1" &&
    businessNumber === "5" &&
    businessAgency === "9"
  ) {
    businessMegas = 50;
  }

  /****** Negocio Mediano 5+ ******/
  //Negocio, Mediano, 5+, Azuay - Cuenca
  if (
    businessSize === "2" &&
    businessNumber === "5" &&
    businessAgency === "1"
  ) {
    businessName = "Gamer";
    businessMegas = 160;
    businessPrice = "40.50";
    //Negocio, Mediano, 5+, Azuay - Pucara
  } else if (
    businessSize === "2" &&
    businessNumber === "5" &&
    businessAgency === "2"
  ) {
    businessMegas = 45;
    //Negocio, Mediano, 5+, Bolivar - Las Naves
  } else if (
    businessSize === "2" &&
    businessNumber === "5" &&
    businessAgency === "3"
  ) {
    businessName = "Gamer";
    businessMegas = 80;
    businessPrice = "42.24";
  }
  //Negocio, Mediano, 5+, Cañar - La Troncal
  else if (
    businessSize === "2" &&
    businessNumber === "5" &&
    businessAgency === "4"
  ) {
    businessName = "Gamer";
    businessMegas = 100;
    businessPrice = "35.50";
  }
  //Negocio, Mediano, 5+, Loja - Loja
  else if (
    businessSize === "2" &&
    businessNumber === "5" &&
    businessAgency === "5"
  ) {
    businessName = "Gamer";
    businessMegas = 200;
    businessPrice = "60.50";
  }
  //Negocio, Mediano, 5+, Los Ríos - Quinsaloma
  else if (
    businessSize === "2" &&
    businessNumber === "5" &&
    businessAgency === "6"
  ) {
    businessName = "Pro";
    businessMegas = 65;
    businessPrice = "29.46";
  }
  //Negocio, Mediano, 5+, Pichincha - Quito
  else if (
    businessSize === "2" &&
    businessNumber === "5" &&
    businessAgency === "7"
  ) {
    businessName = "Gamer";
    businessMegas = 100;
    businessPrice = "32.50";
  }
  //Negocio, Mediano, 5+, Santa Elena - La Libertad
  else if (
    businessSize === "2" &&
    businessNumber === "5" &&
    businessAgency === "8"
  ) {
    businessName = "Gamer";
    businessMegas = 75;
    businessPrice = "29.50";
  }
  //Negocio, Mediano, 5+, Zamora Chinchipe - Yantzaza
  else if (
    businessSize === "2" &&
    businessNumber === "5" &&
    businessAgency === "9"
  ) {
    businessMegas = 50;
  }

  /****** House Grande 5+ ******/
  //Negocio, Grande, 5+, Azuay - Cuenca
  if (
    businessSize === "3" &&
    businessNumber === "5" &&
    businessAgency === "1"
  ) {
    businessName = "Platinium";
    businessMegas = 300;
    businessPrice = "72.50";
    //Negocio, Grande, 5+, Azuay - Pucara
  } else if (
    businessSize === "3" &&
    businessNumber === "5" &&
    businessAgency === "2"
  ) {
    businessMegas = 45;
    //Negocio, Grande, 5+, Bolivar - Las Naves
  } else if (
    businessSize === "3" &&
    businessNumber === "5" &&
    businessAgency === "3"
  ) {
    businessName = "Diamond";
    businessMegas = 100;
    businessPrice = "56.25";
  }
  //Negocio, Grande, 5+, Cañar - La Troncal
  else if (
    businessSize === "3" &&
    businessNumber === "5" &&
    businessAgency === "4"
  ) {
    businessName = "Platinium";
    businessMegas = 200;
    businessPrice = "78.50";
  }
  //Negocio, Grande, 5+, Loja - Loja
  else if (
    businessSize === "3" &&
    businessNumber === "5" &&
    businessAgency === "5"
  ) {
    businessName = "Diamond";
    businessMegas = 300;
    businessPrice = "90.50";
  }
  //Negocio, Grande, 5+, Los Ríos - Quinsaloma
  else if (
    businessSize === "3" &&
    businessNumber === "5" &&
    businessAgency === "6"
  ) {
    businessName = "Gamer";
    businessMegas = 80;
    businessPrice = "42.24";
  }
  //Negocio, Grande, 5+, Pichincha - Quito
  else if (
    businessSize === "3" &&
    businessNumber === "5" &&
    businessAgency === "7"
  ) {
    businessName = "Platinium";
    businessMegas = 200;
    businessPrice = "57.50";
  }
  //Negocio, Grande, 5+, Santa Elena - La Libertad
  else if (
    businessSize === "3" &&
    businessNumber === "5" &&
    businessAgency === "8"
  ) {
    businessName = "Platinium";
    businessMegas = 160;
    businessPrice = "56.50";
  }
  //Negocio, Grande, 5+, Zamora Chinchipe - Yantzaza
  else if (
    businessSize === "3" &&
    businessNumber === "5" &&
    businessAgency === "9"
  ) {
    businessMegas = 50;
  }

  /* console.log("Casa tamaño: " + houseSize);
  console.log("Casa número: " + houseNumber);
  console.log("Casa agencia: " + houseAgency);
  console.log("Casa Plan: " + houseMegas); */

  /* console.log("Negocio tamaño: " + businessSize);
  console.log("Negocio número: " + businessNumber);
  console.log("Negocio agencia: " + businessAgency);
  console.log("Negocio plan: " + businessMegas); */
  // console.log(houseMegas);

  // useEffect(() => {
  //   console.log(houseSize);
  // }, [houseSize]);

  return (
    <div className="plan-card shadow mx-auto px-0 px-md-5 py-3 py-md-4">
      <Container id="plan-title">
        <Row>
          <Col md={12}>
            <h3 className="plan-title text-center">
              Elige tu <span className="orange-text">PLAN IDEAL</span>
            </h3>
          </Col>
        </Row>
      </Container>
      {/************************** step1 ¿Hogar o negocio? ************************/}
      <section id="step1" className="d-non">
        <Container>
          <Row>
            <Col md={12}>
              <h4 className="plan-subtitle text-center">
                <span className="orange-text">¿</span>NECESITAS CONEXION A
                INTERNET PARA{" "}
                <span className="orange-text">HOGAR O NEGOCIO?</span>
              </h4>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <StaticImage
                src="../images/home/hallo-planes.png"
                alt="Hallo planes"
              />
            </Col>
          </Row>
          <Row className="mt-2 mb-2">
            <Col xs={6} className="text-center">
              <Button
                variant="secondary"
                className="ms-md-5 plan-btn"
                onClick={() => StepDosCasa()}
              >
                HOGAR
              </Button>
            </Col>
            <Col xs={6} className="text-center">
              <Button
                variant="secondary"
                className="me-md-5 plan-btn"
                onClick={() => StepDosNegocio()}
              >
                NEGOCIO
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      {/************************** step2 Tamaño de tu casa ************************/}
      <section id="step2casa" className="d-none">
        <Container>
          <Row>
            <Col md={12}>
              <h4 className="plan-subtitle text-center">
                <span className="orange-text">¿</span>CUÁL ES EL TAMAÑO DE{" "}
                <span className="orange-text">TU CASA O DEPARTAMENTO?</span>
              </h4>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <StaticImage
                src="../images/home/hallo-plan-hogar.png"
                alt="Hallo planes"
              />
            </Col>
          </Row>
          <Row className="mt-2 mb-2">
            <Col xs={4} className="text-center">
              <Button
                variant="secondary"
                className="ms-md-5 plan-btn"
                value="1"
                // onClick={(e) => setHouseSize(e.target.value)}
                onClick={(e) => {
                  setHouseSize(e.target.value);
                  StepTresCasa();
                }}
              >
                PEQUEÑO
              </Button>
            </Col>
            <Col xs={4} className="text-center">
              <Button
                variant="secondary"
                className="me-md-5 plan-btn"
                value="2"
                onClick={(e) => {
                  setHouseSize(e.target.value);
                  StepTresCasa();
                }}
              >
                MEDIANO
              </Button>
            </Col>
            <Col xs={4} className="text-center">
              <Button
                variant="secondary"
                className="me-md-5 plan-btn"
                value="3"
                onClick={(e) => {
                  setHouseSize(e.target.value);
                  StepTresCasa();
                }}
              >
                GRANDE
              </Button>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12} className="d-flex justify-content-center">
              <Button
                variant="outline-secondary prev-btn"
                onClick={() => StepUno()}
              >
                Anterior
              </Button>
              {/* <Button variant="danger next-btn" onClick={() => StepTresCasa()}>
                Siguiente
              </Button> */}
            </Col>
          </Row>
        </Container>
      </section>
      {/************************** step2 Tamaño de tu negocio ************************/}
      <section id="step2negocio" className="d-none">
        <Container>
          <Row>
            <Col md={12} className="text-center">
              <h4 className="plan-subtitle">
                <span className="orange-text">¿</span>CUÁL ES EL TAMAÑO DE{" "}
                <span className="orange-text">TU NEGOCIO?</span>
              </h4>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <StaticImage
                src="../images/home/hallo-plan-negocio.png"
                alt="Hallo planes"
              />
            </Col>
          </Row>
          <Row className="mt-2 mb-2">
            <Col xs={4} className="text-center">
              <Button
                variant="secondary"
                className="ms-md-5 plan-btn"
                value="1"
                onClick={(e) => {
                  setBusinessSize(e.target.value);
                  StepTresNegocio();
                }}
              >
                PEQUEÑO
              </Button>
            </Col>
            <Col xs={4} className="text-center">
              <Button
                variant="secondary"
                className="me-md-5 plan-btn"
                value="2"
                onClick={(e) => {
                  setBusinessSize(e.target.value);
                  StepTresNegocio();
                }}
              >
                MEDIANO
              </Button>
            </Col>
            <Col xs={4} className="text-center">
              <Button
                variant="secondary"
                className="me-md-5 plan-btn"
                value="3"
                onClick={(e) => {
                  setBusinessSize(e.target.value);
                  StepTresNegocio();
                }}
              >
                GRANDE
              </Button>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12} className="d-flex justify-content-center">
              <Button
                variant="outline-secondary prev-btn"
                onClick={() => StepUno()}
              >
                Anterior
              </Button>
              {/* <Button
                variant="danger next-btn"
                onClick={() => StepTresNegocio()}
              >
                Siguiente
              </Button> */}
            </Col>
          </Row>
        </Container>
      </section>
      {/************************** step3 Número de navegantes casa ************************/}
      <section id="step3casa" className="d-none">
        <Container>
          <Row>
            <Col md={12}>
              <h4 className="plan-subtitle text-center">
                ¿Número de navegantes?
              </h4>
            </Col>
          </Row>
          <Row className="mt-2 mb-2">
            <Col xs={12} className="text-center d-flex justify-content-center">
              <Button
                variant="secondary"
                className="number-btn"
                value="1"
                onClick={(e) => {
                  setHouseNumber(e.target.value);
                  StepCuatroCasa();
                }}
              >
                1
              </Button>
              <Button
                variant="secondary"
                className="ms-3 number-btn"
                value="2"
                onClick={(e) => {
                  setHouseNumber(e.target.value);
                  StepCuatroCasa();
                }}
              >
                2
              </Button>
              <Button
                variant="secondary"
                className="ms-3 number-btn"
                value="3"
                onClick={(e) => {
                  setHouseNumber(e.target.value);
                  StepCuatroCasa();
                }}
              >
                3
              </Button>
              <Button
                variant="secondary"
                className="ms-3 number-btn"
                value="4"
                onClick={(e) => {
                  setHouseNumber(e.target.value);
                  StepCuatroCasa();
                }}
              >
                4
              </Button>
              <Button
                variant="secondary"
                className="ms-3 number-btn"
                value="5"
                onClick={(e) => {
                  setHouseNumber(e.target.value);
                  StepCuatroCasa();
                }}
              >
                5+
              </Button>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12} className="d-flex justify-content-center">
              <Button
                variant="outline-secondary prev-btn"
                onClick={() => StepDosCasa()}
              >
                Anterior
              </Button>
              {/* <Button
                variant="danger next-btn"
                onClick={() => StepCuatroCasa()}
              >
                Siguiente
              </Button> */}
            </Col>
          </Row>
        </Container>
      </section>
      {/************************** step3 Número de navegantes negocio ************************/}
      <section id="step3negocio" className="d-none">
        <Container>
          <Row>
            <Col md={12}>
              <h4 className="plan-subtitle text-center">
                ¿Número de navegantes?
              </h4>
            </Col>
          </Row>
          <Row className="mt-2 mb-2">
            <Col xs={12} className="text-center d-flex justify-content-center">
              <Button
                variant="secondary"
                className="number-btn"
                value="1"
                onClick={(e) => {
                  setBusinessNumber(e.target.value);
                  StepCuatroNegocio();
                }}
              >
                1
              </Button>
              <Button
                variant="secondary"
                className="ms-3 number-btn"
                value="2"
                onClick={(e) => {
                  setBusinessNumber(e.target.value);
                  StepCuatroNegocio();
                }}
              >
                2
              </Button>
              <Button
                variant="secondary"
                className="ms-3 number-btn"
                value="3"
                onClick={(e) => {
                  setBusinessNumber(e.target.value);
                  StepCuatroNegocio();
                }}
              >
                3
              </Button>
              <Button
                variant="secondary"
                className="ms-3 number-btn"
                value="4"
                onClick={(e) => {
                  setBusinessNumber(e.target.value);
                  StepCuatroNegocio();
                }}
              >
                4
              </Button>
              <Button
                variant="secondary"
                className="ms-3 number-btn"
                value="5"
                onClick={(e) => {
                  setBusinessNumber(e.target.value);
                  StepCuatroNegocio();
                }}
              >
                5+
              </Button>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12} className="d-flex justify-content-center">
              <Button
                variant="outline-secondary prev-btn"
                onClick={() => StepDosNegocio()}
              >
                Anterior
              </Button>
              {/* <Button
                variant="danger next-btn"
                onClick={() => StepCuatroNegocio()}
              >
                Siguiente
              </Button> */}
            </Col>
          </Row>
        </Container>
      </section>
      {/************************** step4 Selecciona una agencia ************************/}
      <section id="step4casa" className="d-none">
        <Container>
          <Row>
            <Col md={12}>
              <h4 className="plan-subtitle text-center">
                Selecciona una agencia
              </h4>
            </Col>
          </Row>
          <Row className="mt-2 mb-2">
            <Col xs={12} className="text-center d-flex justify-content-center">
              <FloatingLabel label="Agencia" className="mb-2">
                <Form.Select
                  required
                  onChange={(e) => {
                    setHouseAgency(e.target.value);
                    StepCincoCasa();
                  }}
                  /* onChange={(e) => setHouseAgency(e.target.value)} */
                >
                  <option value="">Seleccione</option>
                  <option value="1">Azuay - Cuenca</option>
                  <option value="2">Azuay - Pucará</option>
                  <option value="3">Bolivar - Las Naves</option>
                  <option value="4">Cañar - La Troncal</option>
                  <option value="5">Loja - Loja</option>
                  <option value="6">Los Ríos - Quinsaloma</option>
                  <option value="7">Pichincha - Quito</option>
                  <option value="8">Santa Elena - La Libertad</option>
                  <option value="9">Zamora Chinchipe - Yantzaza</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12} className="d-flex justify-content-center">
              <Button
                variant="outline-secondary prev-btn"
                onClick={() => StepTresCasa()}
              >
                Anterior
              </Button>
              {/* <Button variant="danger next-btn" onClick={() => StepCincoCasa()}>
                Siguiente
              </Button> */}
            </Col>
          </Row>
        </Container>
      </section>
      {/************************** step4 Selecciona una agencia ************************/}
      <section id="step4negocio" className="d-none">
        <Container>
          <Row>
            <Col md={12}>
              <h4 className="plan-subtitle text-center">
                Selecciona una agencia
              </h4>
            </Col>
          </Row>
          <Row className="mt-2 mb-2">
            <Col xs={12} className="text-center d-flex justify-content-center">
              <FloatingLabel label="Agencia" className="mb-2">
                <Form.Select
                  required
                  onChange={(e) => {
                    setBusinessAgency(e.target.value);
                    StepCincoNegocio();
                  }}
                  /* onChange={(e) => setBusinessAgency(e.target.value)} */
                >
                  <option value="">Seleccione</option>
                  <option value="1">Azuay - Cuenca</option>
                  <option value="2">Azuay - Pucará</option>
                  <option value="3">Bolivar - Las Naves</option>
                  <option value="4">Cañar - La Troncal</option>
                  <option value="5">Loja - Loja</option>
                  <option value="6">Los Ríos - Quinsaloma</option>
                  <option value="7">Pichincha - Quito</option>
                  <option value="8">Santa Elena - La Libertad</option>
                  <option value="9">Zamora Chinchipe - Yantzaza</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12} className="d-flex justify-content-center">
              <Button
                variant="outline-secondary prev-btn"
                onClick={() => StepTresNegocio()}
              >
                Anterior
              </Button>

              {/* <Button
                variant="danger next-btn"
                onClick={() => StepCincoNegocio()}
              >
                Siguiente
              </Button> */}
            </Col>
          </Row>
        </Container>
      </section>
      {/************************** step5 formulario ************************/}
      <section id="step5casa" className="d-none">
        <Container>
          <Row>
            <Col md={12}>
              <PlanForm
                type={"Casa"}
                size={houseSize}
                number={houseNumber}
                agency={houseAgency}
                planMegas={houseMegas}
                planPrice={housePrice}
                planName={houseName}
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12} className="d-flex justify-content-center">
              <Button
                variant="outline-secondary prev-btn"
                onClick={() => StepCuatroCasa()}
              >
                Anterior
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      {/************************** step5 formulario ************************/}
      <section id="step5negocio" className="d-none">
        <Container>
          <Row>
            <Col md={12}>
              <PlanForm
                type={"Negocio"}
                size={businessSize}
                number={businessNumber}
                agency={businessAgency}
                planMegas={businessMegas}
                planPrice={businessPrice}
                planName={businessName}
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12} className="d-flex justify-content-center">
              <Button
                variant="outline-secondary prev-btn"
                onClick={() => StepCuatroNegocio()}
              >
                Anterior
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default IdealPlan;
