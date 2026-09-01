import { useLocalStorage } from '../hooks/useLocalStorage';
import { CounterCard } from '../components/CounterCard';
import { Header } from '../components/Header';

export function DashboardPage() {
  const { counter, increment, decrement, reset, updateValue } = useLocalStorage();

  return (
    <div className="min-h-screen bg-v1-cream flex flex-col">
      <Header title="Counter Dashboard" />

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <p className="text-v1-dark text-sm mb-8 opacity-70">
          Your counter value is persisted in local storage.
        </p>

        <CounterCard
          counter={counter}
          onIncrement={increment}
          onDecrement={decrement}
          onReset={reset}
          onChange={updateValue}
        />

        <div className="mt-8 text-center text-xs text-gray-400 max-w-xs">
          Use the <span className="font-semibold text-v1-teal">+</span> and{' '}
          <span className="font-semibold text-v1-dark">−</span> buttons to change
          the counter, or type a value and press <kbd className="bg-gray-100 border border-gray-300 rounded px-1">Enter</kbd> to set it directly.
        </div>
      </main>

      <footer className="text-center py-4 text-xs text-gray-400">
        © {new Date().getFullYear()} V1 Counter App
      </footer>
    </div>
  );
}