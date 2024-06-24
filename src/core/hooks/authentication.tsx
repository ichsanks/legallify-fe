import { useState } from 'react';

export function useAuthenticate() {
  const [state, setState] = useState(initialState);

  const login = async () => {
    try {
    } catch (error) {
      setState({
        ...state,
        isLoading: false,
        error: JSON.stringify(error),
      });
    }
  };

  const resetState = () => setState(initialState);

  return { ...state, login, resetState };
}

const initialState: TInitialState = {
  isLoading: false,
  isSuccess: false,
  error: undefined,
  isComplete: false,
  data: undefined,
};

type TInitialState = {
  isLoading: boolean;
  isSuccess: boolean;
  isComplete: boolean;
  error?: string;
  data: unknown;
};
