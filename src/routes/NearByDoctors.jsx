import { useState, useEffect } from 'react';
import { Flex, Box, Button, Text, Spinner } from '@chakra-ui/react';
import Layout from '../components/layout/Layout';

const NearbyDoctors = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
            setLoading(false);
          },
          (error) => {
            setError('Unable to retrieve your location. Please allow location access.');
            setLoading(false);
          }
        );
      } else {
        setError('Geolocation is not supported by this browser.');
        setLoading(false);
      }
    };

    getLocation();
  }, []);

  const redirectToGoogleMaps = (latitude, longitude) => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=Ayurvedic+Doctors+near+${latitude},${longitude}`;
    window.open(mapsUrl, '_blank'); // Open in new tab (better UX)
  };

  // Loading state
  if (loading) {
    return (
      <Layout>
        <Flex minH="100vh" justify="center" align="center" direction="column" p={4}>
          <Spinner size="xl" mb={4} color="green.800" />
          <Text fontSize="xl" fontWeight="bold" textAlign="center" color="green.900">
            Please allow location access to find nearby Ayurvedic doctors.
          </Text>
        </Flex>
      </Layout>
    );
  }

  // Error state
  if (error) {
    return (
      <Layout>
        <Flex minH="100vh" justify="center" align="center" p={4}>
          <Text color="red.500" fontSize="lg" textAlign="center">
            {error}
          </Text>
        </Flex>
      </Layout>
    );
  }

  // Main content
  return (
    <Layout>
      <Flex
        direction="column"
        justify="center"
        align="center"
        p={4}
        textAlign="center"
      >
        <Box
          w="100%"
          maxW="800px"
          mb={8}
          borderRadius="lg"
          overflow="hidden"
          boxShadow="lg"
        >
          <iframe
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${location.longitude - 0.01},${location.latitude - 0.01},${location.longitude + 0.01},${location.latitude + 0.01}&layer=mapnik&marker=${location.latitude},${location.longitude}`}
            width="100%"
            height="400"
            style={{ border: 'none' }}
            allowFullScreen
            loading="lazy"
          />
        </Box>

        <Button
          onClick={() => redirectToGoogleMaps(location.latitude, location.longitude)}
          bg="green.900"
          color="white"
          size="lg"
          px={8}
          _hover={{ transform: 'scale(1.05)' }}
          transition="all 0.2s"
        >
          Find Nearby Ayurvedic Doctors
        </Button>
      </Flex>
    </Layout>
  );
};

export default NearbyDoctors;