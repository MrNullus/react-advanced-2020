import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';

// reducer function
const reducer = (state, action) => {
  if (action.type === 'TESTING') {
    return {
      ...state, // return the current state
      people: data,
      isModalOpen: true,
      modalContent: 'item added'
    };
  }

  trow new Error('no matching action type');
}; 

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
      dispatch({
        type: 'TESTING'
      });
    } else {
      dispatch({
        type: 'RANDOM'
      });
    }
  };

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

      {state.people.map((person, index) => {
        return (
          <div key={person.id}>
              <h4>{person.name}</h4>
          </div>
        );
      })}

    </>
  );
};

export default Index;

