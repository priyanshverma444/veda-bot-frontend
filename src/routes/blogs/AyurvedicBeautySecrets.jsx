import {
    Container,
    Heading,
    Text,
    UnorderedList,
    ListItem,
    VStack,
  } from '@chakra-ui/react';
import Layout from '../../components/layout/Layout';
  
  const AyurvedicBeautySecrets = () => {
    return (
      <Layout>
        <Container
          maxW="800px"
          p={5}
          bg="#f0fced"
          borderRadius="10px"
          boxShadow="0 0 10px rgba(0,0,0,0.1)"
          maxH="85vh"
          overflowY="auto"
        >
          <VStack spacing={5}>
            <Heading as="h2" color="green.900" fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif">
              Ayurvedic Beauty Secrets: Natural Ways to Glow 🌿✨
            </Heading>
  
            <Text color="green.900">
              Welcome to our comprehensive guide on <Text as="span" color="red.500" fontWeight="bold">Ayurvedic Beauty Secrets</Text>. 
              Ayurveda, the ancient science of life, offers a treasure trove of natural remedies and treatments for achieving radiant skin and healthy hair. 
              In this blog, we will explore Ayurvedic tips and treatments for beauty, as well as DIY beauty recipes using natural ingredients. 
              Let's dive into the world of Ayurvedic beauty and discover the secrets to a natural glow.
            </Text>
  
            <Heading as="h2" size="lg" color="green.900">Ayurvedic Tips for Healthy Skin 🌟</Heading>
  
            <Heading as="h3" size="md" color="green.900">1. Abhyanga (Self-Massage) 🌿</Heading>
            <Text color="green.900">
              Abhyanga is a daily self-massage practice using warm oil. It nourishes the skin, improves blood circulation, and promotes detoxification. 
              Use oils such as sesame, coconut, or almond oil based on your dosha (body constitution).
            </Text>
            <UnorderedList>
              <ListItem color="green.900"><strong>Vata Dosha:</strong> Use warm sesame or almond oil.</ListItem>
              <ListItem color="green.900"><strong>Pitta Dosha:</strong> Use cooling oils like coconut or sunflower oil.</ListItem>
              <ListItem color="green.900"><strong>Kapha Dosha:</strong> Use warming oils like mustard or sesame oil.</ListItem>
            </UnorderedList>
  
            <Heading as="h3" size="md" color="green.900">2. Ubtan (Herbal Scrub) 🌿</Heading>
            <Text color="green.900">
              Ubtan is a traditional Ayurvedic herbal scrub used to exfoliate and cleanse the skin. It helps in removing dead skin cells, improving complexion, and imparting a natural glow.
            </Text>
            <UnorderedList>
              <ListItem color="green.900"><strong>Ingredients:</strong> Mix chickpea flour, turmeric, sandalwood powder, and rose water to form a paste.</ListItem>
              <ListItem color="green.900"><strong>Application:</strong> Apply the paste to your face and body, gently scrub in circular motions, and rinse with lukewarm water.</ListItem>
            </UnorderedList>
  
            <Heading as="h3" size="md" color="green.900">3. Face Masks 🌸</Heading>
            <Text color="green.900">
              Ayurveda recommends using natural ingredients for face masks to nourish and rejuvenate the skin. Here are a few DIY face mask recipes:
            </Text>
            <UnorderedList>
              <ListItem color="green.900"><strong>For Glowing Skin:</strong> Mix 1 tablespoon of honey, 1 tablespoon of yogurt, and a pinch of turmeric. Apply to your face, leave for 15 minutes, and rinse.</ListItem>
              <ListItem color="green.900"><strong>For Acne-Prone Skin:</strong> Mix 1 tablespoon of neem powder, 1 tablespoon of aloe vera gel, and a few drops of tea tree oil. Apply to your face, leave for 15 minutes, and rinse.</ListItem>
              <ListItem color="green.900"><strong>For Dry Skin:</strong> Mix 1 mashed avocado, 1 tablespoon of honey, and a few drops of olive oil. Apply to your face, leave for 15 minutes, and rinse.</ListItem>
            </UnorderedList>
  
            <Heading as="h2" size="lg" color="green.900">Ayurvedic Tips for Healthy Hair 🌿</Heading>
  
            <Heading as="h3" size="md" color="green.900">1. Scalp Massage 🌿</Heading>
            <Text color="green.900">
              Regular scalp massages with Ayurvedic oils can strengthen hair roots, promote hair growth, and improve blood circulation to the scalp. 
              Use oils such as bhringraj oil, amla oil, or coconut oil based on your dosha.
            </Text>
            <UnorderedList>
              <ListItem color="green.900"><strong>Vata Dosha:</strong> Use warm bhringraj oil or sesame oil.</ListItem>
              <ListItem color="green.900"><strong>Pitta Dosha:</strong> Use cooling oils like amla oil or coconut oil.</ListItem>
              <ListItem color="green.900"><strong>Kapha Dosha:</strong> Use stimulating oils like rosemary oil mixed with a base oil.</ListItem>
            </UnorderedList>
  
            <Heading as="h3" size="md" color="green.900">2. Herbal Hair Masks 🌿</Heading>
            <Text color="green.900">
              Ayurvedic herbal hair masks nourish the scalp, condition the hair, and prevent hair fall. Here are a few DIY hair mask recipes:
            </Text>
            <UnorderedList>
              <ListItem color="green.900"><strong>For Hair Growth:</strong> Mix 2 tablespoons of amla powder, 1 tablespoon of bhringraj powder, and enough water to form a paste. Apply to your scalp and hair, leave for 30 minutes, and rinse.</ListItem>
              <ListItem color="green.900"><strong>For Dandruff:</strong> Mix 2 tablespoons of neem powder, 1 tablespoon of yogurt, and a few drops of tea tree oil. Apply to your scalp, leave for 30 minutes, and rinse.</ListItem>
              <ListItem color="green.900"><strong>For Conditioning:</strong> Mix 1 mashed banana, 1 tablespoon of honey, and a few drops of almond oil. Apply to your hair, leave for 30 minutes, and rinse.</ListItem>
            </UnorderedList>
  
            <Heading as="h3" size="md" color="green.900">3. Diet and Lifestyle 🌿</Heading>
            <Text color="green.900">
              Healthy skin and hair start from within. Follow these Ayurvedic dietary and lifestyle tips for glowing skin and healthy hair:
            </Text>
            <UnorderedList>
              <ListItem color="green.900"><strong>Hydration:</strong> Drink plenty of water and herbal teas to keep your skin and hair hydrated.</ListItem>
              <ListItem color="green.900"><strong>Balanced Diet:</strong> Eat a diet rich in fresh fruits, vegetables, whole grains, and healthy fats. Avoid processed foods, excessive sugar, and caffeine.</ListItem>
              <ListItem color="green.900"><strong>Stress Management:</strong> Practice yoga, meditation, and deep breathing exercises to manage stress, which can impact skin and hair health.</ListItem>
              <ListItem color="green.900"><strong>Sleep:</strong> Ensure you get adequate sleep to allow your body to repair and rejuvenate.</ListItem>
            </UnorderedList>
  
            <Heading as="h2" size="lg" color="green.900">Conclusion 🌿✨</Heading>
            <Text color="green.900">
              By incorporating Ayurvedic beauty secrets into your daily routine, you can achieve radiant skin and healthy hair naturally. 
              Ayurveda emphasizes the use of natural ingredients and holistic practices to enhance your beauty from within.
            </Text>
  
            <Text color="green.900">
              Embrace these Ayurvedic tips and DIY beauty recipes to experience the transformative power of natural beauty. 
              Let your skin and hair glow with health and vitality! 🌟
            </Text>
          </VStack>
        </Container>
      </Layout>
    );
  };
  
  export default AyurvedicBeautySecrets;