import cardsMock from '../mocks/cards.js'

function List() {

  const handleDeleteCard = (id) => {
    // delete from storage
    localStorage.removeItem(id)
  }

  const getCards = () => {
    console.log('cardsMock: ', cardsMock);
  }

  const Rows = () => (
    cardsMock.cards.map((card) => {
      const { name, number, cvv, expirationDate } = card;
      return (
        <tr>
          <td> {name} </td>
          <td> {number} </td>
          <td> {cvv} </td>
          <td> {expirationDate} </td>
        </tr>
      )
     }
  ))

  return (
    <div>
      <h2> Listado de tarjetas</h2>
      <a href="/cardsform"> Agregar tarjeta </a>
      <table className="card-list">
        <thead>
          <tr>
            <th className="company"> Empresa </th>
            <th className="card-number"> Número </th>
            <th className="expiration"> Expiración </th>
            <th className="delete" onClick={(id)=> handleDeleteCard(id)}></th>
          </tr>
        </thead>
        <tbody>
          <Rows />
        </tbody>
      </table>
    </div>
  );
}

export default List;
