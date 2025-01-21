import React from 'react';
import {DataFetcher} from './1.useEffect/dataFetcher';
import styles from './Home.module.scss'
import { MapExample } from './2.stateWithMap/stateWithMap';
import { DataDisplay } from './3.customHook/DataDisplay/DataDisplay';
import { MapState } from './2.stateWithMap/useMapAsState/MapState';
import { CounterComponent } from './3.customHook/CounterDisplay/CounterDisplay';
import { LocalStorageForm } from './3.customHook/LocalStorageForm/LocalStorageForm';
import LemariDanAlarm from './contohUseEffect/LemariAndBook';

export const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>ReactJS Tutorial</h1>
      {/* <MapState/> */}
      {/* <LemariDanAlarm/> */}
      <CounterComponent/>
      <LocalStorageForm />
      {/* <DataFetcher/> */}
      {/* <MapExample/> */}
      {/* <DataDisplay/> */}
    </div>
  );
};
