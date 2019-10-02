import React, { memo } from 'react';
import Tr from './Tr';

const Table = memo(({ tableData, dispatch }) => {
  console.log('Table render');
  return (
    <table>
      {Array(tableData.length).fill().map((tr, i) => {
        return (
          <Tr key={i} rowIndex={i} rowData={tableData[i]} dispatch={dispatch} />
        );
      })}
    </table>
  );
});

export default Table;