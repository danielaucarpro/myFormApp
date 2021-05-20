import UserComponent from './components/UserComponent';

function App() {
  //create a array to pass to user, so later we can display all of them
  // later we will fetch this data
  const userList = [
    {
      id: 1,
      name: 'Deackard',
      lastName: 'Cain',
      email: 'c.deackard@diablo.com',
      catchPhrase: 'Hello! Stay a while and listen!'
    },
    {
      id: 2,
      name: 'Mario',
      lastName: 'Bros',
      email: 'm.bros@mario.com',
      catchPhrase: "It's me! Mario!"
    },

    {
      id: 3,
      name: 'Luigi',
      lastName: 'Bros',
      email: 'l.bros@mario.com',
      catchPhrase: 'Mario?'
    },

    {
      id: 4,
      name: 'Bowser',
      lastName: 'Koopa',
      email: 'b.koopa@mario.com',
      catchPhrase: 'Awwwr!'
    },

    {
      id: 5,
      name: 'Harry',
      lastName: 'Potter',
      email: 'h.potter@hpotter.com',
      catchPhrase: 'Expelliarmus!'
    }
  ];

  return (
    <>
      <UserComponent user = {userList}></UserComponent>
    </>
  );
}

export default App;
