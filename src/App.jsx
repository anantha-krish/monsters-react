import "./App.css";
import React from "react";
import CardList from "./components/card-list/card-list.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      initialMonsters: [],
      searchText: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) =>
        this.setState({ monsters: users, initialMonsters: users })
      );
  }
  render() {
    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search"
          onChange={(e) =>
            this.setState({ searchText: e.target.value }, () => {
              let filteredMonsters = this.state.initialMonsters.filter(
                (value) => value.name.toLowerCase().includes(this.state.searchText.toLowerCase())
              );
              this.setState({monsters:filteredMonsters})
            })
          }
        />
        <CardList dataList={this.state.monsters} />
      </div>
    );
  }
}

export default App;
