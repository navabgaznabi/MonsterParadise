import React, { Component } from "react";

class MonsterList extends Component {
  render() {
    const { filterMonster } = this.props;
    return (
      <div className="card-list">
        {filterMonster.map((monster) => {
          return (
            <div key={monster.id} className="card-container">
              <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt="monster" />
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}
export default MonsterList;
