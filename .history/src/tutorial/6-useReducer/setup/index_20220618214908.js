import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { defaultState, reducer } from './Reducer';

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: 'hello sucker'
};

const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name) { 
      const newItem = {
        id: Date.now().geTime().toString(),
        name
      };

      dispatch({ type: 'ADD_PERSON', payload: newItem }); // dispatch the action
      setName('');
    } else {
      dispatch({ type: 'NOT_VALUE' }); // dispatch a random action
    }
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  }
  return (
    <>
      { state.isModalOpen && <Modal modalContent={state.modalContent} /> }

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div> 

        <button type="submit">add</button> 
      </form>

      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button 
              onClick={() => 
                dispatch({ type: 'REMOVE_ITEM', payload: person.id })
              }
            >
              Remove
            </button>
          </div>
        );
      })}

    </>
  );
};

export default Index;

