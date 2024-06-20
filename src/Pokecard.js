import styled from "styled-components";

const Styles = styled.div`
  .Pokecard {
    width: 300px;
    padding: 10px;
    margin: 1rem;
    box-shadow: 7px 10px 12px -5px rgba(0, 0, 0, 0.56);
    text-align: center;
    background-color: white;
    border-radius: 5px;
  }
  pokecard-data {
    font-size: 80%;
  }
`;

const POKE_API =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

function Pokecard(props) {
  let imgsrc = `${POKE_API}${props.id}.png`;
  return (
    <Styles>
      <div className="Pokecard">
        <h1 className="pokecard-title">{props.name}</h1>
        <img src={imgsrc} alt={props.name} />
        <div className="pokecard-data">{props.type}</div>
        <div className="pokecard-data">{props.exp}</div>
      </div>
    </Styles>
  );
}

export default Pokecard;
