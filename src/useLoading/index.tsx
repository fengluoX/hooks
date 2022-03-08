import { useState, useRef, useEffect } from 'react';

type AsyncCallFn<T> = () => Promise<T>;

const useLoading = (initValue: boolean = false) => {
  const ref = useRef(true);
  const [loading, setLoading] = useState<boolean>(initValue);

  const closeLoading = () => {
    if (ref.current) {
      setLoading(false);
    }
  };

  async function withLoading<T>(fn: AsyncCallFn<T>): Promise<T> {
    setLoading(true);
    try {
      const result = await fn();
      closeLoading();
      return result;
    } catch (err) {
      closeLoading();
      throw err;
    }
  }

  useEffect(() => {
    ref.current = true;
    return () => {
      ref.current = false;
    };
  });

  return [loading, withLoading] as [boolean, <T>(fn: AsyncCallFn<T>) => Promise<T>];
};

export default useLoading;
