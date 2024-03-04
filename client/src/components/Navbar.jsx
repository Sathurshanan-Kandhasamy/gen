import {
  Card,
  Container,
  Heading,
  Flex,
  Button,
  HStack,
  Link,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Card borderRadius="none">
      <Container maxW="container.xl" p="2">
        <Flex justifyContent="space-between" alignItems="center">
          {true ? (
            <>
              <Link to="/">
                <Heading as="h2" size="lg">
                  GEN
                </Heading>
              </Link>
              <HStack spacing="15px">
                <Button
                  as={Link}
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
                    <MenuItem as={Link} to="/john">
                      John-Doe <br /> @john{' '}
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem as={Link} to="/dashboard">
                      Dashboard
                    </MenuItem>
                    <MenuItem as={Link} to="/new">
                      Create Post
                    </MenuItem>
                    <MenuItem as={Link} to="/readinglist">
                      Reading List
                    </MenuItem>
                    <MenuItem as={Link} to="/settings">
                      Settings
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem as={Link} to="/logout_confirm">
                      Log Out
                    </MenuItem>
                  </MenuList>
                </Menu>
              </HStack>
            </>
          ) : (
            <>
              <Link href="/">
                <Heading as="h2" size="lg">
                  GEN
                </Heading>
              </Link>
              <HStack>
                <Button
                  as={Link}
                  to="/login"
                  colorScheme="gray"
                  variant="ghost"
                >
                  Log in
                </Button>
                <Button
                  as={Link}
                  to="/register"
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
