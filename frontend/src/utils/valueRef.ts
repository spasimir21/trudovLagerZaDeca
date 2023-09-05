import { useState } from 'react';

function useValueRef<T>(defaultValue: T) {
  const [refresh, setRefresh] = useState(false);
  let value = defaultValue;

  return {
    get value() {
      return value;
    },
    set value(newValue: T) {
      value = newValue;
      setRefresh(!refresh);
    }
  };
}

export { useValueRef };
