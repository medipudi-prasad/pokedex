import Pokecard from "./Pokecard";
import styled from "styled-components";

const Styles = styled.div`
  .Pokedex-cards {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`;

function Pokedex(props) {
  return (
    <Styles>
      <div className="Pokedex">
        <h1>Pokedex!</h1>

        <p> Total Experience: {props.exp}</p>
        <p>{props.isWinner ? "WINNER" : "LOSER"}</p>
        <div className="Pokedex-cards">
          {props.pokemon.map((p) => (
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    </Styles>
  );
}

export default Pokedex;
