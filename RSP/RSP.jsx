import React, { useState, useRef, useEffect } from 'react';

const rspCoords = {
  rock: '0',
  scissor: '-142px',
  paper: '-284px',
};

const scores = {
  rock: 0,
  scissor: 1,
  paper: -1,
};

const computerChoice = imgCoord => {
  return Object.entries(rspCoords).find(v => v[1] === imgCoord)[0];
};

const RSP = () => {
  const [result, setResult] = useState('');
  const [imgCoord, setImgCoord] = useState(rspCoords.rock);
  const [score, setScore] = useState(0);
  let inverval = useRef();

  useEffect(() => { // componentDidMount, componentDidUpdate 역할(1대1 대응은 아님)
    inverval.current = setInterval(changeHand, 100);
    return () => { // componentWillUnmount 역할
      clearInterval(inverval.current);
    }
  }, [imgCoord]);

  const changeHand = () => {
    if (imgCoord === rspCoords.rock) {
      setImgCoord(rspCoords.scissor);
    } else if (imgCoord === rspCoords.scissor) {
      setImgCoord(rspCoords.paper);
    } else if (imgCoord === rspCoords.paper) {
      setImgCoord(rspCoords.rock);
    }
  };

  const onClickBtn = (choice) => () => {
    clearInterval(inverval.current);
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;
    if (diff === 0) {
      setResult('비겼습니다!');
    } else if ([-1, 2].includes(diff)) {
      setResult('이겼습니다!');
      setScore(prevScore => prevScore + 1);
    } else {
      setResult('졌습니다!');
      setScore(prevScore => prevScore - 1);
    }
    setTimeout(() => {
      inverval.current = setInterval(changeHand, 100);
    }, 1000);
  };

  return (
    <>
      <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}}></div>
      <div>
        <button id="rock" className="btn" onClick={onClickBtn('rock')}>바위</button>
        <button id="scissor" className="btn" onClick={onClickBtn('scissor')}>가위</button>
        <button id="paper" className="btn" onClick={onClickBtn('paper')}>보</button>
      </div>
      <div>{result}</div>
      <div>현재 {score}점</div>
    </>
  );
};

// class RSP extends Component {
//   state = {
//     result: '',
//     imgCoord: '0',
//     score: 0,
//   };

//   inverval;

//   componentDidMount() {
//     this.inverval = setInterval(this.changeHand, 100);
//   }

//   componentDidUpdate() {

//   }

//   componentWillUnmount() {
//     clearInterval(this.inverval);
//   }

//   changeHand = () => {
//     const { imgCoord } = this.state;
//     if (imgCoord === rspCoords.rock) {
//       this.setState({
//         imgCoord: rspCoords.scissor,
//       });
//     } else if (imgCoord === rspCoords.scissor) {
//       this.setState({
//         imgCoord: rspCoords.paper,
//       });
//     } else if (imgCoord === rspCoords.paper) {
//       this.setState({
//         imgCoord: rspCoords.rock,
//       });
//     }
//   };

//   onClickBtn = (choice) => () => {
//     const { imgCoord } = this.state;
//     clearInterval(this.inverval);
//     const myScore = scores[choice];
//     const cpuScore = scores[computerChoice(imgCoord)];
//     const diff = myScore - cpuScore;
//     if (diff === 0) {
//       this.setState({
//         result: '비겼습니다!',
//       });
//     } else if ([-1, 2].includes(diff)) {
//       this.setState(prevState => {
//         return {
//           result: '이겼습니다!',
//           score: prevState.score + 1,
//         };
//       });
//     } else {
//       this.setState(prevState => {
//         return {
//           result: '졌습니다!',
//           score: prevState.score - 1,
//         };
//       });
//     }
//     setTimeout(() => {
//       this.inverval = setInterval(this.changeHand, 100);
//     }, 1000);
//   };

//   render() {
//     const { result, score, imgCoord } = this.state;
//     return (
//       <>
//         <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}}></div>
//         <div>
//           <button id="rock" className="btn" onClick={this.onClickBtn('rock')}>바위</button>
//           <button id="scissor" className="btn" onClick={this.onClickBtn('scissor')}>가위</button>
//           <button id="paper" className="btn" onClick={this.onClickBtn('paper')}>보</button>
//         </div>
//         <div>{result}</div>
//         <div>현재 {score}점</div>
//       </>
//     );
//   }
// }

export default RSP;