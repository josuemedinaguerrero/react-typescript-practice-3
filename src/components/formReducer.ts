
import { Sub } from '../types';

type FormAction = {
   type: 'change_value',
   payload: {
      inputName: string,
      inputValue: string
   }
} | {
   type: 'clear'
}

export const formReducer = ( state: Sub, action: FormAction ): Sub => {
   switch ( action.type ) {
      case 'change_value':
         const { inputName, inputValue } = action.payload;
         return {
            ...state,
            [ inputName ]: inputValue
         }

      case 'clear':
         return {
            nick: '',
            subMonths: 0,
            avatar: '',
            descripcion: ''
         };

      default:
         return state;
   }
}

