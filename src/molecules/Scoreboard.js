import React from 'react'
import './molecStyles/Scoreboard.css'

const Scoreboard = ({players, scores}) => {
    return (
        <table className="board">
          <thead>
            <tr>
              <th className="playerName">{players[0]}</th>
              <th className="playerName">{players[1]}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="playerScore">Score: {scores[0]}</td>
              <td className="playerScore">Score: {scores[1]}</td>
            </tr>
          </tbody>
        </table>
      );
}

export default Scoreboard