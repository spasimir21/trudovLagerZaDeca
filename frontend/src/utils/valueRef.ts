import { useMemo, useState } from 'react';

function useValueRef<T>(defaultValue: T) {
  const ref = useMemo(() => ({ value: defaultValue }), []);
  const [refresh, setRefresh] = useState(false);

  return {
    get value() {
      return ref.value;
    },
    set value(newValue: T) {
      ref.value = newValue;
      setRefresh(!refresh);
    }
  };
}

export { useValueRef };
