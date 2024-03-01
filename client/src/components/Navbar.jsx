import {
  Card,
  Container,
  Heading,
  Flex,
  Button,
  HStack,
  Link,
} from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Card>
      <Container maxW="container.xl" p="2">
        <Flex justifyContent="space-between" alignItems="center">
          <Link href="/">
            <Heading as="h2" size="lg">
              GEN
            </Heading>
          </Link>
          <HStack>
            <Link href="/login">
              <Button colorScheme="gray" variant="ghost">
                Log in
              </Button>
            </Link>
            <Link href="/register">
              <Button colorScheme="gray" variant="outline">
                Create account
              </Button>
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Card>
  );
};

export default Navbar;
