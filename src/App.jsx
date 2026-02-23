import { Header } from './features/layout/components/Header';
import { Content } from './features/layout/components/Content';
import { Footer } from './features/layout/components/Footer';
import { Article } from './features/layout/components/Article';
import { Props } from './features/layout/components/Props';

import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="d-flex flex-column min-vh-100 bg-light">

        {/* Header */}
        <Header />

        {/* Contenido principal */}
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/articles" element={<Article />} />
            <Route path="/props" element={<Props />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />

      </div>
    </HashRouter>
  );
}

export default App;