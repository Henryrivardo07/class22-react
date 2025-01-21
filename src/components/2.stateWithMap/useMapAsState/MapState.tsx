// pages/MapState.tsx
import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import styles from './MapState.module.scss'; // Mengimpor file SCSS untuk styling

export const MapState: React.FC = () => {
  const [userMap, setUserMap] = useState<Map<string, string>>(new Map());

  // Menambah atau memperbarui pengguna
  const handleAddOrUpdateUser = (username: string, email: string) => {
    const newMap = new Map(userMap);
    newMap.set(username, email);
    setUserMap(newMap);
  };

  // Menghapus pengguna berdasarkan username
  const handleDeleteUser = (username: string) => {
    const newMap = new Map(userMap);
    newMap.delete(username);
    setUserMap(newMap);
  };

  return (
    <div className={styles.container}>
      {/* Tombol untuk menambah data */}
      <div className={styles.buttonGroup}>
        <Button variant="primary" onClick={() => handleAddOrUpdateUser('John', 'john@example.com')}>
          Tambahkan atau Update John
        </Button>
        <Button variant="primary" onClick={() => handleAddOrUpdateUser('Alice', 'alice@example.com')}>
          Tambahkan atau Update Alice
        </Button>
        <Button variant="primary" onClick={() => handleAddOrUpdateUser('Henry', 'henry@example.com')}>
          Tambahkan atau Update Henry
        </Button>
      </div>

      {/* Tombol untuk menghapus data */}
      <div className={styles.buttonGroup}>
        <Button variant="danger" onClick={() => handleDeleteUser('John')}>Hapus John</Button>
        <Button variant="danger" onClick={() => handleDeleteUser('Alice')}>Hapus Alice</Button>
        <Button variant="danger" onClick={() => handleDeleteUser('Henry')}>Hapus Henry</Button>
      </div>

      <h2>Daftar Pengguna</h2>
      <ul className={styles.userList}>
        {/* Iterasi melalui userMap untuk menampilkan daftar pengguna */}
        {[...userMap.entries()].map(([username, email]) => (
          <li key={username} className={styles.userItem}>
            {username}: {email}
          </li>
        ))}
      </ul>
    </div>
  );
};
