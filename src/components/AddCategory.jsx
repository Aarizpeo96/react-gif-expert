import PropTypes from "prop-types";
import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('  ')
  const setChangeValue = ({ target }) => {
    setInputValue(target.value)

  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return
    // onNewCategory(cat => [inputValue, ...cat]);
    onNewCategory(inputValue.trim());
    setInputValue('');
  };
  return (
    <form onSubmit={onSubmit} aria-label="form" className="form-add-category">
      <input
        type="text"
        placeholder="Buscar keys"
        value={inputValue}
        onChange={setChangeValue} />
    </form>
  )
}

PropTypes

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}