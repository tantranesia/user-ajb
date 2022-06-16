import React, { useContext } from 'react';
import { Context } from '../page/Dashboard';
import { Search } from 'react-feather';


function NavBar() {
  const { search, updateSearch, gender, updateGender } = useContext(Context);
  const handleChange = (e) => {
    updateSearch(e.target.value);
  };
  const handleGender = (e) => {
    updateGender(e.target.value);
  };

  return (
    <div className="bg-ajb-white rounded-md px-3 flex items-center justify-evenly">
      <p className="text-ajb-primary font-extrabold text-4xl">Dashboard</p>
      <div className="flex gap-5">
        <div className="border border-ajb-primary flex rounded items-center gap-3 px-2">
          <Search />
          <input
            placeholder="search"
            className="border-none rounded px-4 py-2 focus:outline-none"
            onChange={handleChange}
            value={search}
          />
        </div>

        <select
          // label="Gender"
          // placement="right"
          // style={{ background: '#143650' }}
          className='px-10'
          onChange={handleGender}
          value={gender}
        > <option value="">All</ option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </div>
    </div>
  );
}

export default NavBar;
