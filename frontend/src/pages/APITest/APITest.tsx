import { RandomRequest, RandomRequestArgs } from '../../api/RandomRequest';
import React, { useEffect, useState } from 'react';
import { useRequest } from '../../api/useRequest';

const ARGS: RandomRequestArgs = { from: 2, to: 5 };

function APITest() {
  const [number, setNumber] = useState(0);

  const { send } = useRequest(RandomRequest, result => {
    if (result == null) return;
    setNumber(result.data.random);
  });

  useEffect(() => send(ARGS), []);

  return (
    <div>
      <p>{number}</p>
      <button onClick={() => send(ARGS)}>Refresh</button>
    </div>
  );
}

export { APITest };
