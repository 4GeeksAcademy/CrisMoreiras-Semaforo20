import React, { useState } from 'react';


export function TrafficLight (){

	const [clickColor,setClickColor] = useState ("red");
	
	
	return (
		<>
		<div className='traffic-light'>
			<div onClick={()=> setClickColor("red")}
			className = {"light red" + (clickColor === "red" ? " glow" : "" )}></div>
			<div onClick={()=> setClickColor("yellow")}
			className = {"light yellow" + (clickColor === "yellow" ? " glow" : "" )}></div>
			<div onClick={()=> setClickColor("green")}
			className = {"light green" + (clickColor === "green" ? " glow" : "" )}></div>
		</div>
		</>		
	);
};

export default TrafficLight