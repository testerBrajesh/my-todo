import { Table } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import List from './components/List';
import './App.css';

// const getLocalStorage = ()=>{
//   let list= localStorage.getItem('list');
//   if(list){
//     return (list=JSON.parse(localStorage.getItem("list")))
//   }else{
//     return []
//   }
// }

const getLocalStorage = () => {
  const list = localStorage.getItem('list');
  return list ? JSON.parse(list) : [];
};

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [editID, setEditID] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

//   useEffect(()=>{
// localStorage.setItem('list',JSON.stringify(list))
//   },[list])

useEffect(() => {
  localStorage.setItem('list', JSON.stringify(list));
}, [list]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Please enter a task.");
      return;
    }

    if (isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName('');
      setEditID(null);
      setIsEditing(false);
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('');
      setIsEditing(false);
    }
  };

  const editItem = (id) => {
    const itemToEdit = list.find((item) => item.id === id);
    setName(itemToEdit.title);
    setEditID(id);
    setIsEditing(true);
  };

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
    setName('');
    setEditID(null);
    setIsEditing(false);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1>Task Manager</h1>
        <input
          type="text"
          placeholder="Enter your task"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>{isEditing ? 'Update' : 'Submit'}</button>
      </form>
      <Table striped hover  >
        <thead class="thead-dark">
          <tr>
            <th>Task Name</th>
            <th>Task Operations</th>
          </tr>
        </thead>
        </Table>
 

      {list.length > 0 && (
        <List items={list} removeItem={removeItem} editItem={editItem} />
      )}
      {list.length === 0 && <p>No tasks available.</p>}
    </section>
  );
}

export default App;
