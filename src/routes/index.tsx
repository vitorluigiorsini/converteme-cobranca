import { Route, Routes } from 'react-router-dom'

import { Payment } from '../pages'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/cobranca" element={<Payment />} />

      <Route path="*" element={<Payment />} />
    </Routes>
  )
}
