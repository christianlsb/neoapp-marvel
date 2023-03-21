import React, { useEffect, useState } from 'react';

import { getHqList } from '../../services/api';

export const Home = () => {
  const [hqList, setHqList] = useState([]);

  useEffect(() => {
    getHqList().then(result => setHqList(result));
  }, []);

  return (
    <>
      <h1>HQs da Marvel</h1>
      <ul>
        {hqList.map(hq => (
          <li key={hq.id}>
            {hq.title}
            <img
              src={`${hq.thumbnail.path}.${hq.thumbnail.extension}`}
              alt={hq.title}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
