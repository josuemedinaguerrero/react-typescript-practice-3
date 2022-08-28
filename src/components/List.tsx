
interface Props {
   subs: Array<{
      nick: string,
      avatar: string,
      subMonths: number,
      descripcion: string
   }>
}

const List = ({ subs }: Props ) => {
   return (
      <ul>
         {
            subs.map( sub => (
               <li key={ sub.nick }>
                  <img src={ sub.avatar } alt={ sub.nick }/>
                  <h4>{ sub.nick } <small>{ sub.subMonths }</small></h4>
                  <p>{ sub.descripcion?.substring(0, 100) }</p>
               </li>
            ))
         }
      </ul>
   )
}

export default List;

