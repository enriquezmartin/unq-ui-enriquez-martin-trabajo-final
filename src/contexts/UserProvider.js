import React , {useState} from 'react'
import { UserContext } from './UserContext'
const UserProvider = ({children}) => {

    const values = {
        player1Name: "Jugador 1",
        player2Name: "COM",
        player1Score: 0,
        player2Score: 0,
        vsCom: true,
      };

    const [config, setConfig] = useState(values);
      return (
    <UserContext.Provider value={{config,setConfig}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider