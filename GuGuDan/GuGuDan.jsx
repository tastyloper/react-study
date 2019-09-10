const React = require('react');
const { useState, useRef } = React;

const GuGuDan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue('');
      setResult('정답');
    } else {
      setValue('');
      setResult('땡');
    }
    inputRef.current.focus();
  }

  const onChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <>
      <div>{first}곱하기{second}는?</div>
      <form onSubmit={onSubmit}>
        <input type="number" ref={inputRef} value={value} onChange={onChange} />
        <button type="submit">입력!</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = GuGuDan;