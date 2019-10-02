import React, { memo } from 'react';
import Td from './Td';

const Tr = memo(({ rowData, rowIndex, dispatch }) => {
  console.log('Tr render');
  return (
    <tr>
      {Array(rowData.length).fill().map((td, i) => {
        return (
          <Td key={i} rowIndex={rowIndex} cellIndex={i} cellData={rowData[i]} dispatch={dispatch} />
        );
      })}
    </tr>
  );
});

export default Tr;