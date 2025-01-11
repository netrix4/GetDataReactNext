// 'use client'
import { React, useState } from "react";
// import React from 'react'

const Formulario = () => {
  
  const  [nombre, setNombre] = useState('Mario')
  const  [apellido, setApellido] = useState('Arias')

  const handleName=(e)=>{
    const value = e.target.value;
    setNombre(value)
    console.log(value);
    if (value === '') setNombre('Mario')
  }
  const handleLastName=(e)=>{
    const value = e.target.value;
    setApellido(value)
    console.log(value);
    if (value === '') setApellido('Arias')
  }

  return (
    <div className='flex flex-col align-middle justify-center items-center my-[35px]'>
      <form className='flex flex-col my-[35px]' action="">
        <input className='w-[290px] text-center' type="text" placeholder={nombre} onChange={handleName}/>
        <input className='w-[290px] text-center' type="text" placeholder={apellido} onChange={handleLastName}/>
        <input className='w-[290px] text-center' type="text" placeholder='Hernandez'/>
        <button className='w-[290px] bg-[#cecece]'>Procesar</button>
      </form>
      <div className=''><p className='text-[#fff]'>{nombre}      y {apellido}</p></div>
    </div>
  );
}

export {Formulario}

