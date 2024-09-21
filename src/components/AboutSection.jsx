import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import { ArrowForwardIcon } from "@chakra-ui/icons";

// Motion components for animation
const MotionBox = motion(Box);
const MotionText = motion(Text);

function AboutSection() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top, bottom } = sectionRef.current.getBoundingClientRect();
        const isVisible = top < window.innerHeight && bottom >= 0; // Visibility condition
        setIsInView(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup listener
  }, []);

  return (
    <MotionBox
      as={"section"}
      className="w-full h-full bg-gray-100 overflow-hidden px-8 py-8 flex flex-col"
      ref={sectionRef} // Attach ref to the section
      initial={{ opacity: 0, y: 50 }} // Initial state: hidden and shifted down
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
      transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth animation
    >
      {/* Left-aligned Heading */}
      <Flex justify="flex-start" mb={8}>
        <Heading
          as="h2"
          fontWeight="bold"
          fontFamily={"serif"}
          px={12}
          fontSize={{ base: "2xl", md: "6xl" }}
          textAlign="left"
          color="stone.900"
        >
          About Daniel Bamigbayan
        </Heading>
      </Flex>

      {/* Image and Text Section */}
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={8}
        justify={"center"}
        align="center"
      >
        {/* Image Box with Overlay */}
        <MotionBox
          w={{ base: "100%", md: "40%" }}
          position="relative"
          minH="300px"
          initial={{ opacity: 0 }} // Image initial state: hidden
          animate={isInView ? { opacity: 1 } : {}} // Animate when in view
          transition={{ duration: 1 }}
        >
          <Image src="section_img.png" w="100%" h="100%" objectFit="cover" />
          {/* Overlay Box */}
          <Box
            bg="gray.300"
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            opacity={0.5}
          />
        </MotionBox>

        {/* Text Box */}
        <MotionBox
          w={{ base: "100%", md: "50%" }}
          color="stone.800"
          minH="550px"
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          className="animated-text"
          initial={{ opacity: 0, y: 20 }} // Initial state: hidden and shifted down
          animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
          transition={{ duration: 1 }}
        >
          <MotionText
            fontSize="lg"
            fontWeight={"medium"}
            lineHeight="40px"
            letterSpacing="wide"
          >
            Daniel is a Technology and Business Professional with keen interest
            in aiding the actualisation of corporate goals through business
            process optimization and seamless automation. With experience in
            Business analysis, Automation strategy formulation, product
            development, product management, and driving cost saving through
            process improvement initiatives.
            <br />
            Daniel is passionate about impact through innovation. He is a
            Director at softplex solutions, a Software Company and currently CEO
            at D-pia Innovations, a Social Enterprise that seeks to drive
            inclusive ICT skill acquisition and solve social and business
            problems with technology through <br /> collaboration
          </MotionText>
          <Box alignSelf={"flex-start"} mt={"1.3rem"}>
            <Button
              variant={"outline"}
              size="lg"
              rightIcon={<ArrowForwardIcon color={"blue.500"} size="lg" />}
              _hover={{ bg: "blue.600" }}
              className="w-full px-4 py-8 border-4"
            >
              <Text className="text-blue-400 text-xl">Read my bio</Text>
            </Button>
          </Box>
        </MotionBox>
      </Flex>
    </MotionBox>
  );
}

export default AboutSection;
