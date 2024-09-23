import './App.css';
import { Navigation } from './navigation';
import { ChakraProvider, Box, Image } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <ChakraProvider>
      {loading ? (
        <Box id="loading-page" display="flex" alignItems="center" justifyContent="center" height="100vh">
          <Box textAlign="center">
            <Image src={require("./assets/images/linkedin.png")} alt="LinkedIn Logo" />
            <Box id="dot-loader">
              <Box className="lds-ellipsis">
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box className="App">
          <Navigation />
        </Box>
      )}
    </ChakraProvider>
  );
}

export default App;
