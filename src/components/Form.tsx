
import React, { useReducer } from "react";
import { Sub } from "../types";
import { formReducer } from "./formReducer";

interface FormProps {
   onNewSub: ( newSub: Sub ) => void
}

const Form = ({ onNewSub }: FormProps) => {
  
   const INITIAL_STATE = {
      nick: '',
      subMonths: 0,
      avatar: '',
      descripcion: ''
   }

   const [ inputValue, dispatch ] = useReducer( formReducer, INITIAL_STATE );

   const handleSubmit = ( e: React.FormEvent<HTMLFormElement> ) => {
      e.preventDefault();
      onNewSub( inputValue );
      handleClear();
   }

   const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
      dispatch({
         type: 'change_value',
         payload: {
            inputName: e.target.name,
            inputValue: e.target.value
         }
      })
   }

   const handleClear = () => {
      dispatch({
         type: 'clear'
      })
   }

   return (
      <form onSubmit={ handleSubmit }>
         <input onChange={ handleChange } value={ inputValue.nick } type='text' name="nick" placeholder="nick"/>
         <input onChange={ handleChange } value={ inputValue.subMonths } type='text' name="subMonths" placeholder="subMonths"/>
         <input onChange={ handleChange } value={ inputValue.avatar } type='text' name="avatar" placeholder="avatar"/>
         <textarea onChange={ handleChange } value={ inputValue.descripcion } name="descripcion" placeholder="description"/>
         <button onClick={ handleClear } type='button'>Clear the form</button>
         <button type="submit">Save new sub</button>
      </form>
   )
}

export default Form;

