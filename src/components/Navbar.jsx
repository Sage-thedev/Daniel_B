import {
  Box,
  Flex,
  Image,
  Button,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <Box
      as="nav"
      bg="white"
      height="80px"
      px={{ base: "16px", md: "40px", lg: "60px" }}
      shadow="md"
    >
      <Flex justify="space-between" align="center" height="100%">
        {/* Logo */}
        <Box>
          <Image src="/logo.png" alt="logo" height="50px" />
        </Box>

        {/* Desktop Nav Links */}
        <Flex
          gap={{ base: "15px", md: "25px" }}
          align="center"
          display={{
            base: "none",
            md: "flex",
          }} /* Hides links on small screens */
        >
          <NavLink
            to="/"
            style={({ isActive }) => ({
              fontSize: "16px",
              color: isActive ? "blue" : "gray",
              textDecoration: "none",
              borderBottom: isActive ? "2px solid blue" : "none",
            })}
            className="hover:text-blue-500 hover:border-b-2 hover:border-blue-500"
          >
            Home
          </NavLink>
          <NavLink
            to="/bio"
            style={({ isActive }) => ({
              fontSize: "16px",
              color: isActive ? "blue" : "gray",
              textDecoration: "none",
              borderBottom: isActive ? "2px solid blue" : "none",
            })}
            className="hover:text-blue-500 hover:border-b-2 hover:border-blue-500"
          >
            My bio
          </NavLink>
          <NavLink
            to="/impact"
            style={({ isActive }) => ({
              fontSize: "16px",
              color: isActive ? "blue" : "gray",
              textDecoration: "none",
              borderBottom: isActive ? "2px solid blue" : "none",
            })}
            className="hover:text-blue-500 hover:border-b-2 hover:border-blue-500"
          >
            Impact
          </NavLink>
          <NavLink
            to="/blog"
            style={({ isActive }) => ({
              fontSize: "16px",
              color: isActive ? "blue" : "gray",
              textDecoration: "none",
              borderBottom: isActive ? "2px solid blue" : "none",
            })}
            className="hover:text-blue-500 hover:border-b-2 hover:border-blue-500"
          >
            Blog
          </NavLink>
          <Button
            display={{
              base: "none",
              md: "block",
            }} /* Hides button on small screens */
            colorScheme="blue"
            size="md"
          >
            Work with me
          </Button>
        </Flex>

        {/* Hamburger Icon for Mobile Menu */}
        <IconButton
          aria-label="Open Menu"
          icon={<HamburgerIcon />}
          display={{ base: "block", md: "none" }}
          onClick={onOpen}
          variant="outline"
          size={'lg'}
          colorScheme="blue"
        />

        {/* Drawer for Mobile Menu */}
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                <Box>
                  <Image src="/logo.png" alt="logo" height="50px" />
                </Box>
              </DrawerHeader>
              <DrawerBody>
                <VStack spacing={4}>
                  <NavLink
                    to="/"
                    onClick={onClose}
                    style={({ isActive }) => ({
                      fontSize: "16px",
                      color: isActive ? "blue" : "gray",
                      textDecoration: "none",
                      borderBottom: isActive ? "2px solid blue" : "none",
                    })}
                    className="hover:text-blue-500 hover:border-b-2 hover:border-blue-500"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/bio"
                    onClick={onClose}
                    style={({ isActive }) => ({
                      fontSize: "16px",
                      color: isActive ? "blue" : "gray",
                      textDecoration: "none",
                      borderBottom: isActive ? "2px solid blue" : "none",
                    })}
                    className="hover:text-blue-500 hover:border-b-2 hover:border-blue-500"
                  >
                    My bio
                  </NavLink>
                  <NavLink
                    to="/impact"
                    onClick={onClose}
                    style={({ isActive }) => ({
                      fontSize: "16px",
                      color: isActive ? "blue" : "gray",
                      textDecoration: "none",
                      borderBottom: isActive ? "2px solid blue" : "none",
                    })}
                    className="hover:text-blue-500 hover:border-b-2 hover:border-blue-500"
                  >
                    Impact
                  </NavLink>
                  <NavLink
                    to="/blog"
                    onClick={onClose}
                    style={({ isActive }) => ({
                      fontSize: "16px",
                      color: isActive ? "blue" : "gray",
                      textDecoration: "none",
                      borderBottom: isActive ? "2px solid blue" : "none",
                    })}
                    className="hover:text-blue-500 hover:border-b-2 hover:border-blue-500"
                  >
                    Blog
                  </NavLink>
                  <Button colorScheme="blue" onClick={onClose}>
                    Work with me
                  </Button>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Flex>
    </Box>
  );
}

export default Navbar;
