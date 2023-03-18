import './App.css';
import Container from './Components/Container/Container';
import AdressBookForm from './Components/AdressBookForm/AdressBookForm';
import { useState } from 'react';
import AdressBookList from './Components/AdressBookList/AdressBookList';

function App() {

  const [list, setList] = useState([]);

  //- Pagrindiniame App.jsx yra state, kuris turi adresato objektų masyvą (Array):

  const updateList = (user) => {
    const newList = [ ...list, user ]
    // [ { 0: {...}, user: {...} } ]

    // [{...}, {...}]
    setList(newList)
  }
  // - masyvas pildomas, kai AddressBookForm paspaudžiamas mygtukas

  return (
    <div>
      <Container>
        <AdressBookForm onSubmit={updateList} />
        <AdressBookList list={list} />
      </Container>
    </div>


  );
}
export default App;
