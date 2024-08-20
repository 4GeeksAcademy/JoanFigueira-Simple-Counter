import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Digit } from "./Digit.jsx";

//create your first component
const Home = () => {

	const [timer,setTimer] = useState(0)

	useEffect(()=>{

		setTimeout (() => {
			setTimer (value => value+1)
		},1000)

	},[timer])

	return (
		<div className="container">
			<section className="counter-holder">
			<Digit number={<span className="fa fa-clock"></span>}/>
			<Digit number={Math.floor(timer/100000)%10}/>
			<Digit number={Math.floor(timer/10000)%10}/>
			<Digit number={Math.floor(timer/1000)%10}/>
			<Digit number={Math.floor(timer/100)%10}/>
			<Digit number={Math.floor(timer/10)%10}/>
			<Digit number={Math.floor(timer%10)}/>
			</section>
		</div>
	);
};

export default Home;
