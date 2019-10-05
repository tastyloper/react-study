import React, { useContext } from 'react';
import Tr from './Tr';
import { TableContext } from './MineSearch';

const Table = () => {
  console.log('Table render');
  const { tableData } = useContext(TableContext);
  return (
    <table>
      {Array(tableData.length).fill().map((tr, i) => {
        return (
          <Tr key={i} rowIndex={i} />
        );
      })}
    </table>
  );
};

export default Table;