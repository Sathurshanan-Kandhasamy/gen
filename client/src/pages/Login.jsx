import {
  Card,
  CardHeader,
  Heading,
  Center,
  CardBody,
  Input,
  VStack,
  FormControl,
  FormLabel,
  Button,
  Divider,
  CardFooter,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

const Login = () => {
  return (
    <Card mt={20} boxShadow="none">
      <CardHeader>
        <Center>
          <Heading size="lg">Join the GEN Community</Heading>
        </Center>
      </CardHeader>
      <CardBody>
        <form>
          <VStack spacing={5}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Button type="submit" width="100%" variant="solid">
              Log in
            </Button>
          </VStack>
        </form>
      </CardBody>
      <Divider color="lightgray" />
      <CardFooter>
        <Center width="100%">
          <Text>
            New to GEN Community?{' '}
            <ChakraLink as={ReactRouterLink} to="/register" color="blue">
              Create account.
            </ChakraLink>
          </Text>
        </Center>
      </CardFooter>
    </Card>
  );
};

export default Login;
