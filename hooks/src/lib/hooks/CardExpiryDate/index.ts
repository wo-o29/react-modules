import { INITIAL_EXPIRY_DATE_STATE } from "./constants";
import { getCardExpiryDateError } from "./utils";
import useSingleInput from "../../../hooks/useSingleInput";

const useCardExpiryDate = () => {
  const { inputState, handleInputChange, errorState } = useSingleInput({
    initialValue: INITIAL_EXPIRY_DATE_STATE,
    maxLength: 4,
    getErrorFn: getCardExpiryDateError,
  });

  return {
    expiryDate: inputState,
    handleExpiryChange: handleInputChange,
    errorState,
  };
};

export default useCardExpiryDate;
