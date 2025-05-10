import { ErrorState, ValidationRule } from "../../../types";
import {
  commonConditions,
  getErrorByRules,
} from "../../../../utils/validation";

const cardPasswordValidationRules: ValidationRule[] = [
  {
    condition: commonConditions.hasExactLength(2),
    errorMessage: "비밀번호는 2자리여야 합니다.",
  },
];

export const getCardPasswordError = (password: string): ErrorState => {
  return getErrorByRules(password, cardPasswordValidationRules);
};
