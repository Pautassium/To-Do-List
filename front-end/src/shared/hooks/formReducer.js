export const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE': {
      const updatedInputs = {
        ...state.inputs,
        [action.inputId]: {
          value: action.value,
          isValid: action.isValid
        }
      };

      let formIsValid = true;
      for (const inputId in updatedInputs) {
        if (!updatedInputs[inputId]) continue;
        formIsValid = formIsValid && updatedInputs[inputId].isValid;
      }

      return {
        ...state,
        inputs: updatedInputs,
        isValid: formIsValid
      };
    }

    case 'SET_DATA': {
      return {
        inputs: action.inputs,
        isValid: action.formIsValid
      };
    }
    case 'RESET_FORM': {        
        return {
            inputs: {
            title: { value: '', isValid: false },
            description: { value: '', isValid: true },
            due: { value: '', isValid: true }
            },
            isValid: false
        }
    }


    default:
      return state;
  }
};
