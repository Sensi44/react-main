import React, { useState, useEffect } from 'react';
import { formatDistance } from 'date-fns';

import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

import './App.scss';

let maxId = 100;
function App() {
  const [todoData, setTodoData] = useState([
    {
      label: 'Drink Coffee',
      important: false,
      status: 'active',
      createdAt: new Date().getTime(),
      updatedAt: '',
      diffTime: 'now',
      id: 1,
    },
    {
      label: 'work,sleep, repeat',
      important: true,
      status: 'active',
      createdAt: new Date().getTime(),
      updatedAt: '',
      diffTime: 'now',
      id: 3,
    },
    {
      label: 'sleep',
      important: false,
      status: 'active',
      createdAt: new Date().getTime(),
      updatedAt: '',
      diffTime: 'now',
      id: 4,
    },
  ]);
  const [filterStatus, setFilterStatus] = useState('all');
  const [oldStatus, setOldStatus] = useState('active');

  const createTodoItem = (label) => {
    maxId += 1;
    return {
      label,
      important: false,
      status: 'active',
      id: maxId,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
      diffTime: 'now',
    };
  };

  const mapperDiffTime = (arr) => {
    arr.map((item) => {
      const temp = item;
      temp.updatedAt = new Date().getTime();
      temp.diffTime = formatDistance(new Date(item.updatedAt), new Date(item.createdAt), { includeSeconds: true });

      return { item };
    });
  };

  useEffect(() => mapperDiffTime(todoData), [todoData]);

  const addItem = (text) => {
    const newItem = createTodoItem(text);
    setTodoData([...todoData, newItem]);
  };

  const deleteItem = (id) => {
    const temp = [...todoData];
    temp.splice(id, 1);
    setTodoData(temp);
  };

  const onToggleDone = (id) => {
    const idx = todoData.findIndex((el) => el.id === id);
    const current = todoData[idx];
    const temp = [...todoData];
    current.status = current.status === 'active' ? 'completed' : 'active';
    temp.splice(idx, 1, current);
    setTodoData(temp);
  };

  const onToggleImportant = (id) => {
    const idx = todoData.findIndex((el) => el.id === id);
    const current = todoData[idx];
    const temp = [...todoData];
    current.important = !current.important;
    temp.splice(idx, 1, current);
    setTodoData(temp);
  };

  const editItem = (id) => {
    const temp = [...todoData];
    const current = [...todoData];
    current.forEach((el, idx) => {
      const cur = el;
      if (idx !== id) {
        cur.status = el.status === 'editing' ? 'active' : el.status;
      } else {
        setOldStatus(el.status);
        cur.status = 'editing';
      }
    });
    temp.splice(id, 1, current[id]);
    setTodoData(current);
  };

  const confirmEdit = (text, id) => {
    const temp = [...todoData][id];
    temp.label = text;
    temp.status = oldStatus;

    setTodoData([...todoData.slice(0, id), temp, ...todoData.slice(id + 1)]);
  };

  // const confirmEdit = (text, id) => {
  //   const newItem = { ...todoData[id], label : text, status: oldStatus };
  //   setTodoData([...todoData.slice(0, id), newItem, ...todoData.slice(id + 1)]);
  // }

  const filter2 = (items, filterType) => {
    switch (filterType) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => item.status === 'active' || item.status === 'editing');
      case 'completed':
        return items.filter((item) => item.status === 'completed');
      default:
        return items;
    }
  };

  const filter = (filterType) => {
    setFilterStatus(filterType);
  };

  const clearAll = () => {
    const newData = todoData.filter((el) => el.status === 'active' || el.status === 'editing');
    setTodoData(newData);
  };

  const doneCount = todoData.filter((el) => el.status === 'completed').length;
  const todoCount = todoData.length - doneCount;

  return (
    <div className='todoapp'>
      <Header />
      <Main
        todos={filter2(todoData, filterStatus)}
        onDeleted={deleteItem}
        add={addItem}
        onToggleDone={onToggleDone}
        onToggleImportant={onToggleImportant}
        editItem={editItem}
        confirmEdit={confirmEdit}
      />
      <Footer toDo={todoCount} done={doneCount} filter={filter} clear={clearAll} filterStatus={filterStatus} />
    </div>
  );
}

export default App;
