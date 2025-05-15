import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Competition from './pages/Competition';
import Resources from './pages/Resources';
import GetInvolved from './pages/GetInvolved';
import Calendar from './pages/Calendar';

function App() {
 return (
 <Router>
 <Routes>
 <Route path="/" element={<MainLayout />}>
 <Route index element={<Home />} />
 <Route path="competition" element={<Competition />} />
 <Route path="resources" element={<Resources />} />
 <Route path="get-involved" element={<GetInvolved />} />
 <Route path="calendar" element={<Calendar />} />
 </Route>
 </Routes>
 </Router>
 );
}

export default App;


