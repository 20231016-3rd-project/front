import styled from 'styled-components';

const Box = styled.div`
  margin-top: 20px;
  padding: 20px;
  border-radius: 8px;
  max-width: 350px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

const Heading = styled.h2`
  margin: 0;
  color: #333;
  font-size: 22px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Paragraph = styled.p`
  color: #777;
  font-size: 16px;
`;

const Button = styled.button`
  margin-top: 15px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007BFF;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Subscrible = () => {
  return (
    <Box>
      <Heading>Subscribe to Premium</Heading>
      <Paragraph>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</Paragraph>
      <Button>Subscribe Now</Button>
    </Box>
  );
}

export default Subscrible;