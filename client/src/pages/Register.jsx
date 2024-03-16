import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Input,
  VStack,
  FormControl,
  FormLabel,
  Button,
} from '@chakra-ui/react';

const Register = () => {
  return (
    <Card marginTop="48px" marginBottom="24px" boxShadow="xs">
      <CardHeader>
        <Heading size="md">Create your account</Heading>
      </CardHeader>
      <CardBody>
        <form>
          <VStack spacing="5">
            <FormControl>
              <FormLabel>Profile image</FormLabel>
              <Input type="file" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Username</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password Confirmation</FormLabel>
              <Input type="password" />
            </FormControl>
          </VStack>
          <Button type="submit" variant="solid" marginTop="20px">
            Sign up
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};

export default Register;
