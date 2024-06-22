import Pokecard from "./Pokecard";
import styled from "styled-components";

const Styles = styled.div`
  .Pokedex-cards {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  .Pokedex-Winner {
    color: green;
  }
  .Pokedex-LOSER {
    color: red;
  }
  .Pokedex {
    text-align: center;
  }
`;

function Pokedex(props) {
  return (
    <Styles>
      <div className="Pokedex">
        <h4> Total Experience: {props.exp}</h4>
        <h1 className={props.isWinner ? "Pokedex-Winner" : "Pokedex-LOSER"}>
          {props.isWinner ? "WINNER" : "LOSER"}
        </h1>
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
