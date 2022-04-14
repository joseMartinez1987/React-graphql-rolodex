import { Component } from 'react';
import Card from '../Card/Card';

import './CardList-style.css'

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const {name, email, id} = monster
          return<Card key={id} name={name} email={email} id={id} />
        })}
      </div>
    );
  }
}

export default CardList;
