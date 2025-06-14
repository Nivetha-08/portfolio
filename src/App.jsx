import React, { useEffect } from 'react';
import Home from './components/Home';

function App() {
  useEffect(() => {
    import('./assets/js/main.js').catch(err =>
      console.error('Failed to load main.js', err)
    );
  }, []);

  return <Home />;
}

export default App;
