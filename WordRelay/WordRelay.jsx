const React = require('react');
const { useRef, useState } = React;

const WordRelay = () => {
  const [word, setWord] = useState('조항민');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setWord(value);
      setValue('');
      setResult('딩동댕');
    } else {
      setValue('');
      setResult('땡');
    }
    inputRef.current.focus();
  }

  onChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmit}>
        <label htmlFor="wordInput">글자를 입력하세요.</label>
        <input type="text" id="wordInput" className="wordInput" ref={inputRef} value={value} onChange={onChange} />
        <button type="submit">입력!!</button>
      </form>
      <div>{result}</div>
    </>
  )
}
// class WordRelay extends Component {
//   state = {
//     word: '조항민',
//     value: '',
//     result: '',
//   };

//   onSubmit = (e) => {
//     e.preventDefault();
//     if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
//       this.setState({
//         word: this.state.value,
//         value: '',
//         result: '딩동댕',
//       });
//     } else {
//       this.setState({
//         value: '',
//         result: '땡',
//       });
//     }
//     this.input.focus();
//   }

//   onChange = (e) => {
//     this.setState({ value: e.target.value });
//   }

//   input;

//   inputRef = (c) => {
//     this.input = c;
//   }

//   render() {
//     return (
//       <>
//         <div>{this.state.word}</div>
//         <form onSubmit={this.onSubmit}>
//           <input type="text" ref={this.inputRef} value={this.state.value} onChange={this.onChange} />
//           <button type="submit">입력</button>
//         </form>
//         <div>{this.state.result}</div>
//       </>
//     )
//   }
// }

module.exports = WordRelay;