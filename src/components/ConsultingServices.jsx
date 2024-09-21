import React from 'react';
import { Box, Flex, Text, Heading, Divider } from '@chakra-ui/react';

function ConsultingServices() {
  return (
    <Box maxW="1200px" mx="auto" p={5}>
      <Heading
        as="h2"
        size="lg"
        mb={3}
        alignSelf="flex-start"
        lineHeight="1.5" 
        letterSpacing="0.05em" 
        fontFamily="serif"
      >
        My Consulting Services
      </Heading>
      <Flex 
        direction={{ base: 'column', md: 'row' }} 
        wrap="wrap" 
        justify="space-between"
      >
        {/* Service 1 */}
        <Flex
          flex="1 1 calc(33.33% - 1rem)"
          p={4}
          direction="column"
          textAlign="center"
          mb={4}
        >
          <Text fontSize="2xl" fontWeight="bold" color="blue.500" lineHeight="1.2" letterSpacing="0.05em">01</Text>
          <Heading as="h3" size="md" my={2} lineHeight="1.3" letterSpacing="0.02em">
            Startup Advisory
          </Heading>
          <Divider borderColor="gray.500" mb={5} mt={3} />
          <Text lineHeight="1.6" letterSpacing="0.01em">
            Get expert guidance on launching and growing your business, from developing a solid foundation to creating a business plan and ongoing support.
          </Text>
        </Flex>

        {/* Service 2 */}
        <Flex
          flex="1 1 calc(33.33% - 1rem)"
          p={4}
          direction="column"
          textAlign="center"
          mb={4}
        >
          <Text fontSize="2xl" fontWeight="bold" color="blue.500" lineHeight="1.2" letterSpacing="0.05em">02</Text>
          <Heading as="h3" size="md" my={2} lineHeight="1.3" letterSpacing="0.02em">
            Business Analysis
          </Heading>
          <Divider borderColor="gray.500" mb={5} mt={3} />
          <Text lineHeight="1.6" letterSpacing="0.01em">
            Make informed decisions about your business with comprehensive analysis, identifying areas for improvement and growth, and providing recommendations.
          </Text>
        </Flex>

        {/* Service 3 */}
        <Flex
          flex="1 1 calc(33.33% - 1rem)"
          p={4}
          direction="column"
          textAlign="center"
          mb={4}
        >
          <Text fontSize="2xl" fontWeight="bold" color="blue.500" lineHeight="1.2" letterSpacing="0.05em">03</Text>
          <Heading as="h3" size="md" my={2} lineHeight="1.3" letterSpacing="0.02em">
            Digital Transformation
          </Heading>
          <Divider borderColor="gray.500" mb={5} mt={3} />
          <Text lineHeight="1.6" letterSpacing="0.01em">
            Optimize your workflows and streamline your operations for maximum efficiency and productivity, with in-depth analysis, process mapping, and implementation of improvements.
          </Text>
        </Flex>

        {/* Service 4 */}
        <Flex
          flex="1 1 calc(33.33% - 1rem)"
          p={4}
          direction="column"
          textAlign="center"
          mb={4}
        >
          <Text fontSize="2xl" fontWeight="bold" color="blue.500" lineHeight="1.2" letterSpacing="0.05em">04</Text>
          <Heading as="h3" size="md" my={2} lineHeight="1.3" letterSpacing="0.02em">
            Bespoke Software Development
          </Heading>
          <Divider borderColor="gray.500" mb={5} mt={3} />
          <Text lineHeight="1.6" letterSpacing="0.01em">
            Get customized software solutions tailored to your unique business needs, with expert development teams, project management, and ongoing support.
          </Text>
        </Flex>

        {/* Service 5 */}
        <Flex
          flex="1 1 calc(33.33% - 1rem)"
          p={4}
          direction="column"
          textAlign="center"
          mb={4}
        >
          <Text fontSize="2xl" fontWeight="bold" color="blue.500" lineHeight="1.2" letterSpacing="0.05em">05</Text>
          <Heading as="h3" size="md" my={2} lineHeight="1.3" letterSpacing="0.02em">
            Social Media Management
          </Heading>
          <Divider borderColor="gray.500" mb={5} mt={3} />
          <Text lineHeight="1.6" letterSpacing="0.01em">
            Grow your online presence and engage with your audience through engaging content, developing effective social media strategies, and ongoing support.
          </Text>
        </Flex>

        {/* Service 6 */}
        <Flex
          flex="1 1 calc(33.33% - 1rem)"
          p={4}
          direction="column"
          textAlign="center"
          mb={4}
        >
          <Text fontSize="2xl" fontWeight="bold" color="blue.500" lineHeight="1.2" letterSpacing="0.05em">06</Text>
          <Heading as="h3" size="md" my={2} lineHeight="1.3" letterSpacing="0.02em">
            Branding
          </Heading>
          <Divider borderColor="gray.500" mb={5} mt={3} />
          <Text lineHeight="1.6" letterSpacing="0.01em">
            Create a strong brand identity and establish your business as an industry leader with my branding services, including brand messaging, visual identity, and marketing materials.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export default ConsultingServices;
