import React, { useState, useEffect } from 'react';
import useUser from '../hooks/useUser';

function Paginations({ newData }) {
  const user = useUser();
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const data = user?.data?.results;
  console.log(data);
  const [tableRange, setTableRange] = useState([]);
  const [slice, setSlice] = useState([]);

  const calculateRange = () => {
    const range = [];
    const num = Math.ceil(data.length / rowsPerPage);
    for (let i = 1; i <= num; i++) {
      range.push(i);
    }
    return range;
  };

  const sliceData = (data, page, rowsPerPage) => {
    return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
  };

  useEffect(() => {
    const range = calculateRange(data, rowsPerPage);
    setTableRange([...range]);
    const slice = sliceData(data, page, rowsPerPage);
    setSlice([...slice]);
  }, [data, setTableRange, page, setSlice]);

  return (
    <div className="flex flex-row">
      {tableRange.map((col) => {
        return (
          <button
            className="bg-ajb-white px-4 py-2 text-ajb-primary font-bold border border-ajb-yellow"
            onClick={() => newData(slice)}
          >
            {col}
          </button>
        );
      })}
    </div>
  );
}

export default Paginations;
