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
    <form onSubmit={onSubmit} className="form-add-category">
      <input
        type="text"
        placeholder="Buscar keys"
        value={inputValue}
        onChange={setChangeValue} />
    </form>
  )
}
