// hooks/useLocalStorage.ts
import { useState } from 'react';

// Custom hook untuk menggunakan localStorage
export function useLocalStorage<T>(key: string, initialValue: T) {
  // Ambil nilai dari localStorage jika ada, atau gunakan nilai awal
  const storedValue = localStorage.getItem(key);
  const parsedValue = storedValue ? JSON.parse(storedValue) : initialValue;

  // State untuk menyimpan nilai yang digunakan dalam aplikasi
  const [value, setValue] = useState<T>(parsedValue);

  // Set nilai ke localStorage dan update state
  const setStoredValue = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue] as const;
}