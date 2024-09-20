import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Text,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { FaChalkboardTeacher, FaUserFriends, FaRegHandshake } from "react-icons/fa";

const HeroSection = () => {
  const flexDirection = useBreakpointValue({ base: "column", lg: "row" });

  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // typewriter effect
  const [typeEffect] = useTypewriter({
    words: [
      "A software developer, brand expert, and digital transformation specialist. Work with me, and together, we will scale up your business or startup and improve your business processes."
    ],
    loop: true,
    typeSpeed: 100,
    delaySpeed: 50,
  });

  return (
    <Box as="section" bg="white" py={16} overflow="hidden">
      <Container maxW="container.xl" mx="auto" px={4}>
        <Box display="flex" flexDirection={flexDirection} alignItems="center">
          <Box
            flex={1}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign={{ base: "center", lg: "left" }}
            pr={{ lg: 12 }}
            mb={{ base: 8, lg: 0 }}
          >
            <Heading
              as="h1"
              className="animated-text"
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="bold"
              lineHeight="tight"
              mb={4}
            >
              Discover and unleash
              <br />
              your true potential.
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color="gray.600" fontWeight='medium' mb={8}>
              I'm Daniel Bamigbayan-
              <Text as="span" color="blue" bg="gray.100">{typeEffect}</Text>
              <Text as="span" color="blue"><Cursor /></Text>
            </Text>
            <Button
              colorScheme="blue"
              size="lg"
              rightIcon={<ArrowForwardIcon />}
              _hover={{ bg: "blue.600" }}
              alignSelf={{ base: "center", lg: "flex-start" }} 
              px={{ base: "8", lg: "10" }}
              py={{ base: "4", lg: "6" }}
            >
              Work with me
            </Button>
          </Box>
          <Box
            flex={1}
            position="relative"
            overflow="hidden"
            height={{ base: "250px", md: "350px", lg: "full" }}
          >
            <Image
              src="/banner2.jpeg"
              alt="Daniel Bamigbayan"
              objectFit="cover"
              w="full"
              h="full"
            />
          </Box>
        </Box>
      </Container>

      <Box as="section" bg="gray.900" py={16}>
        <Container maxW="container.xl" mx="auto" px={4}>
          <Heading
            as="h2"
            fontSize="4xl"
            fontFamily="serif"
            color="white"
            mb={10}
            ml={{ base: 0, lg: 4 }}
            textAlign={{ base: "center", lg: "left" }} 
          >
            Making Impact
          </Heading>

          <Slider {...settings}>
            <Box p={4}>
              <Box
                bg="gray.800"
                minH="400px"
                p={6}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                borderRadius="lg"
                boxShadow="xl"
                textAlign="left"
                color="white"
              >
                <Icon as={FaChalkboardTeacher} boxSize={10} />
                <Heading as="h3" fontSize="xl">
                  Mentorship Program
                </Heading>
                <Text fontSize="md">
                  Join our mentorship program to get expert advice on scaling
                  your business and improving processes.
                </Text>
                <Button
                  colorScheme="whiteAlpha"
                  variant="outline"
                  alignSelf="flex-end"
                  size="lg"
                  rightIcon={<ArrowForwardIcon color="white" />}
                  _hover={{ bg: "blue.600" }}
                >
                  <Text className='text-white'> Learn more</Text>
                </Button>
              </Box>
            </Box>

            <Box p={4}>
              <Box
                bg="#0066FF"
                minH="400px"
                p={6}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                borderRadius="lg"
                boxShadow="lg"
                textAlign="left"
                color="white"
              >
                <Icon as={FaUserFriends} boxSize={10} />
                <Heading as="h3" fontSize="xl">
                  Moment with Daniel B.
                </Heading>
                <Text fontSize="md">
                  Get one-on-one consultation with Daniel to learn the best
                  strategies for business growth.
                </Text>
                <Button
                  colorScheme="whiteAlpha"
                  variant="outline"
                  alignSelf="flex-end"
                  size="lg"
                  rightIcon={<ArrowForwardIcon color="white" />}
                  _hover={{ bg: "blue.600" }}
                >
                  <Text className='text-white'> Learn more</Text>
                </Button>
              </Box>
            </Box>

            <Box p={4}>
              <Box
                bg="gray.800"
                minH="400px"
                p={6}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                borderRadius="lg"
                boxShadow="lg"
                textAlign="left"
                color="white"
              >
                <Icon as={FaRegHandshake} boxSize={10} />
                <Heading as="h3" fontSize="xl">
                  Book Consultation Session
                </Heading>
                <Text fontSize="md">
                  Schedule a consultation to discuss your business challenges
                  and opportunities.
                </Text>
                <Button
                  colorScheme="whiteAlpha"
                  variant="outline"
                  alignSelf="flex-end"
                  size="lg"
                  rightIcon={<ArrowForwardIcon color="white" />}
                  _hover={{ bg: "blue.600" }}
                >
                  <Text className='text-white'> Book now</Text>
                </Button>
              </Box>
            </Box>
          </Slider>
        </Container>
      </Box>
    </Box>
  );
};

export default HeroSection;
