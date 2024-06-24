import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import '@fortawesome/fontawesome-free/css/all.min.css';

import { Login, Register } from './core/presentation/screens';

export default function App() {
  return (
    <Register />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/register" element={<Register />} />
    //     <Route path="/login" element={<Login />} />
    //     {/* <Route path="/" render={(props) => <Login {...props} />} /> */}
    //     {/* <Redirect from="/" to="/admin/dashboard" /> */}
    //   </Routes>
    // </BrowserRouter>
  );
}
