import React, { Component } from "react";
import SearchInput from "./input-field/SearchInput.comp";
import MonsterList from "./monsterList/MonsterList.comp";

class Monster extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      stateField: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((res) => {
        this.setState(() => {
          return { monsters: res };
        });
      })
      .catch((err) => console.log("Failed to Fetch Monster"));
  }

  inputSearchHandler = (event) => {
    const stateField = event.target.value.toLowerCase();
    this.setState({ stateField });
  };

  render() {
    const { monsters, stateField } = this.state;
    const { inputSearchHandler } = this;
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
  }
}
export default Monster;
