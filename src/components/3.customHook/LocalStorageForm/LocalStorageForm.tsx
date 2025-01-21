// components/LocalStorageForm.tsx
import React, { useState } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Button } from '@/components/ui/Button';
import styles from './LocalStorageForm.module.scss'

export const LocalStorageForm: React.FC = () => {
  const [name, setName] = useLocalStorage<string>('username', 'Guest');
  const [age, setAge] = useLocalStorage<number>('age', 25);
  const [tempName, setTempName] = useState(name); // Temporary state for name
  const [tempAge, setTempAge] = useState(age); // Temporary state for age

  // Menyimpan data sementara ke localStorage saat tombol ditekan
  const handleSaveToLocalStorage = () => {
    setName(tempName);
    setAge(tempAge);
    alert('Data telah disimpan ke localStorage!');
  };

  return (
    <div className={styles.formContainer}>
      <h1>Welcome, {name}!</h1>
      <p>Age: {age}</p>

      <div className="input-container">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={tempName}
          onChange={(e) => setTempName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>

      <div className="input-container">
        <label htmlFor="age">Age:</label>
        <input
          id="age"
          type="number"
          value={tempAge}
          onChange={(e) => setTempAge(Number(e.target.value))}
          placeholder="Enter your age"
        />
      </div>

      {/* Tombol untuk menyimpan ke localStorage */}
      <div>
      <Button  onClick={handleSaveToLocalStorage}>
        Simpan ke LocalStorage
      </Button>
      </div>
    </div>
  );
};


