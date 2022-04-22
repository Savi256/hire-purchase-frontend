import React from 'react';
<<<<<<< HEAD
// import Link from "next/link";

=======
>>>>>>> 5651f4bc11447f81c3f9b55997a00e0a8cb3b228

export default function ButtonFill({action,onClick}){

return(
<<<<<<< HEAD
    
<button onClick={onClick} className="bg-green-500 hover:bg-green-900 text-white py-3 px-4 rounded-md uppercase w-[40%] mx-auto my-8">
{action} <span className="text-2xl">&#8811;</span>
</button>

=======
<button onClick={onClick} className="bg-green-500 hover:bg-green-900 text-white py-2 px-3 rounded-md uppercase w-[40%] mx-auto my-8 md:w-[60%]">
{action} <span className="text-2xl">&#8811;</span>
</button>
>>>>>>> 5651f4bc11447f81c3f9b55997a00e0a8cb3b228
);	
}