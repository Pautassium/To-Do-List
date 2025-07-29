// === Rule creators ===
export const VALIDATOR_REQUIRE = () => ({ type: 'REQUIRE' });

export const VALIDATOR_MAXLENGTH = (val) => ({
  type: 'MAXLENGTH',
  val
});

export const VALIDATOR_MAXWORDS = (val) => ({
  type: 'MAXWORDS',
  val
});

export const VALIDATOR_POSITIVE_INTEGER = () => ({
  type: 'POSITIVE_INTEGER'
});

// === Validator runner ===
export const validate = (value, validators) => {
  let isValid = true;
  for (const validator of validators) {
    switch (validator.type) {
      case 'REQUIRE':
        isValid = isValid && value.trim().length > 0;
        break;
      case 'MAXLENGTH':
        isValid = isValid && value.length <= validator.val;
        break;
      case 'MAXWORDS':
        const wordCount = value.trim().split(/\s+/).filter(Boolean).length;
        isValid = isValid && wordCount <= validator.val;
        break;
      case 'POSITIVE_INTEGER':
        const parsed = parseInt(value, 10);
        isValid =
          isValid &&
          !isNaN(parsed) &&
          parsed >= 0 &&
          /^[0-9]+$/.test(value); // reject floats & negative signs
        break;
      default:
        break;
    }
  }
  return isValid;
};
