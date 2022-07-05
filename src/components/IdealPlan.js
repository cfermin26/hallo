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
  //   console.log("Plan: " + housePlan);
  // }, [houseSize]);

  var housePlan;
  var businessPlan;

  /****** House Pequeño 1-2 ******/
  //Casa, Pequeño, 1-2, Azuay - Cuenca
  if (
    houseSize === "1" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "1"
  ) {
    housePlan = 45;
    //Casa, Pequeño, 1-2, Azuay - Pucara
  } else if (
    houseSize === "1" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "2"
  ) {
    housePlan = 25;
    //Casa, Pequeño, 1-2, Bolivar - Las Naves
  } else if (
    houseSize === "1" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "3"
  ) {
    housePlan = 30;
  }
  //Casa, Pequeño, 1-2, Cañar - La Troncal
  else if (
    houseSize === "1" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "4"
  ) {
    housePlan = 45;
  }
  //Casa, Pequeño, 1-2, Loja - Loja
  else if (
    houseSize === "1" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "5"
  ) {
    housePlan = 50;
  }
  //Casa, Pequeño, 1-2, Los Ríos - Quinsaloma
  else if (
    houseSize === "1" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "6"
  ) {
    housePlan = 35;
  }
  //Casa, Pequeño, 1-2, Pichincha - Quito
  else if (
    houseSize === "1" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "7"
  ) {
    housePlan = 45;
  }
  //Casa, Pequeño, 1-2, Santa Elena - La Libertad
  else if (
    houseSize === "1" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "8"
  ) {
    housePlan = 35;
  }
  //Casa, Pequeño, 1-2, Zamora Chinchipe - Yantzaza
  else if (
    houseSize === "1" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "9"
  ) {
    housePlan = 25;
  }

  /****** House Mediano 1-2 ******/
  //Casa, Mediano, 1-2, Azuay - Cuenca
  if (
    houseSize === "2" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "1"
  ) {
    housePlan = 80;
    //Casa, Mediano, 1-2, Azuay - Pucara
  } else if (
    houseSize === "2" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "2"
  ) {
    housePlan = 35;
    //Casa, Mediano, 1-2, Bolivar - Las Naves
  } else if (
    houseSize === "2" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "3"
  ) {
    housePlan = 50;
  }
  //Casa, Mediano, 1-2, Cañar - La Troncal
  else if (
    houseSize === "2" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "4"
  ) {
    housePlan = 65;
  }
  //Casa, Mediano, 1-2, Loja - Loja
  else if (
    houseSize === "2" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "5"
  ) {
    housePlan = 75;
  }
  //Casa, Mediano, 1-2, Los Ríos - Quinsaloma
  else if (
    houseSize === "2" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "6"
  ) {
    housePlan = 45;
  }
  //Casa, Mediano, 1-2, Pichincha - Quito
  else if (
    houseSize === "2" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "7"
  ) {
    housePlan = 75;
  }
  //Casa, Mediano, 1-2, Santa Elena - La Libertad
  else if (
    houseSize === "2" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "8"
  ) {
    housePlan = 45;
  }
  //Casa, Mediano, 1-2, Zamora Chinchipe - Yantzaza
  else if (
    houseSize === "2" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "9"
  ) {
    housePlan = 35;
  }

  /****** House Grande 1-2 ******/
  //Casa, Grande, 1-2, Azuay - Cuenca
  if (
    houseSize === "3" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "1"
  ) {
    housePlan = 160;
    //Casa, Grande, 1-2, Azuay - Pucara
  } else if (
    houseSize === "3" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "2"
  ) {
    housePlan = 35;
    //Casa, Grande, 1-2, Bolivar - Las Naves
  } else if (
    houseSize === "3" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "3"
  ) {
    housePlan = 40;
  }
  //Casa, Grande, 1-2, Cañar - La Troncal
  else if (
    houseSize === "3" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "4"
  ) {
    housePlan = 100;
  }
  //Casa, Grande, 1-2, Loja - Loja
  else if (
    houseSize === "3" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "5"
  ) {
    housePlan = 100;
  }
  //Casa, Grande, 1-2, Los Ríos - Quinsaloma
  else if (
    houseSize === "3" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "6"
  ) {
    housePlan = 45;
  }
  //Casa, Grande, 1-2, Pichincha - Quito
  else if (
    houseSize === "3" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "7"
  ) {
    housePlan = 100;
  }
  //Casa, Grande, 1-2, Santa Elena - La Libertad
  else if (
    houseSize === "3" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "8"
  ) {
    housePlan = 75;
  }
  //Casa, Grande, 1-2, Zamora Chinchipe - Yantzaza
  else if (
    houseSize === "3" &&
    houseNumber >= "1" &&
    houseNumber <= "2" &&
    houseAgency === "9"
  ) {
    housePlan = 35;
  }

  /****** House Pequeño 3-4 ******/
  //Casa, Pequeño, 3-4, Azuay - Cuenca
  if (
    houseSize === "1" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "1"
  ) {
    housePlan = 80;
    //Casa, Pequeño, 3-4, Azuay - Pucara
  } else if (
    houseSize === "1" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "2"
  ) {
    housePlan = 35;
    //Casa, Pequeño, 3-4, Bolivar - Las Naves
  } else if (
    houseSize === "1" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "3"
  ) {
    housePlan = 40;
  }
  //Casa, Pequeño, 3-4, Cañar - La Troncal
  else if (
    houseSize === "1" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "4"
  ) {
    housePlan = 65;
  }
  //Casa, Pequeño, 3-4, Loja - Loja
  else if (
    houseSize === "1" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "5"
  ) {
    housePlan = 75;
  }
  //Casa, Pequeño, 3-4, Los Ríos - Quinsaloma
  else if (
    houseSize === "1" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "6"
  ) {
    housePlan = 45;
  }
  //Casa, Pequeño, 3-4, Pichincha - Quito
  else if (
    houseSize === "1" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "7"
  ) {
    housePlan = 65;
  }
  //Casa, Pequeño, 3-4, Santa Elena - La Libertad
  else if (
    houseSize === "1" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "8"
  ) {
    housePlan = 45;
  }
  //Casa, Pequeño, 3-4, Zamora Chinchipe - Yantzaza
  else if (
    houseSize === "1" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "9"
  ) {
    housePlan = 35;
  }

  /****** House Mediano 3-4 ******/
  //Casa, Mediano, 3-4, Azuay - Cuenca
  if (
    houseSize === "2" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "1"
  ) {
    housePlan = 100;
    //Casa, Mediano, 3-4, Azuay - Pucara
  } else if (
    houseSize === "2" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "2"
  ) {
    housePlan = 45;
    //Casa, Mediano, 3-4, Bolivar - Las Naves
  } else if (
    houseSize === "2" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "3"
  ) {
    housePlan = 50;
  }
  //Casa, Mediano, 3-4, Cañar - La Troncal
  else if (
    houseSize === "2" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "4"
  ) {
    housePlan = 80;
  }
  //Casa, Mediano, 3-4, Loja - Loja
  else if (
    houseSize === "2" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "5"
  ) {
    housePlan = 100;
  }
  //Casa, Mediano, 3-4, Los Ríos - Quinsaloma
  else if (
    houseSize === "2" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "6"
  ) {
    housePlan = 65;
  }
  //Casa, Mediano, 3-4, Pichincha - Quito
  else if (
    houseSize === "2" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "7"
  ) {
    housePlan = 80;
  }
  //Casa, Mediano, 3-4, Santa Elena - La Libertad
  else if (
    houseSize === "2" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "8"
  ) {
    housePlan = 55;
  }
  //Casa, Mediano, 3-4, Zamora Chinchipe - Yantzaza
  else if (
    houseSize === "2" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "9"
  ) {
    housePlan = 50;
  }

  /****** House Grande 3-4 ******/
  //Casa, Grande, 3-4, Azuay - Cuenca
  if (
    houseSize === "3" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "1"
  ) {
    housePlan = 250;
    //Casa, Grande, 3-4, Azuay - Pucara
  } else if (
    houseSize === "3" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "2"
  ) {
    housePlan = 45;
    //Casa, Grande, 3-4, Bolivar - Las Naves
  } else if (
    houseSize === "3" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "3"
  ) {
    housePlan = 50;
  }
  //Casa, Grande, 3-4, Cañar - La Troncal
  else if (
    houseSize === "3" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "4"
  ) {
    housePlan = 160;
  }
  //Casa, Grande, 3-4, Loja - Loja
  else if (
    houseSize === "3" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "5"
  ) {
    housePlan = 200;
  }
  //Casa, Grande, 3-4, Los Ríos - Quinsaloma
  else if (
    houseSize === "3" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "6"
  ) {
    housePlan = 65;
  }
  //Casa, Grande, 3-4, Pichincha - Quito
  else if (
    houseSize === "3" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "7"
  ) {
    housePlan = 160;
  }
  //Casa, Grande, 3-4, Santa Elena - La Libertad
  else if (
    houseSize === "3" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "8"
  ) {
    housePlan = 100;
  }
  //Casa, Grande, 3-4, Zamora Chinchipe - Yantzaza
  else if (
    houseSize === "3" &&
    houseNumber >= "3" &&
    houseNumber <= "4" &&
    houseAgency === "9"
  ) {
    housePlan = 50;
  }

  /****** House Pequeño 5+ ******/
  //Casa, Pequeño, 5+, Azuay - Cuenca
  if (houseSize === "1" && houseNumber === "5" && houseAgency === "1") {
    housePlan = 100;
    //Casa, Pequeño, 5+, Azuay - Pucara
  } else if (houseSize === "1" && houseNumber === "5" && houseAgency === "2") {
    housePlan = 45;
    //Casa, Pequeño, 5+, Bolivar - Las Naves
  } else if (houseSize === "1" && houseNumber === "5" && houseAgency === "3") {
    housePlan = 50;
  }
  //Casa, Pequeño, 5+, Cañar - La Troncal
  else if (houseSize === "1" && houseNumber === "5" && houseAgency === "4") {
    housePlan = 80;
  }
  //Casa, Pequeño, 5+, Loja - Loja
  else if (houseSize === "1" && houseNumber === "5" && houseAgency === "5") {
    housePlan = 100;
  }
  //Casa, Pequeño, 5+, Los Ríos - Quinsaloma
  else if (houseSize === "1" && houseNumber === "5" && houseAgency === "6") {
    housePlan = 65;
  }
  //Casa, Pequeño, 5+, Pichincha - Quito
  else if (houseSize === "1" && houseNumber === "5" && houseAgency === "7") {
    housePlan = 80;
  }
  //Casa, Pequeño, 5+, Santa Elena - La Libertad
  else if (houseSize === "1" && houseNumber === "5" && houseAgency === "8") {
    housePlan = 55;
  }
  //Casa, Pequeño, 5+, Zamora Chinchipe - Yantzaza
  else if (houseSize === "1" && houseNumber === "5" && houseAgency === "9") {
    housePlan = 50;
  }

  /****** House Mediano 5+ ******/
  //Casa, Mediano, 5+, Azuay - Cuenca
  if (houseSize === "2" && houseNumber === "5" && houseAgency === "1") {
    housePlan = 160;
    //Casa, Mediano, 5+, Azuay - Pucara
  } else if (houseSize === "2" && houseNumber === "5" && houseAgency === "2") {
    housePlan = 45;
    //Casa, Mediano, 5+, Bolivar - Las Naves
  } else if (houseSize === "2" && houseNumber === "5" && houseAgency === "3") {
    housePlan = 50;
  }
  //Casa, Mediano, 5+, Cañar - La Troncal
  else if (houseSize === "2" && houseNumber === "5" && houseAgency === "4") {
    housePlan = 100;
  }
  //Casa, Mediano, 5+, Loja - Loja
  else if (houseSize === "2" && houseNumber === "5" && houseAgency === "5") {
    housePlan = 100;
  }
  //Casa, Mediano, 5+, Los Ríos - Quinsaloma
  else if (houseSize === "2" && houseNumber === "5" && houseAgency === "6") {
    housePlan = 65;
  }
  //Casa, Mediano, 5+, Pichincha - Quito
  else if (houseSize === "2" && houseNumber === "5" && houseAgency === "7") {
    housePlan = 100;
  }
  //Casa, Mediano, 5+, Santa Elena - La Libertad
  else if (houseSize === "2" && houseNumber === "5" && houseAgency === "8") {
    housePlan = 75;
  }
  //Casa, Mediano, 5+, Zamora Chinchipe - Yantzaza
  else if (houseSize === "2" && houseNumber === "5" && houseAgency === "9") {
    housePlan = 50;
  }

  /****** House Grande 5+ ******/
  //Casa, Grande, 5+, Azuay - Cuenca
  if (houseSize === "3" && houseNumber === "5" && houseAgency === "1") {
    housePlan = 300;
    //Casa, Grande, 5+, Azuay - Pucara
  } else if (houseSize === "3" && houseNumber === "5" && houseAgency === "2") {
    housePlan = 45;
    //Casa, Grande, 5+, Bolivar - Las Naves
  } else if (houseSize === "3" && houseNumber === "5" && houseAgency === "3") {
    housePlan = 80;
  }
  //Casa, Grande, 5+, Cañar - La Troncal
  else if (houseSize === "3" && houseNumber === "5" && houseAgency === "4") {
    housePlan = 200;
  }
  //Casa, Grande, 5+, Loja - Loja
  else if (houseSize === "3" && houseNumber === "5" && houseAgency === "5") {
    housePlan = 200;
  }
  //Casa, Grande, 5+, Los Ríos - Quinsaloma
  else if (houseSize === "3" && houseNumber === "5" && houseAgency === "6") {
    housePlan = 80;
  }
  //Casa, Grande, 5+, Pichincha - Quito
  else if (houseSize === "3" && houseNumber === "5" && houseAgency === "7") {
    housePlan = 200;
  }
  //Casa, Grande, 5+, Santa Elena - La Libertad
  else if (houseSize === "3" && houseNumber === "5" && houseAgency === "8") {
    housePlan = 160;
  }
  //Casa, Grande, 5+, Zamora Chinchipe - Yantzaza
  else if (houseSize === "3" && houseNumber === "5" && houseAgency === "9") {
    housePlan = 50;
  }

  /****** Negocio Pequeño 1-2 ******/
  //Negocio, Pequeño, 1-2, Azuay - Cuenca
  if (
    businessSize === "1" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "1"
  ) {
    businessPlan = 45;
    //Negocio, Pequeño, 1-2, Azuay - Pucara
  } else if (
    businessSize === "1" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "2"
  ) {
    businessPlan = 25;
    //Negocio, Pequeño, 1-2, Bolivar - Las Naves
  } else if (
    businessSize === "1" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "3"
  ) {
    businessPlan = 30;
  }
  //Negocio, Pequeño, 1-2, Cañar - La Troncal
  else if (
    businessSize === "1" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "4"
  ) {
    businessPlan = 45;
  }
  //Negocio, Pequeño, 1-2, Loja - Loja
  else if (
    businessSize === "1" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "5"
  ) {
    businessPlan = 50;
  }
  //Negocio, Pequeño, 1-2, Los Ríos - Quinsaloma
  else if (
    businessSize === "1" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "6"
  ) {
    businessPlan = 35;
  }
  //Negocio, Pequeño, 1-2, Pichincha - Quito
  else if (
    businessSize === "1" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "7"
  ) {
    businessPlan = 45;
  }
  //Negocio, Pequeño, 1-2, Santa Elena - La Libertad
  else if (
    businessSize === "1" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "8"
  ) {
    businessPlan = 35;
  }
  //Negocio, Pequeño, 1-2, Zamora Chinchipe - Yantzaza
  else if (
    businessSize === "1" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "9"
  ) {
    businessPlan = 25;
  }

  /****** Negocio Mediano 1-2 ******/
  //Negocio, Mediano, 1-2, Azuay - Cuenca
  if (
    businessSize === "2" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "1"
  ) {
    businessPlan = 80;
    //Negocio, Mediano, 1-2, Azuay - Pucara
  } else if (
    businessSize === "2" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "2"
  ) {
    businessPlan = 35;
    //Negocio, Mediano, 1-2, Bolivar - Las Naves
  } else if (
    businessSize === "2" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "3"
  ) {
    businessPlan = 40;
  }
  //Negocio, Mediano, 1-2, Cañar - La Troncal
  else if (
    businessSize === "2" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "4"
  ) {
    businessPlan = 65;
  }
  //Negocio, Mediano, 1-2, Loja - Loja
  else if (
    businessSize === "2" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "5"
  ) {
    businessPlan = 75;
  }
  //Negocio, Mediano, 1-2, Los Ríos - Quinsaloma
  else if (
    businessSize === "2" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "6"
  ) {
    businessPlan = 45;
  }
  //Negocio, Mediano, 1-2, Pichincha - Quito
  else if (
    businessSize === "2" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "7"
  ) {
    businessPlan = 65;
  }
  //Negocio, Mediano, 1-2, Santa Elena - La Libertad
  else if (
    businessSize === "2" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "8"
  ) {
    businessPlan = 45;
  }
  //Negocio, Mediano, 1-2, Zamora Chinchipe - Yantzaza
  else if (
    businessSize === "2" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "9"
  ) {
    businessPlan = 35;
  }

  /****** Negocio Grande 1-2 ******/
  //Negocio, Grande, 1-2, Azuay - Cuenca
  if (
    businessSize === "3" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "1"
  ) {
    businessPlan = 160;
    //Negocio, Grande, 1-2, Azuay - Pucara
  } else if (
    businessSize === "3" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "2"
  ) {
    businessPlan = 35;
    //Negocio, Grande, 1-2, Bolivar - Las Naves
  } else if (
    businessSize === "3" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "3"
  ) {
    businessPlan = 50;
  }
  //Negocio, Grande, 1-2, Cañar - La Troncal
  else if (
    businessSize === "3" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "4"
  ) {
    businessPlan = 100;
  }
  //Negocio, Grande, 1-2, Loja - Loja
  else if (
    businessSize === "3" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "5"
  ) {
    businessPlan = 100;
  }
  //Negocio, Grande, 1-2, Los Ríos - Quinsaloma
  else if (
    businessSize === "3" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "6"
  ) {
    businessPlan = 45;
  }
  //Negocio, Grande, 1-2, Pichincha - Quito
  else if (
    businessSize === "3" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "7"
  ) {
    businessPlan = 100;
  }
  //Negocio, Grande, 1-2, Santa Elena - La Libertad
  else if (
    businessSize === "3" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "8"
  ) {
    businessPlan = 75;
  }
  //Negocio, Grande, 1-2, Zamora Chinchipe - Yantzaza
  else if (
    businessSize === "3" &&
    businessNumber >= "1" &&
    businessNumber <= "2" &&
    businessAgency === "9"
  ) {
    businessPlan = 35;
  }

  /****** Negocio Pequeño 3-4 ******/
  //Negocio, Pequeño, 3-4, Azuay - Cuenca
  if (
    businessSize === "1" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "1"
  ) {
    businessPlan = 80;
    //Negocio, Pequeño, 3-4, Azuay - Pucara
  } else if (
    businessSize === "1" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "2"
  ) {
    businessPlan = 35;
    //Negocio, Pequeño, 3-4, Bolivar - Las Naves
  } else if (
    businessSize === "1" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "3"
  ) {
    businessPlan = 40;
  }
  //Negocio, Pequeño, 3-4, Cañar - La Troncal
  else if (
    businessSize === "1" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "4"
  ) {
    businessPlan = 65;
  }
  //Negocio, Pequeño, 3-4, Loja - Loja
  else if (
    businessSize === "1" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "5"
  ) {
    businessPlan = 75;
  }
  //Negocio, Pequeño, 3-4, Los Ríos - Quinsaloma
  else if (
    businessSize === "1" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "6"
  ) {
    businessPlan = 45;
  }
  //Negocio, Pequeño, 3-4, Pichincha - Quito
  else if (
    businessSize === "1" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "7"
  ) {
    businessPlan = 65;
  }
  //Negocio, Pequeño, 3-4, Santa Elena - La Libertad
  else if (
    businessSize === "1" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "8"
  ) {
    businessPlan = 45;
  }
  //Negocio, Pequeño, 3-4, Zamora Chinchipe - Yantzaza
  else if (
    businessSize === "1" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "9"
  ) {
    businessPlan = 35;
  }

  /****** Negocio Mediano 3-4 ******/
  //Negocio, Mediano, 3-4, Azuay - Cuenca
  if (
    businessSize === "2" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "1"
  ) {
    businessPlan = 100;
    //Negocio, Mediano, 3-4, Azuay - Pucara
  } else if (
    businessSize === "2" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "2"
  ) {
    businessPlan = 45;
    //Negocio, Mediano, 3-4, Bolivar - Las Naves
  } else if (
    businessSize === "2" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "3"
  ) {
    businessPlan = 50;
  }
  //Negocio, Mediano, 3-4, Cañar - La Troncal
  else if (
    businessSize === "2" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "4"
  ) {
    businessPlan = 80;
  }
  //Negocio, Mediano, 3-4, Loja - Loja
  else if (
    businessSize === "2" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "5"
  ) {
    businessPlan = 100;
  }
  //Negocio, Mediano, 3-4, Los Ríos - Quinsaloma
  else if (
    businessSize === "2" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "6"
  ) {
    businessPlan = 65;
  }
  //Negocio, Mediano, 3-4, Pichincha - Quito
  else if (
    businessSize === "2" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "7"
  ) {
    businessPlan = 80;
  }
  //Negocio, Mediano, 3-4, Santa Elena - La Libertad
  else if (
    businessSize === "2" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "8"
  ) {
    businessPlan = 55;
  }
  //Negocio, Mediano, 3-4, Zamora Chinchipe - Yantzaza
  else if (
    businessSize === "2" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "9"
  ) {
    businessPlan = 50;
  }

  /****** House Grande 3-4 ******/
  //Negocio, Grande, 3-4, Azuay - Cuenca
  if (
    businessSize === "3" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "1"
  ) {
    businessPlan = 250;
    //Negocio, Grande, 3-4, Azuay - Pucara
  } else if (
    businessSize === "3" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "2"
  ) {
    businessPlan = 45;
    //Negocio, Grande, 3-4, Bolivar - Las Naves
  } else if (
    businessSize === "3" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "3"
  ) {
    businessPlan = 80;
  }
  //Negocio, Grande, 3-4, Cañar - La Troncal
  else if (
    businessSize === "3" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "4"
  ) {
    businessPlan = 160;
  }
  //Negocio, Grande, 3-4, Loja - Loja
  else if (
    businessSize === "3" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "5"
  ) {
    businessPlan = 200;
  }
  //Negocio, Grande, 3-4, Los Ríos - Quinsaloma
  else if (
    businessSize === "3" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "6"
  ) {
    businessPlan = 65;
  }
  //Negocio, Grande, 3-4, Pichincha - Quito
  else if (
    businessSize === "3" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "7"
  ) {
    businessPlan = 160;
  }
  //Negocio, Grande, 3-4, Santa Elena - La Libertad
  else if (
    businessSize === "3" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "8"
  ) {
    businessPlan = 100;
  }
  //Negocio, Grande, 3-4, Zamora Chinchipe - Yantzaza
  else if (
    businessSize === "3" &&
    businessNumber >= "3" &&
    businessNumber <= "4" &&
    businessAgency === "9"
  ) {
    businessPlan = 50;
  }

  /****** House Pequeño 5+ ******/
  //Negocio, Pequeño, 5+, Azuay - Cuenca
  if (
    businessSize === "1" &&
    businessNumber === "5" &&
    businessAgency === "1"
  ) {
    businessPlan = 100;
    //Negocio, Pequeño, 5+, Azuay - Pucara
  } else if (
    businessSize === "1" &&
    businessNumber === "5" &&
    businessAgency === "2"
  ) {
    businessPlan = 45;
    //Negocio, Pequeño, 5+, Bolivar - Las Naves
  } else if (
    businessSize === "1" &&
    businessNumber === "5" &&
    businessAgency === "3"
  ) {
    businessPlan = 50;
  }
  //Negocio, Pequeño, 5+, Cañar - La Troncal
  else if (
    businessSize === "1" &&
    businessNumber === "5" &&
    businessAgency === "4"
  ) {
    businessPlan = 80;
  }
  //Negocio, Pequeño, 5+, Loja - Loja
  else if (
    businessSize === "1" &&
    businessNumber === "5" &&
    businessAgency === "5"
  ) {
    businessPlan = 100;
  }
  //Negocio, Pequeño, 5+, Los Ríos - Quinsaloma
  else if (
    businessSize === "1" &&
    businessNumber === "5" &&
    businessAgency === "6"
  ) {
    businessPlan = 65;
  }
  //Negocio, Pequeño, 5+, Pichincha - Quito
  else if (
    businessSize === "1" &&
    businessNumber === "5" &&
    businessAgency === "7"
  ) {
    businessPlan = 80;
  }
  //Negocio, Pequeño, 5+, Santa Elena - La Libertad
  else if (
    businessSize === "1" &&
    businessNumber === "5" &&
    businessAgency === "8"
  ) {
    businessPlan = 55;
  }
  //Negocio, Pequeño, 5+, Zamora Chinchipe - Yantzaza
  else if (
    businessSize === "1" &&
    businessNumber === "5" &&
    businessAgency === "9"
  ) {
    businessPlan = 50;
  }

  /****** House Mediano 5+ ******/
  //Negocio, Mediano, 5+, Azuay - Cuenca
  if (
    businessSize === "2" &&
    businessNumber === "5" &&
    businessAgency === "1"
  ) {
    businessPlan = 160;
    //Negocio, Mediano, 5+, Azuay - Pucara
  } else if (
    businessSize === "2" &&
    businessNumber === "5" &&
    businessAgency === "2"
  ) {
    businessPlan = 45;
    //Negocio, Mediano, 5+, Bolivar - Las Naves
  } else if (
    businessSize === "2" &&
    businessNumber === "5" &&
    businessAgency === "3"
  ) {
    businessPlan = 80;
  }
  //Negocio, Mediano, 5+, Cañar - La Troncal
  else if (
    businessSize === "2" &&
    businessNumber === "5" &&
    businessAgency === "4"
  ) {
    businessPlan = 100;
  }
  //Negocio, Mediano, 5+, Loja - Loja
  else if (
    businessSize === "2" &&
    businessNumber === "5" &&
    businessAgency === "5"
  ) {
    businessPlan = 200;
  }
  //Negocio, Mediano, 5+, Los Ríos - Quinsaloma
  else if (
    businessSize === "2" &&
    businessNumber === "5" &&
    businessAgency === "6"
  ) {
    businessPlan = 65;
  }
  //Negocio, Mediano, 5+, Pichincha - Quito
  else if (
    businessSize === "2" &&
    businessNumber === "5" &&
    businessAgency === "7"
  ) {
    businessPlan = 100;
  }
  //Negocio, Mediano, 5+, Santa Elena - La Libertad
  else if (
    businessSize === "2" &&
    businessNumber === "5" &&
    businessAgency === "8"
  ) {
    businessPlan = 75;
  }
  //Negocio, Mediano, 5+, Zamora Chinchipe - Yantzaza
  else if (
    businessSize === "2" &&
    businessNumber === "5" &&
    businessAgency === "9"
  ) {
    businessPlan = 50;
  }

  /****** House Grande 5+ ******/
  //Negocio, Grande, 5+, Azuay - Cuenca
  if (
    businessSize === "3" &&
    businessNumber === "5" &&
    businessAgency === "1"
  ) {
    businessPlan = 300;
    //Negocio, Grande, 5+, Azuay - Pucara
  } else if (
    businessSize === "3" &&
    businessNumber === "5" &&
    businessAgency === "2"
  ) {
    businessPlan = 45;
    //Negocio, Grande, 5+, Bolivar - Las Naves
  } else if (
    businessSize === "3" &&
    businessNumber === "5" &&
    businessAgency === "3"
  ) {
    businessPlan = 100;
  }
  //Negocio, Grande, 5+, Cañar - La Troncal
  else if (
    businessSize === "3" &&
    businessNumber === "5" &&
    businessAgency === "4"
  ) {
    businessPlan = 200;
  }
  //Negocio, Grande, 5+, Loja - Loja
  else if (
    businessSize === "3" &&
    businessNumber === "5" &&
    businessAgency === "5"
  ) {
    businessPlan = 300;
  }
  //Negocio, Grande, 5+, Los Ríos - Quinsaloma
  else if (
    businessSize === "3" &&
    businessNumber === "5" &&
    businessAgency === "6"
  ) {
    businessPlan = 80;
  }
  //Negocio, Grande, 5+, Pichincha - Quito
  else if (
    businessSize === "3" &&
    businessNumber === "5" &&
    businessAgency === "7"
  ) {
    businessPlan = 200;
  }
  //Negocio, Grande, 5+, Santa Elena - La Libertad
  else if (
    businessSize === "3" &&
    businessNumber === "5" &&
    businessAgency === "8"
  ) {
    businessPlan = 160;
  }
  //Negocio, Grande, 5+, Zamora Chinchipe - Yantzaza
  else if (
    businessSize === "3" &&
    businessNumber === "5" &&
    businessAgency === "9"
  ) {
    businessPlan = 50;
  }

  console.log("Casa tamaño: " + houseSize);
  console.log("Casa número: " + houseNumber);
  console.log("Casa agencia: " + houseAgency);
  console.log("Casa Plan: " + housePlan);

  /* console.log("Negocio tamaño: " + businessSize);
  console.log("Negocio número: " + businessNumber);
  console.log("Negocio agencia: " + businessAgency);
  console.log("Negocio plan: " + businessPlan); */
  // console.log(housePlan);

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
                  <option value="2">Azuay - Pucara</option>
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
                  <option value="2">Azuay - Pucara</option>
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
                idealPlan={housePlan}
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
                idealPlan={businessPlan}
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
