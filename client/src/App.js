import { Outlet } from 'react-router-dom';
import { Container } from '@chakra-ui/react';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default App;
