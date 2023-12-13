import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import ShortenerForm from './components/ShortenerForm';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShortenerForm/>}/>
        <Route path="*" element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
