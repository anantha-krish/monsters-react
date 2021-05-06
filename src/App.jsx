import "./App.css";
import React from "react";
import CardList from "./components/card-list/card-list.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchText: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchText } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search"
          onChange={(e) => this.setState({ searchText: e.target.value })}
        />
        <CardList dataList={filteredMonsters} />
      </div>
    );
  }
}

export default App;
