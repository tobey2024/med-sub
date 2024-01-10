import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignInPage from './pages/SignInPage';
import Register from './pages/Register';
import PageLayout from './layout';

function App() {

  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </PageLayout>
      
  
    
  )
}

export default App
