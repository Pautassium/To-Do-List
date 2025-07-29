import React, { useReducer, useState } from 'react';        // Import useState
import { formReducer } from '../../shared/hooks/formReducer';
import Input from '../../shared/components/Input';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MAXWORDS,
  VALIDATOR_POSITIVE_INTEGER
} from '../../Util/validators';

import '../styles/TaskInput.css';

const TaskInput = (props) => {
  // 1. Local key state for forcing remount of Input components
  const [formKey, setFormKey] = useState(0);

  // 2. Form reducer
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title:       { value: '', isValid: false },
      description: { value: '', isValid: true  },
      due:         { value: '', isValid: true  }
    },
    isValid: false
  });

  const inputHandler = (id, value, isValid) => {
    dispatch({
      type: 'INPUT_CHANGE',
      value,
      isValid,
      inputId: id
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!formState.isValid) return;

    props.onAddTask({
      title:       formState.inputs.title.value,
      description: formState.inputs.description.value,
      due:         formState.inputs.due.value
    });

    // 3. Reset the form state
    dispatch({ type: 'RESET_FORM' });
    // 4. Bump the key to remount all Input components
    setFormKey((k) => k + 1);
  };

  return (
    <form className="task-input-container" onSubmit={submitHandler}>
      <Input
        key={formKey + '_title'}
        id="title"
        type="text"
        label="Task Title"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MAXLENGTH(50)]}
        errorText="You must enter a title (max 50 chars)."
        onInput={inputHandler}
      />

      <Input
        key={formKey + '_desc'}
        id="description"
        type="text"
        label="Description"
        validators={[VALIDATOR_MAXWORDS(75)]}
        errorText="Please keep it under 75 words."
        onInput={inputHandler}
      />

      <Input
        key={formKey + '_due'}
        id="due"
        type="number"
        label="Due in (days)"
        validators={[VALIDATOR_POSITIVE_INTEGER()]}
        errorText="Enter a valid positive number of days."
        onInput={inputHandler}
      />

      <button
        type="submit"
        className="todo-add-button"
        disabled={!formState.isValid}
      >
        ➕ Add Task
      </button>
    </form>
  );
};

export default TaskInput;
