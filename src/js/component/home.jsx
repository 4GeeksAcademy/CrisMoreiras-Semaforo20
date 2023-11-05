//import React from "react";
import React, { useState } from 'react';

const Home=()=>{

	const [colorRed,setGlowRed] = useState ("grey");
	const [colorYellow,setGlowYellow] = useState ("grey");

	function glowRed () {
		if (colorRed == "red"){
			setGlowRed("grey")}
		else{
			setGlowRed("red")}
	}

	function glowYellow () {
		if (colorYellow == "Yellow"){
			setGlowYellow("grey")}
		else{
			setGlowYellow("Yellow")}
	}
	

	return (
		<>
		<button onClick={glowRed} style={{backgroundColor:colorRed}}>ROJO</button>
		<button onClick={glowYellow} style={{backgroundColor:colorYellow}}>AMBAR</button>
		<button style={{backgroundColor: "green"}}>VERDE</button>
		</>	
		
	);
};

export default Home;
