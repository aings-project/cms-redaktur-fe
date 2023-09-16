import { ActionType } from "./action";

function validationReducer(validationData = null, action = {}) {
  switch (action.type) {
    case ActionType.SET_VALIDATE_DRAFT:
      return action.payload.validationData;
    case ActionType.UNSET_VALIDATE_DRAFT:
      return null;
    default:
      return validationData;
  }
}

export default validationReducer;
