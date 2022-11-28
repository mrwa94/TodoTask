import React, { Component }  from 'react'
import {useState} from "react";
import './App.css' 
import Header from './Componts/Header'
import Todolist from './Componts/Todolist'

export default function App() {


   const addTodo = (text) => {
    let id = 1

   }




    return (
      <div className="container">
      <Header/>
      <Todolist addTodo = {addTodo}/>
      
      </div>
    )
  
}
