import React from "react";
import Nav from '../components/Nav';
import { useState } from 'react';
import FullProgrammes from './FullProgrammes';
import TailorToggle from "../components/TailorToggle";
import toggledContext from "../components/Context";

 const Programmes= function ({toggle}){


	   const [componentToggle, setcomponentToggle] = useState(false);

	// const componentToggler=function(){
	// 	setcomponentToggle(!componentToggle)
	// 	console.log('get it')
	// }
	return(
	<div className="flex flex-col min-h-screen">
	<Nav/>
	<toggledContext.Provider value={{componentToggle,setcomponentToggle}}>
{componentToggle?<TailorToggle/>:<FullProgrammes />}
	</toggledContext.Provider>
	</div>
	)
}
export default Programmes
