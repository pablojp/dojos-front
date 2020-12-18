const creditCardsCompanies = require('./constants/cardsCompany');/*  */

const initialFormData = {
    name: "",
    number: "",
    expirationDate: new Date().toLocaleDateString()
};

const Cardsform = () => {
    const [formData, setFormData] = useState(initialFormData);

    const handleInputChange = ({ ev: target }) => {
        // Metemos un useReducer?
        // Metemos un form hook?
        const newFormData = { ...formData, [target.name]: target.value };
        setFormData(newFormData);
    };

    const handleSave = () => {
        //save card
        let creditCardsSaved = localStorage.getItem('TODO: definir nombre en localStorage');
        // actualizar el item del localStorage
        localStorage.setItem('TODO: nombre', JSON.stringify(creditCardsSaved));
    }

    return(
        <Fragment>
            <form>
                <input type="text" name="name" placeolder="Nombre del titular" value={formData.name} onChange={handleInputChange}></input>
                <input type="text" name="number" placeolder="Nombre de la tarjeta" value={formData.number} onChange={handleInputChange}></input>
                <input type="date" name="expirationDate" value={formData.expirationDate} min="2017-01-01" max="2028-12-31" onChange={handleInputChange}></input>
                <button type="submit" onClick={handleSave}>Guardar</button>
                <button type="submit">Cancelar</button>
            </form>
        </Fragment>
    );
}

export default Cardsform;
