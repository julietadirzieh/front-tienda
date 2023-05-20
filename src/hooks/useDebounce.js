import { useCallback, useEffect, useState } from 'react';

import debounce from 'lodash/debounce';

export const useDebounce = (callback, delay) => {
  const [debouncedCallback] = useState(() => debounce(callback, delay));

  useEffect(() => {
    return () => {
      debouncedCallback.cancel();
    };
  }, [debouncedCallback]);

  const executeCallback = useCallback(
    (params) => {
      if (params) {
        debouncedCallback(params);
      }
    },
    [debouncedCallback],
  );

  return executeCallback;
};