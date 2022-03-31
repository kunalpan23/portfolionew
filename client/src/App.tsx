import { MyProvider } from './store/';

import Header from './components/header';
import Terminal from './components/terminal';
import Footer from './components/footer';

export const App = () => {
  return (
    <MyProvider >
      <main role="main" className='main'>
          <Header />
          <Terminal />
          <Footer />
      </main>
    </MyProvider>
  ) ;
};

