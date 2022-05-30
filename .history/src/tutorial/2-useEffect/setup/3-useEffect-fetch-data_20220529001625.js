import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async() => {
    const response = await fetch(url)
    const users = await response.json();
    setUsers(users);
    // console.log(users);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <section>
      <h2>Github Users</h2>

      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;

          return (
            <li key={id}>
              <h4>{login}</h4>
              <img src={avatar_url} alt={login} />
                <h4>{login}</h4>
              </div>
            </li>
          );
        })}
      </ul>

    </section>
  );

};

export default UseEffectFetchData;
