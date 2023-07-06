import React from 'react'
import { FaTable } from 'react-icons/fa';

const Scoreboard = ({players, scores}) => {
    return (
        <table className="board">
          <tr>
            <th className="playerName">{players[0]}</th>
            <th className="playerName">{players[1]}</th>
          </tr>
          <tr>
            <td className="playerScore">Score: {scores[0]}</td>
            <td className="playerScore">Score: {scores[1]}</td>
          </tr>
        </table>
      );
}

export default Scoreboard