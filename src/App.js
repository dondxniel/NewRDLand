import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageLayout from './components/layouts/PageLayout';
import Home from './components/pages/Home';

function App() {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path = "/" element = {<Home />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;
