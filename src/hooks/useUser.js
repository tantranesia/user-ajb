import axios from 'axios';
import { useQuery } from 'react-query';

export default function useUser() {
  const gender = localStorage.getItem('gender');

  return useQuery(
    ['user', gender],
    () =>
      axios
        .get(`https://randomuser.me/api/?gender=${gender}&results=150&page=1`)
        .then((res) => res.data),

    {
      onSuccess: (data) => {
        console.log('onsucces user', { data });
      },
      staleTime: 900 * 1000,
    },
  );
}
