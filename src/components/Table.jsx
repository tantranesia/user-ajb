import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../page/Dashboard';
import { ChevronUp } from 'react-feather';
import { Table } from 'flowbite-react';

import Paginations from './Pagination';
import useUser from '../hooks/useUser';
import moment from 'moment';

function Tables() {
  const user = useUser();
  const [passData, setPassData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const { search, gender } = useContext(Context);


  const newData = (data) => {
    setPassData(data);
  };

  const searchResults = passData.filter((data) => {
    return data.name.first.toLowerCase().includes(search);
  });
  localStorage.setItem('gender', gender)
    console.log(gender);

  useEffect(() => {
    
    setSearchResult(() => searchResults);
    console.log(searchResult);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <Table striped={true}>
        <Table.Head>
          <Table.HeadCell>
            <div className="flex flex-row items-center gap-2">
              Name
              <ChevronUp className="w-4" />
            </div>
          </Table.HeadCell>
          <Table.HeadCell>
            <div className="flex flex-row items-center gap-2">
              Username
              <ChevronUp className="w-4" />
            </div>
          </Table.HeadCell>
          <Table.HeadCell>
            <div className="flex flex-row items-center gap-2">
              Gender
              <ChevronUp className="w-4" />
            </div>
          </Table.HeadCell>
          <Table.HeadCell>
            <div className="flex flex-row items-center gap-2">
              Nationality
              <ChevronUp className="w-4" />
            </div>
          </Table.HeadCell>
          <Table.HeadCell>
            <div className="flex flex-row items-center gap-2">
              City
              <ChevronUp className="w-4" />
            </div>
          </Table.HeadCell>
          <Table.HeadCell>
            <div className="flex flex-row items-center gap-2">
              Email
              <ChevronUp className="w-4" />
            </div>
          </Table.HeadCell>
          <Table.HeadCell>
            <div className="flex flex-row items-center gap-2">
              Register Date
              <ChevronUp className="w-4" />
            </div>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {searchResult.length > 0 ? (
            searchResult.map((col, idx) => {
              return (
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {col.name.first} {col.name.last}
                  </Table.Cell>
                  <Table.Cell>{col.login.username}</Table.Cell>
                  <Table.Cell>{col.gender}</Table.Cell>
                  <Table.Cell>{col.nat}</Table.Cell>
                  <Table.Cell>{col.location.city}</Table.Cell>
                  <Table.Cell>{col.email}</Table.Cell>
                  <Table.Cell>
                    {moment(col.registered.date).format('MMM DD YYYY')}
                  </Table.Cell>
                </Table.Row>
              );
            })
          ) : user.isSuccess ? (
            passData.map((col, idx) => {
              return (
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {col.name.first} {col.name.last}
                  </Table.Cell>
                  <Table.Cell>{col.login.username}</Table.Cell>
                  <Table.Cell>{col.gender}</Table.Cell>
                  <Table.Cell>{col.nat}</Table.Cell>
                  <Table.Cell>{col.location.city}</Table.Cell>
                  <Table.Cell>{col.email}</Table.Cell>
                  <Table.Cell>
                    {moment(col.registered.date).format('MMM DD YYYY')}
                  </Table.Cell>
                </Table.Row>
              );
            })
          ) : (
            <p className="text-ajb-white">No data available</p>
          )}
        </Table.Body>
      </Table>
      <Paginations newData={newData} />
    </div>
  );
}

export default Tables;
