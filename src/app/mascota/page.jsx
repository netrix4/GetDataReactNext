'use client'
// import React from 'react'
// import useState  from 'react/cjs/react.production.min';
import { React, useState } from "react";


const Mascota = () => {

    const [nuevaMascota, setNuevaMascota] = useState({
        Nombre: '',
        Edad: 0,
        Raza:'',
        TipoDeMascota:'',
    })

    const handleSubmit = (e) =>{
        e.prevetDefault();
        console.log('object');
    }
    const handleData = (name) =>{

    }
    return (
    <div className='p-[5%] bg-[#242426] rounded-[20px] text-[#fff] w-[450px] '> 
        <form className='flex flex-col justify-center align-middle items-center' method="post">
            <p class>Agrega informacion</p>
            <input className='m-[1%] w-[250px]' 
                type="text" name="nombre" placeholder='Nombre' onChange=''/>
            <input className='m-[1%] w-[250px]' 
                type="number" name="nombre" placeholder='Edad' />
            <input className='m-[1%] w-[250px]' 
                type="text" name="nombre" placeholder='Raza' />

            <select className='m-[1%] w-[250px]'>
                <option value="gato">GATO</option>
                <option value="perro">PERRO</option>
                <option value="perico">PERICO</option>
                <option value="lagarto">LAGARTO</option>
            </select>
            <button type='submit' onClick={handleSubmit}> submit</button>
        </form>
    </div>
    )
}
export default Mascota;
// gato peroo perico lagarto
