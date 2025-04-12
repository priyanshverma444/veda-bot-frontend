import {
  Container,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  VStack,
  Flex
} from '@chakra-ui/react';
import bgimg from "../../../src/assets/img/veda-bot-bg.png";
import Layout from "../../components/layout/Layout";

const Panchakarma = () => {
  return (
    <Layout>
      <Container
        maxW="800px"
        p={5}
        bg="#f0fced"
        borderRadius="10px"
        boxShadow="0 0 10px rgba(0,0,0,0.1)"
        maxH="85vh" // Limit the height of the container
        overflowY="auto" // Allow vertical scrolling if content exceeds height
      >
        <VStack spacing={5}>
          <Heading as="h2" color="green.900" fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif">
            Panchakarma: The Ayurvedic Detox Process 🌿✨
          </Heading>
          <Text color="green.900">
            Welcome to our comprehensive guide on <Text as="span" color="red.500" fontWeight="bold">Panchakarma</Text>, the Ayurvedic detox process. Panchakarma is a cornerstone of Ayurvedic medicine, known for its deep cleansing and rejuvenating effects. This ancient therapy helps in eliminating toxins from the body, balancing the doshas, and restoring overall health. Let's dive into the benefits and steps involved in Panchakarma treatment.
          </Text>

          <Heading as="h2" size="lg" color="green.900">Overview of Panchakarma 🌟</Heading>
          <Text color="green.900">
            Panchakarma, which translates to "five actions" in Sanskrit, is a holistic detoxification and purification process designed to remove toxins (ama) from the body and mind. It involves five primary procedures that cleanse different systems of the body, ensuring a thorough detox and rejuvenation.
          </Text>

          <Heading as="h3" size="md" color="green.900">Benefits of Panchakarma 🌿</Heading>
          <UnorderedList>
            <ListItem color="green.900"><strong>Deep Detoxification:</strong> Panchakarma removes accumulated toxins, promoting overall health and vitality.</ListItem>
            <ListItem color="green.900"><strong>Balancing Doshas:</strong> It helps in balancing the three doshas (Vata, Pitta, and Kapha), leading to optimal health.</ListItem>
            <ListItem color="green.900"><strong>Improved Digestion:</strong> The detox process enhances digestive function and nutrient absorption.</ListItem>
            <ListItem color="green.900"><strong>Enhanced Immunity:</strong> By cleansing the body, Panchakarma strengthens the immune system.</ListItem>
            <ListItem color="green.900"><strong>Stress Relief:</strong> It promotes mental clarity, reduces stress, and enhances emotional well-being.</ListItem>
            <ListItem color="green.900"><strong>Rejuvenation:</strong> Panchakarma revitalizes the body, improves energy levels, and slows down the aging process.</ListItem>
          </UnorderedList>

          <Heading as="h2" size="lg" color="green.900">Steps Involved in Panchakarma Treatment 🌼</Heading>
          <Text color="green.900">
            Panchakarma treatment is a multi-step process tailored to an individual's unique constitution and health needs. The treatment typically involves three phases: Purva Karma (preparatory phase), Pradhana Karma (main detoxification phase), and Paschat Karma (post-treatment phase).
          </Text>

          <Heading as="h3" size="md" color="green.900">1. Purva Karma (Preparatory Phase) 🌿</Heading>
          <Text color="green.900">
            The preparatory phase aims to prepare the body for detoxification. It includes the following steps:
          </Text>
          <UnorderedList>
            <ListItem color="green.900"><strong>Snehan (Oleation):</strong> This involves internal and external application of medicated oils to loosen toxins and prepare the body for detoxification. Internal oleation includes consuming ghee or oils, while external oleation involves therapeutic oil massages.</ListItem>
            <ListItem color="green.900"><strong>Swedana (Sweating):</strong> Sweating therapies, such as steam baths, help to open up the channels and facilitate the movement of toxins towards the digestive tract for elimination.</ListItem>
          </UnorderedList>

          <Heading as="h3" size="md" color="green.900">2. Pradhana Karma (Main Detoxification Phase) 🌟</Heading>
          <Text color="green.900">
            The main detoxification phase consists of five primary procedures, each targeting specific areas of the body:
          </Text>
          <UnorderedList>
            <ListItem color="green.900"><strong>Vamana (Therapeutic Emesis):</strong> Induced vomiting to cleanse the stomach and respiratory tract, primarily recommended for Kapha imbalances.</ListItem>
            <ListItem color="green.900"><strong>Virechana (Purgation):</strong> Therapeutic laxative treatment to cleanse the intestines, recommended for Pitta imbalances.</ListItem>
            <ListItem color="green.900"><strong>Basti (Enema Therapy):</strong> Medicated enemas to cleanse the colon, beneficial for Vata imbalances. There are two types: Anuvasana Basti (oil enema) and Niruha Basti (herbal decoction enema).</ListItem>
            <ListItem color="green.900"><strong>Nasya (Nasal Administration):</strong> Administration of medicated oils or powders through the nostrils to cleanse the nasal passages and sinuses, effective for head and neck issues.</ListItem>
            <ListItem color="green.900"><strong>Raktamokshana (Bloodletting):</strong> Controlled removal of small amounts of blood to detoxify the blood and treat blood-related disorders. This step is less commonly practiced and used selectively.</ListItem>
          </UnorderedList>

          <Heading as="h3" size="md" color="green.900">3. Paschat Karma (Post-Treatment Phase) 🌿</Heading>
          <Text color="green.900">
            The post-treatment phase focuses on rejuvenation and restoration. It includes dietary guidelines, lifestyle recommendations, and rejuvenative therapies to support the body's healing and maintain the benefits of detoxification.
          </Text>
          <UnorderedList>
            <ListItem color="green.900"><strong>Dietary Guidelines:</strong> Follow a light, easy-to-digest diet that supports digestion and assimilation. Avoid heavy, oily, and processed foods.</ListItem>
            <ListItem color="green.900"><strong>Herbal Supplements:</strong> Take prescribed herbal supplements to support rejuvenation and balance.</ListItem>
            <ListItem color="green.900"><strong>Lifestyle Practices:</strong> Incorporate daily routines such as yoga, meditation, and self-massage to maintain balance and well-being.</ListItem>
          </UnorderedList>

          <Heading as="h2" size="lg" color="green.900">Conclusion 🌿✨</Heading>
          <Text color="green.900">
            Panchakarma is a profound Ayurvedic detoxification process that offers numerous health benefits. By undergoing Panchakarma, you can cleanse your body of toxins, balance your doshas, and rejuvenate your mind and spirit. Embrace the Ayurvedic way of detox and experience the transformative power of Panchakarma!
          </Text>

          <Text color="green.900">
            Are you ready to embark on your Panchakarma journey? Consult with a qualified Ayurvedic practitioner to personalize your detox plan and achieve optimal health and well-being. 🌟
          </Text>
        </VStack>
      </Container>
    </Layout>
  );
};

export default Panchakarma;