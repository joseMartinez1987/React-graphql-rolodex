import { Component } from 'react';
import './App.css';

import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState(() => {
          return { monsters: res };
        });
      });
  }

  onChangeHandler = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    console.log('render from app');
    const { monsters, searchField } = this.state;
    console.log(monsters);
    const { onChangeHandler } = this;

    const filterdMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monster Rolodex</h1>
        <SearchBox
          onChangeHandler={onChangeHandler}
          placeholder="Search Monster"
          className="search-box"
        />
        <CardList monsters={filterdMonsters} />
      </div>
    );
  }
}

export default App;
