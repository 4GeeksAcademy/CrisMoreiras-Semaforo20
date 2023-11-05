//import React from "react";
import React, { useState } from 'react';

const Home=()=>{

	const [colorRed,setGlowRed] = useState ("grey");
	const [colorYellow,setGlowYellow] = useState ("grey");
	const [colorGreen,setGlowGreen] = useState ("grey");

	function glowRed () {
		if (colorRed == "red"){
			setGlowRed("grey")}
		else{
			setGlowRed("red");
			setGlowYellow("grey");
			setGlowGreen("grey");
		}
	}

	function glowYellow () {
		if (colorYellow == "yellow"){
			setGlowYellow("grey")}
		else{
			setGlowYellow("yellow");
			setGlowRed("grey");
			setGlowGreen("grey");
		}		
	}

	function glowGreen () {
		if (colorGreen == "green"){
			setGlowGreen("grey")}
		else{
			setGlowGreen("green");
			setGlowRed("grey");
			setGlowYellow("grey");
		}
			
	}
	

	return (
		<>
		<button onClick={glowRed} style={{backgroundColor:colorRed}}>ROJO</button>
		<button onClick={glowYellow} style={{backgroundColor:colorYellow}}>AMBAR</button>
		<button onClick={glowGreen} style={{backgroundColor:colorGreen}}>VERDE</button>
		</>		
	);
};

export default Home;
