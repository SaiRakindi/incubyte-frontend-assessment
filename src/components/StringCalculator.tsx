import { ChangeEvent, useState } from "react";

const StringCalculator: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCalculate = () => {};

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />

      <button onClick={handleCalculate}>Calculate</button>
    </div>
  );
};
export default StringCalculator;
