import { Box, Flex, Text, Stack, Link, Icon, Image,Divider, Spacer } from '@chakra-ui/react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="gray.900" color="white" p={8} mt={8} w="100%" position="relative" bottom="0">
      <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="flex-start">
        <Stack spacing={2} mb={{ base: 4, md: 0 }} textAlign={{ base: 'center', md: 'left' }}>
          <Image src="/logo.png" alt="logo" w={{ base: "28", md: "32" }} />
          <Text fontSize="4xl" fontWeight="bold">Daniel B.</Text>
          <Text>+123 031 060 0600</Text>
          <Text>info@danielb.com</Text>
        </Stack>

        <Stack spacing={2} mb={{ base: 4, md: 0 }} textAlign={{ base: 'center', md: 'left' }} mt={{ base: 4, md: 0 }}>
          <Text fontSize="xl" fontWeight="bold">Quick links</Text>
          <Stack spacing={1}>
            <Link href="#" color="gray.400" _hover={{ color: 'white' }}>Methodology</Link>
            <Link href="#" color="gray.400" _hover={{ color: 'white' }}>Startup advisory</Link>
            <Link href="#" color="gray.400" _hover={{ color: 'white' }}>Mentorship with Daniel B</Link>
            <Link href="#" color="gray.400" _hover={{ color: 'white' }}>Digital transformation</Link>
          </Stack>
        </Stack>

        <Flex direction="row" spacing={4} mt={{ base: 4, md: 0 }} alignSelf={{ base: 'center', md: 'flex-bottom' }}>
          <Box p={2} borderRadius="full" bg="white" _hover={{ bg: 'gray.600' }}>
            <Link href="#" color="gray.400" _hover={{ color: 'white' }}>
              <Icon as={FaFacebookF} />
            </Link>
          </Box>
          <Box p={2} borderRadius="full" bg="white" _hover={{ bg: 'gray.600' }}>
            <Link href="#" color="gray.400" _hover={{ color: 'white' }}>
              <Icon as={FaTwitter} />
            </Link>
          </Box>
          <Box p={2} borderRadius="full" bg="white" _hover={{ bg: 'gray.600' }}>
            <Link href="#" color="gray.400" _hover={{ color: 'white' }}>
              <Icon as={FaLinkedinIn} />
            </Link>
          </Box>
          <Box p={2} borderRadius="full" bg="white" _hover={{ bg: 'gray.600' }}>
            <Link href="#" color="gray.400" _hover={{ color: 'white' }}>
              <Icon as={FaInstagram} />
            </Link>
          </Box>
        </Flex>
      </Flex>

      {/* Divider for All Rights Reserved */}
      <Divider borderColor="gray.600" my={4} />
      <Flex>
        
      <Text alignSelf="flex-end" color="gray.500">&copy; All rights reserved</Text>
      <Spacer />
      <Text alignSelf="flex-end" color="white" fontFamily="serif">Designed By: Sage-thedev</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
