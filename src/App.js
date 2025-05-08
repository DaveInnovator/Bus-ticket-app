import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import CompleteProfile from './Pages/CompleteProfile/CompleteProfile';
import SearchRoutes from './Pages/SearchRoutes/SearchRoutes';
import SelectRoute from './Pages/SelectRoute/SelectRoute';
import SelectTrip from './Pages/SelectTrip/SelectTrip';
import SeatSelection from './Pages/SeatSelection/SeatSelection';
import Payment from './Pages/Payment/Payment';
import Receipt from './Pages/Receipt/Receipt';
import CancelReservation from './Pages/CancelReservation/CancelReservation';
import Home from './Pages/Home/Home'
function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes> 

          <Route path="/search-routes" element={<SearchRoutes />} />
          <Route path="/Login" element={<Login />} />
          <Route path='/Home' element={<Home/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
         
          <Route path="/select-route" element={<SelectRoute />} />
          <Route path="/select-trip" element={<SelectTrip />} />
          <Route path="/seat-selection" element={<SeatSelection />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/receipt" element={<Receipt />} />
          <Route path="/cancel-reservation" element={<CancelReservation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
