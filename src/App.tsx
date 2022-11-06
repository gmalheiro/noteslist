import React, {useState} from 'react';
import Header from './components/Header';
import { Note } from './models/note.model';
import './App.css';

function App() {
  const [notes,setNotes] = useState<{}[]>([{
    id: ( new Date).toString(),
    title: 'Meetings',
    text: 'Schedule meeting with the UI/UX team',
    color:'#dfdfdf',
    date: (new Date).toString(),
  }]);


  return (
    <>
      <Header />
    </>
  );
}

export default App;
