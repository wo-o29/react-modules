import { useState } from "react";
import { BaseInputState, ErrorState } from "../lib/types";

interface UseInputStateParams {
  initialValue: BaseInputState;
  maxLength: number;
  getErrorFn: (value: string) => ErrorState;
}

const useSingleInput = ({
  initialValue,
  maxLength,
  getErrorFn,
}: UseInputStateParams) => {
  const [inputState, setInputState] = useState<BaseInputState>(initialValue);

  const handleInputChange = (value: string) => {
    if (value.length > maxLength) {
      return;
    }

    setInputState((prev) => ({
      ...prev,
      value,
    }));
  };

  return {
    inputState,
    handleInputChange,
    errorState: getErrorFn(inputState.value),
  };
};

export default useSingleInput;
