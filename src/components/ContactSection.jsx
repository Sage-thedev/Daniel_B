import { Box, Flex, Heading, Text, FormControl, FormLabel, Input, Textarea, Button, useToast } from '@chakra-ui/react';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';  // Import reCAPTCHA

// Motion component from framer-motion
const MotionBox = motion(Box);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [captchaToken, setCaptchaToken] = useState(null); // State to store reCAPTCHA token
  const [isSubmitted, setIsSubmitted] = useState(false);
  const toast = useToast(); // Use Chakra's toast for notifications
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  // reCAPTCHA callback
  const onCaptchaChange = (token) => {
    setCaptchaToken(token);  // Store token in state
  };

  // Handle form input changes
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

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

    // Validation for reCAPTCHA
    if (!captchaToken) {
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
      });

      setCaptchaToken(null);  // Reset CAPTCHA token
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <Flex direction={{ base: 'column', md: 'row' }} bg=" bg-gray-300" shadow="lg" rounded="lg" p={8}>
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
        ref={sectionRef}
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
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

          {/* reCAPTCHA */}
          <ReCAPTCHA
            sitekey="6LclMEsqAAAAABBB2jX2R37xxW5BT_ks76rnLFyE"
            onChange={onCaptchaChange}
          />

          <Box display="flex" justifyContent="center" mt={4}>
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
