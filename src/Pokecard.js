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

// const POKE_API =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let ThreeDigit = (Number) => (Number <= 999 ? `00${Number}`.slice(-3) : Number);

// The slice() method returns selected elements in an array, as a new array.
//.slice(start,end)
//.slice(1, 3) -  gives items between 1-3 means not 1 it gives 2 & 3 items of an array
//slice(-3, -1) -  gives items between 3-4 means 3 & 4 it gives
// The slice() method selects from a given start, up to a (not inclusive) given end.
// The slice() method does not change the original array.

function Pokecard(props) {
  let imgsrc = `${POKE_API}${ThreeDigit(props.id)}.png`;
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
