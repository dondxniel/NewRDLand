import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PageLayout from './components/layouts/PageLayout';
import Join from './components/pages/Join';
import Login from './components/pages/Login';

function App() {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path = "/" element = {<Navigate to = "/join" />} />
          <Route path = "/join" element = {<Join />} />
          <Route path = "/login" element = {<Login />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;
