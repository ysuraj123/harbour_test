import { useState } from 'react';
import { CounterCardProps } from '../types';
import { Button } from './Button';
import { Card } from './Card';

export function CounterCard({ counter, onIncrement, onDecrement, onReset, onChange }: CounterCardProps) {
  const [inputValue, setInputValue] = useState<string>(String(counter.value));
  const [inputError, setInputError] = useState<string>('');

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
    setInputError('');
  }

  function handleInputSubmit() {
    const parsed = parseInt(inputValue, 10);
    if (isNaN(parsed)) {
      setInputError('Please enter a valid integer.');
      return;
    }
    onChange(parsed);
    setInputError('');
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      handleInputSubmit();
    }
  }

  // Keep input in sync when counter changes externally
  const displayValue = counter.value;

  return (
    <Card title="Counter" className="max-w-md w-full">
      <div className="flex flex-col items-center gap-6">
        {/* Big counter display */}
        <div className="flex items-center justify-center w-40 h-40 rounded-full bg-v1-cream border-4 border-v1-teal shadow-inner">
          <span className="text-5xl font-extrabold text-v1-dark select-none">
            {displayValue}
          </span>
        </div>

        {/* Increment / Decrement buttons */}
        <div className="flex gap-4">
          <button
            onClick={onDecrement}
            className="w-12 h-12 rounded-full bg-v1-dark text-white text-2xl font-bold flex items-center justify-center hover:bg-teal-900 transition-colors focus:outline-none focus:ring-2 focus:ring-v1-teal"
            aria-label="Decrement"
          >
            −
          </button>
          <button
            onClick={onIncrement}
            className="w-12 h-12 rounded-full bg-v1-teal text-white text-2xl font-bold flex items-center justify-center hover:bg-teal-600 transition-colors focus:outline-none focus:ring-2 focus:ring-v1-teal"
            aria-label="Increment"
          >
            +
          </button>
        </div>

        {/* Manual input */}
        <div className="w-full flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-600">Set a specific value:</label>
          <div className="flex gap-2">
            <input
              type="number"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-v1-teal"
              placeholder="Enter value"
            />
            <Button label="Set" onClick={handleInputSubmit} variant="primary" />
          </div>
          {inputError && (
            <p className="text-red-500 text-xs">{inputError}</p>
          )}
        </div>

        {/* Reset */}
        <Button label="Reset to 0" onClick={onReset} variant="danger" className="w-full" />
      </div>
    </Card>
  );
}