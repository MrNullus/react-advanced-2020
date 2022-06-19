import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)
/*
  $> Context API / useContext
    * Context API -> Serve para criar contextos de props, ou seja, 
    ¬ ira criar um "escopo" aonde determinadas props passadas, através da prop <value>
    ¬ do proprio Context API vai tornar esses values como algo visivel para aqueles 
    ¬ components que estão usando esse context

  + Criando um Context:
    26 | const PersonContext = React.createContext();
    ? Lembrando que todo context (contexto) possui:
      $ dois components - Provider && Consumer
        ! Provider - vai prover as props desse contexto
        ! Consumer -todo aquele component que usar das props desse context

  + Passando props para um Provider:
    32 | <PersonContext.Provider value={{ removePerson, people }}>

  + Definindo (Associar) que um component terá um determinado context:
    44 | const mainData = useContext(PersonContext);

  + Consumer comsumindo as props desse Provider:
    63 | <button onClick={() => removePerson(id)}>remove</button>

*/

const PersonContext = React.createContext();

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3>Context API / useContext</h3>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
  const mainData = useContext(PersonContext);
  console.log(mainData);

  return (
    <>
      {mainData.people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);

  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
