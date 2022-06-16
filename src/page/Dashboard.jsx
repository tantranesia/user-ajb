import React, { useState } from 'react';
import NavBar from '../components/Navbar';
import Tables from '../components/Table';

export var Context = React.createContext();

export default function Dashboard() {
  const [search, setSearch] = useState('');
  const [gender, setGender] = useState('');

  return (
    <div className="bg-ajb-primary min-h-screen px-10 py-6 flex flex-col gap-10">
      <Context.Provider
        value={{
          search,
          updateSearch: (search) => setSearch(search),
          gender,
          updateGender: (gender) => setGender(gender),
        }}
      >
        <div className="w-full">
          <NavBar />
        </div>
        <Tables />
      </Context.Provider>
    </div>
  );
}
