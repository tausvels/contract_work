import React from 'react';

function SpecialCardInteraction(props) {
  const inputData = [
    {id:1, quantity: 1, type: 'Cotton Tree', price: '$9.99', amount: 'Each'},
    {id:2, quantity: 1, type: 'Cotton Tree', price: '$9.99', amount: 'Each'},
    {id:3, quantity: 1, type: 'Cotton Tree', price: '$9.99', amount: 'Each'}
  ];
  const tableData = inputData.map((item) => (
    <tr key={item.id}>
      <td><b>{item.quantity} </b>{item.type}</td>
      <td><b>{item.price}</b> {item.amount}</td>
      <td><button className='special-card__table-button'>Order</button></td>
    </tr>
  ))
  return (
    <div>
      <table className='special-card__table'>
        <tbody>
          {tableData}
        </tbody>
      </table>
    </div>
  );
}

export default SpecialCardInteraction;