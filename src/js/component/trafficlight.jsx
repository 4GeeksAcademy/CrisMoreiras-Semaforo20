import React, { useState } from 'react';


export function TrafficLight (){

	const [glowColor,setGlowColor] = useState ("red");

	
	return (
		<>
		<div className='traffic-light'>
			<div onClick={()=> setGlowColor("red")}
			className = {"light red" + (glowColor === "red" ? " glow" : "" )}></div>
			<div onClick={()=> setGlowColor("yellow")}
			className = {"light yellow" + (glowColor === "yellow" ? " glow" : "" )}></div>
			<div onClick={()=> setGlowColor("green")}
			className = {"light green" + (glowColor === "green" ? " glow" : "" )}></div>
		</div>
		</>		
	);
};

export default TrafficLight