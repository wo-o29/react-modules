import { INITIAL_CARD_PASSWORD } from "./constants";
import { getCardPasswordError } from "./utils";
import useSingleInput from "../../../hooks/useSingleInput";

const useCardPassword = () => {
  const { inputState, handleInputChange, errorState } = useSingleInput({
    initialValue: INITIAL_CARD_PASSWORD,
    maxLength: 2,
    getErrorFn: getCardPasswordError,
  });

  return {
    cardPassword: inputState,
    handleCardPasswordChange: handleInputChange,
    errorState,
  };
};

export default useCardPassword;
