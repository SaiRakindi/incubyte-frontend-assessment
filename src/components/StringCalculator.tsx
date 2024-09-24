import { ChangeEvent, useState } from "react";
import { add } from "../utils/calculate";

const StringCalculator: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const [error, setError] = useState<string | null>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCalculate = () => {
    try {
      const sum: number = add(inputValue);
      setResult(sum);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />

      {result && <p>Result: {result}</p>}

      <button onClick={handleCalculate}>Calculate</button>
    </div>
  );
};
export default StringCalculator;
