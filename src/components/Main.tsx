import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Booking, ConfirmedBooking } from './index';
import { Header } from './index';
export interface IMainProps {
}

export function Main () {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}
