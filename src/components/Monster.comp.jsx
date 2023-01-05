// import React, { Component } from "react";
import { useEffect, useState } from "react";
import SearchInput from "./input-field/SearchInput.comp";
import MonsterList from "./monsterList/MonsterList.comp";

const Monster = () => {
  const [monsters, setMonsters] = useState([]);
  const [stateField, setStateField] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((res) => {
        setMonsters(res);
      })
      .catch((err) => console.log("Failed to Fetch Monster"));
  }, []);
  const inputSearchHandler = (event) => {
    const stateFieldString = event.target.value.toLowerCase();
    setStateField(stateFieldString);
  };
  const filterMonster = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(stateField);
  });

  return (
    <>
      <h1 className="title">Monster Paradise</h1>
      <SearchInput inputSearchHandler={inputSearchHandler} />
      <MonsterList filterMonster={filterMonster} />
    </>
  );
};

// class Monster extends Component {

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((res) => {
//         this.setState(() => {
//           return { monsters: res };
//         });
//       })
//       .catch((err) => console.log("Failed to Fetch Monster"));
//   }

//   render() {
//     const { monsters, stateField } = this.state;
//     const { inputSearchHandler } = this;
//     const filterMonster = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(stateField);
//     });
//     return (
//
//     );
//   }
// }
export default Monster;
