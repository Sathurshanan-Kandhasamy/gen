import {
  Card,
  Container,
  Heading,
  Flex,
  Button,
  HStack,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Card borderRadius="none">
      <Container maxWidth="container.xl" padding="2">
        <Flex justifyContent="space-between" alignItems="center">
          {false ? (
            <>
              <ChakraLink as={ReactRouterLink} to="/">
                <Heading as="h2" size="lg">
                  GEN
                </Heading>
              </ChakraLink>
              <HStack spacing="15">
                <Button
                  as={ReactRouterLink}
                  to="/new"
                  colorScheme="gray"
                  variant="outline"
                >
                  Create Post
                </Button>
                <Menu>
                  <MenuButton>
                    <Avatar size="sm" name="John Doe" src="" />
                  </MenuButton>
                  <MenuList>
                    <MenuItem as={ReactRouterLink} to="/john">
                      John-Doe <br /> @john{' '}
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem as={ReactRouterLink} to="/dashboard">
                      Dashboard
                    </MenuItem>
                    <MenuItem as={ReactRouterLink} to="/new">
                      Create Post
                    </MenuItem>
                    <MenuItem as={ReactRouterLink} to="/readinglist">
                      Reading List
                    </MenuItem>
                    <MenuItem as={ReactRouterLink} to="/settings">
                      Settings
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem as={ReactRouterLink} to="/logout_confirm">
                      Log Out
                    </MenuItem>
                  </MenuList>
                </Menu>
              </HStack>
            </>
          ) : (
            <>
              <ChakraLink as={ReactRouterLink} to="/">
                <Heading as="h2" size="lg">
                  GEN
                </Heading>
              </ChakraLink>
              <HStack>
                <Button
                  as={ReactRouterLink}
                  to="/enter"
                  colorScheme="gray"
                  variant="ghost"
                >
                  Log in
                </Button>
                <Button
                  as={ReactRouterLink}
                  to="/sign_up"
                  colorScheme="gray"
                  variant="outline"
                >
                  Create account
                </Button>
              </HStack>
            </>
          )}
        </Flex>
      </Container>
    </Card>
  );
};

export default Navbar;
