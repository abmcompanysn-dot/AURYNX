import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Ecosystem from './pages/Ecosystem';
import UniversePage from './pages/UniversePage';
import Innovation from './pages/Innovation';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Insights from './pages/Insights';
import JoinAuryn from './pages/JoinAuryn';
import Partnerships from './pages/Partnerships';
import type { Lang } from './types';

function App() {
  const [lang, setLang] = useState<Lang>('en');

  return (
    <HashRouter>
      <ScrollToTop />
      <Layout lang={lang} setLang={setLang}>
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/about" element={<About lang={lang} />} />
          <Route path="/ecosystem" element={<Ecosystem lang={lang} />} />
          <Route path="/universe/:id" element={<UniversePage lang={lang} />} />
          <Route path="/innovation" element={<Innovation lang={lang} />} />
          <Route path="/careers" element={<Careers lang={lang} />} />
          <Route path="/contact" element={<Contact lang={lang} />} />
          <Route path="/insights" element={<Insights lang={lang} />} />
          <Route path="/join" element={<JoinAuryn lang={lang} />} />
          <Route path="/partnerships" element={<Partnerships lang={lang} />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
