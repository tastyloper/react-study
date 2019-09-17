import React, { useRef, useState } from 'react';
import Try from './Try';

const getNumbers = () => {
  const candidate = [1,2,3,4,5,6,7,8,9];
  const arr = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    arr.push(chosen);
  }
  return arr;
}

const NumberBaseball = () => {
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');
  const [answer, setAnswer] = useState(getNumbers);
  const [tries, setTries] = useState([]);
  const inputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if (value === answer.join('')) {
      setResult('홈런!');
      setTries((prevTries) => [...prevTries, { try: value, result: '홈런!' }]);
      alert('게임을 다시 시작합니다!');
      setValue('');
      setAnswer(getNumbers);
      setTries([]);
    } else {
      const answerArr = value.split('').map(v => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`);
        alert('게임을 다시 시작합니다!');
        setValue('');
        setAnswer(getNumbers);
        setTries([]);
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (answerArr[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArr[i])) {
            ball += 1;
          }
        }
        setTries((prevTries) => [...prevTries, { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다.` }]);
        setValue('');
      }
    }
    inputRef.current.focus();
  }

  const onChange = (e) => {
    console.log(answer);
    setValue(e.target.value);
  }

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmit}>
        <input maxLength={4} ref={inputRef} value={value} onChange={onChange} />
        <button type="submit">입력!!</button>
      </form>
      <div>시도: {tries.length}</div>
      <ul>
        {tries.map((v, i) => <Try key={`${i + 1}차 시도`} tryInfo={v} />)}
      </ul>
    </>
  )
}

export default NumberBaseball;