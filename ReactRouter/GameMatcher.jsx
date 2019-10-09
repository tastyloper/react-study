import React, { Component } from 'react';
import NumberBaseball from '../NumberBaseball/NumberBaseballClass';
import RSP from '../RSP/RSPClass';
import Lotto from '../Lotto/LottoClass';

class GameMatcher extends Component {
  render() {
    console.log(this.props);
    if (this.props.match.params.name === 'number-baseball') {
      return <NumberBaseball />;
    } else if (this.props.match.params.name === 'rock-scissors-paper') {
      return <RSP />;
    } else if (this.props.match.params.name === 'lotto-generator') {
      return <Lotto />;
    }
    return (
      <div>일치하는 게임이 없습니다.</div>
    );
  }
}

export default GameMatcher;