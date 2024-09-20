import { Box, Flex, Heading, Text, FormControl, FormLabel, Input, Textarea, Checkbox, Button, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { motion } from 'framer-motion';

// Motion component from framer-motion
const MotionBox = motion(Box);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    robot: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const toast = useToast(); // Use Chakra's toast for notifications

  // Handle form input changes
  const handleOnChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message, robot } = formData;

    // Validation for empty fields
    if (!name || !email || !subject || !message) {
      toast({
        title: "All fields are required",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Validation for robot checkbox
    if (!robot) {
      toast({
        title: "Please confirm you are not a robot",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setIsSubmitted(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      // Reset form fields after submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        robot: false,
      });

      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <Flex   direction={{ base: 'column', md: 'row' }} bg=" bg-gray-300" shadow="lg" rounded="lg" p={8}>
      {/* Left Section */}
      <Box as={'section'} bg="blue.600" shadow="md" color="white" p={8} w={{ base: '100%', md: '40%' }}>
        <Flex flexDir="column" justifyContent="center" alignItems="center" height="100%">
          <Heading as="h2" size="xl" mb={4} lineHeight="29.53px" letterSpacing="1px" fontFamily="serif">
            Take a bold step <br /> into the next level.
          </Heading>
          <Text fontSize="lg" lineHeight="29.53px" letterSpacing="0.8px" textAlign="center">
            Do you feel your company or business is in need of any one of my services? Waste no time contacting me today.
          </Text>
        </Flex>
      </Box>

      {/* Right Section - Slide Down Form */}
      <MotionBox 
        initial={{ opacity: 0, y: -50 }}  // Initial slide-down animation state
        animate={{ opacity: 1, y: 0 }}    // Final animation state
        transition={{ duration: 0.5, ease: 'easeInOut' }}  // Transition settings
        p={8} 
        w={{ base: '100%', md: '60%' }} 
        bg="gainsboro.300"  
        shadow="md"
      >
        <Heading as="h2" size="lg" mb={4}>Get in touch!</Heading>
        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection={{ base: 'column', md: 'row' }} gap={4}>
            <FormControl shadow="sm" mb={4} flex="1">
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input 
                type="text" 
                placeholder="Name" 
                name="name" 
                value={formData.name} 
                onChange={handleOnChange} 
              />
            </FormControl>
            <FormControl shadow="sm" mb={4} flex="1">
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input 
                type="email" 
                placeholder="Email" 
                name="email" 
                value={formData.email} 
                onChange={handleOnChange} 
              />
            </FormControl>
          </Box>

          <FormControl shadow="sm" mb={4}>
            <FormLabel htmlFor="subject">Subject</FormLabel>
            <Input 
              id="subject" 
              type="text" 
              placeholder="Subject" 
              name="subject" 
              value={formData.subject} 
              onChange={handleOnChange} 
            />
          </FormControl>

          <FormControl shadow="sm" mb={4}>
            <FormLabel htmlFor="message">Message</FormLabel>
            <Textarea 
              id="message" 
              placeholder="Message" 
              name="message" 
              value={formData.message} 
              onChange={handleOnChange} 
            />
          </FormControl>

         
         <FormControl shadow="sm" mb={4} display="flex" alignItems="center" px={4} py={1} bg='gray.200'>
            <Checkbox 
              type="checkbox" 
              name="robot" 
              isChecked={formData.robot} 
              onChange={handleOnChange}
              bg={'white'}
            />
            <FormLabel htmlFor="robot" ml={2}>I'm not a robot</FormLabel>
          </FormControl>

          <Box display="flex" justifyContent="center">
            <Button 
              colorScheme="blue" 
              px={4} 
              py={4} 
              w="full" 
              type="submit" 
              isLoading={isSubmitted}
            >
              Send message
            </Button>
          </Box>
        </form>
      </MotionBox>
    </Flex>
  );
};

export default ContactSection;
