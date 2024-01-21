import { ChangeEvent, SetStateAction, useState, Dispatch } from "react";

function useInput(defaultValue: string = "") : [string, (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void, Dispatch<SetStateAction<string>>] {
  const [value, setValue] = useState(defaultValue);

  function handleValueChange({ target }) {
    setValue(target.value);
  }

  return [value, handleValueChange, setValue];
}

export default useInput;
