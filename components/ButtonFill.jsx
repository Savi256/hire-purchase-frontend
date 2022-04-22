import React from 'react';
import { Link } from 'react-router-dom';

export default function ButtonFill({action,onClick}){

return(
    <Link href="/profile/tailoring">
<button onClick={onClick} className="bg-green-500 hover:bg-green-900 text-white py-3 px-4 rounded-md uppercase w-[40%] mx-auto my-8">
{action} <span className="text-2xl">&#8811;</span>
</button>
</Link>
);	
}