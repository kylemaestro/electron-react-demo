import './App.css';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Avatar, Badge, Box, Button, ChakraProvider, Flex, Icon,
  ThemeConfig, Text, extendTheme, useColorMode, Center, ButtonGroup,
  Card, CardBody, CardFooter, Divider, Heading, Image, Stack, HStack } from '@chakra-ui/react';
import kyleIcon from '../../assets/duck.svg';
import { useEffect, useState } from 'react';
import redditThumb from '../../assets/project-images/archiver.png';
import chickensThumb from '../../assets/project-images/chickens-preview.png';
import codefolioThumb from '../../assets/project-images/codefolio.png';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { BsGithub, BsSteam } from 'react-icons/bs';
import { BiSolidBookBookmark } from 'react-icons/bi';

const buttonTransitionSpeed = ".1s"

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

export const customTheme = extendTheme({ config });

function SplashScreen() {
  // The built in theme config for Chakra UI is currently broken.
  // We'll have to change it manually for now...
  // See https://github.com/chakra-ui/chakra-ui/discussions/5051
  localStorage.setItem('chakra-ui-color-mode', 'dark');

  const [hasButtonBeenClicked, setHasButtonBeenClicked] = useState(false);
  const [currentScreen, setCurrentScreen] = useState("index");
  const [hasContentBeenDisplayed, setHasContentBeenDisplayed] = useState<null | boolean>(null);

  useEffect(() => {
    if (hasContentBeenDisplayed === false) {
      const timer = setTimeout(() => {
        setHasContentBeenDisplayed(true);
      }, 800);  // 400ms delay

      return () => clearTimeout(timer);
    }
  }, [hasContentBeenDisplayed]);

  return (
    <ChakraProvider theme={customTheme}>
      <div className='splashscreen-container'>
      <div className={hasButtonBeenClicked ? "splashicon image-moved-up" : "splashicon"}>
        <img width="200" alt="icon" src={kyleIcon} />
        <h1>kylemeister</h1>
      </div>
      <div className={hasButtonBeenClicked ? "buttons buttons-moved-up" : "buttons"}>
        <Button
        transitionDuration={buttonTransitionSpeed}
        onClick={() => {
          setHasButtonBeenClicked(true);
          setCurrentScreen("readme");
          if (hasContentBeenDisplayed === null) {
            setHasContentBeenDisplayed(false);
          }
        }}>
          <span role="img" aria-label="readme">
            🗒️
          </span>
          readme
        </Button>
        <Button
        transitionDuration={buttonTransitionSpeed}
        onClick={() => {
          setHasButtonBeenClicked(true);
          setCurrentScreen("projects");
          if (hasContentBeenDisplayed === null) {
            setHasContentBeenDisplayed(false);
          }
        }}>
          <span role="img" aria-label="folded hands">
            🚩
          </span>
          projects
        </Button>
        <Button
        transitionDuration={buttonTransitionSpeed}
        onClick={() => {
          setHasButtonBeenClicked(true);
          setCurrentScreen("ai");
          if (hasContentBeenDisplayed === null) {
            setHasContentBeenDisplayed(false);
          }
        }}>
          <span role="img" aria-label="ai">
            ✨
          </span>
          ai
        </Button>
        <Button
        transitionDuration={buttonTransitionSpeed}
        onClick={() => {
          setHasButtonBeenClicked(true);
          setCurrentScreen("contact");
          if (hasContentBeenDisplayed === null) {
            setHasContentBeenDisplayed(false);
          }
        }}>
          <span role="img" aria-label="megaphone">
            📢
          </span>
          contact
        </Button>
      </div>
      {hasButtonBeenClicked && (
        <div className='content-container'>
          {currentScreen === 'readme' && (
            <Box
              overflowY="auto"
              overflowX="auto"
              boxShadow="sm"
              bg="#151a24"
              w={["95vw", "90vw", "80vw", "70vw", "60vw"]}
              h={["75vh", "75vh", "75vh", "70vh", "70vh"]}
              borderRadius="6px"
              position="fixed"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              opacity="0"
              //animation="fadeIn .3s .4s forwards"
              animation={
                hasContentBeenDisplayed === null
                  ? "fadeIn .3s forwards"
                  : hasContentBeenDisplayed
                  ? "fadeIn .3s forwards"
                  : "fadeIn .3s .4s forwards"
              }
            >
              <Center w="100%" h="100%">
                <Stack>
                <Text fontSize="2xl" fontFamily="Lucida Console" marginLeft="40px" marginRight="40px">
                  &lt;<Box as="span" color="#167cdb">Introduction</Box>&gt;
                </Text>
                <Text fontSize="2xl" fontFamily="Lucida Console" marginLeft="60px" marginRight="40px">
                  Hi! I'm <Box as="span" color="#167cdb">Kyle</Box>. I make games and hang out in <Box as="span" color="#167cdb">The Cloud</Box>.
                </Text>
                <Text fontSize="2xl" fontFamily="Lucida Console" marginLeft="60px" marginRight="40px">
                  I have 3 years of experience building and deploying <Box as="span" color="#14e051">enterprise-grade</Box> .NET solutions and APIs on AWS. I also develop my own games using the <Box as="span" color="#14e051">Unity Engine</Box>.
                </Text>
                <Text fontSize="2xl" fontFamily="Lucida Console" marginLeft="60px" marginRight="40px">
                  Some <Box as="span" color="#14e051">AWS technologies</Box> I'm experienced in include API Gateway, DynamoDB, Lambda, S3, CodePipeline, CodeBuild, Route53, Lightsail, and Cloudwatch.
                </Text>
                <Text fontSize="2xl" fontFamily="Lucida Console" marginLeft="60px" marginRight="40px">
                  Some other technologies I'm interested in are Unity, Python, generative AI, <Box as="span" color="#14e051">GPT-4</Box>, React, and Electron.
                </Text>
                <Text fontSize="2xl" fontFamily="Lucida Console" marginLeft="60px" marginRight="40px">
                  Interested in collaborating? Check out the <Box as="span" color="#14e051">contact tab</Box> to get in touch!
                </Text>
                <Text fontSize="2xl" fontFamily="Lucida Console" marginLeft="40px" marginRight="40px">
                  &lt;<Box as="span" color="#167cdb">Introduction</Box>/&gt;
                </Text>
                </Stack>
              </Center>
            </Box>
          )}
          {currentScreen === 'projects' && (
            <Box
            boxShadow="sm"
            bg="#151a24"
            w={["95vw", "90vw", "80vw", "70vw", "60vw"]}
            h={["75vh", "75vh", "75vh", "70vh", "70vh"]}
            borderRadius="6px"
            position="fixed"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            opacity="0"
            //animation="fadeIn .3s .4s forwards"
            animation={
              hasContentBeenDisplayed === null
                ? "fadeIn .3s forwards"
                : hasContentBeenDisplayed
                ? "fadeIn .3s forwards"
                : "fadeIn .3s .4s forwards"
            }
          >
            <Center p={4}>

              <Box overflowY="auto" maxHeight={["70vh", "70vh", "70vh", "65vh", "65vh"]}>
                <Stack spacing={4}>
                  <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    h={200}
                  >
                    <Image
                      objectFit='cover'
                      maxW={{ base: '100%', sm: '200px' }}
                      src={redditThumb}
                      alt='Reddit with code background'
                    />

                    <Stack>
                      <CardBody>
                      <HStack spacing={2}>
                        <Heading size='md'>Reddit Archiver</Heading>
                        <Badge colorScheme='orange'>30 Stars on Github!</Badge>
                        <Badge colorScheme='blue'>Open-source</Badge>
                      </HStack>

                        <Text py='2' mb='-10' size='md'>
                        CLI utility for backing up
                        saved Reddit content, including comments, posts, and images.
                        Uses Python, the Reddit API, and OAuth2.
                        </Text>
                      </CardBody>

                      <CardFooter>
                        <Button variant='solid' colorScheme='gray' leftIcon={<Icon as={BsGithub} />}>
                          Github
                        </Button>
                      </CardFooter>
                    </Stack>
                  </Card>
                  <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    h={200}
                  >
                    <Image
                      objectFit='cover'
                      maxW={{ base: '100%', sm: '200px' }}
                      src={chickensThumb}
                      alt='Pixel art chicken with sunglasses'
                    />

                    <Stack spacing={4}>
                      <CardBody>
                      <HStack spacing={2}>
                        <Heading size='md'>Flock and Load</Heading>
                        <Badge colorScheme='red'>Work-in-progress</Badge>
                      </HStack>

                        <Text py='2' mb='-10'>
                        2D Action-strategy game inspired by Worms: Armageddon. Releasing
                        on Steam in Early Access sometime in 2024!
                        </Text>
                      </CardBody>

                      <CardFooter>
                        <Button variant='solid' colorScheme='gray' leftIcon={<Icon as={BsSteam} />}>
                          Steam Page
                        </Button>
                      </CardFooter>
                    </Stack>
                  </Card>
                  <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    h={200}
                  >
                    <Image
                      objectFit='cover'
                      maxW={{ base: '100%', sm: '200px' }}
                      src={codefolioThumb}
                      alt='File folder with code in outrun style'
                    />

                    <Stack spacing={4}>
                      <CardBody>
                      <HStack spacing={2}>
                        <Heading size='md'>Codefolio</Heading>
                        <Badge colorScheme='blue'>Open-source</Badge>
                      </HStack>

                        <Text py='2' mb='-10'>
                        This website! Built with React+Electron and running on an AWS Lightsail instance.
                        </Text>
                      </CardBody>

                      <CardFooter>
                        <Button variant='solid' colorScheme='gray' marginRight="10px" leftIcon={<Icon as={BsGithub} />} transitionDuration={buttonTransitionSpeed}>
                          Github
                        </Button>
                        <Button variant='solid' colorScheme='gray' leftIcon={<Icon as={BiSolidBookBookmark} />} transitionDuration={buttonTransitionSpeed}>
                          Setup Guide
                        </Button>
                      </CardFooter>
                    </Stack>
                  </Card>
                </Stack>
              </Box>
            </Center>
          </Box>
          )}
          { currentScreen === 'contact' && (
            <Box
            boxShadow="sm"
            bg="#151a24"
            w={["95vw", "90vw", "80vw", "70vw", "60vw"]}
            h={["75vh", "75vh", "75vh", "70vh", "70vh"]}
            borderRadius="6px"
            position="fixed"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            opacity="0"
            //animation="fadeIn .3s .4s forwards"
            animation={
              hasContentBeenDisplayed === null
                ? "fadeIn .3s forwards"
                : hasContentBeenDisplayed
                ? "fadeIn .3s forwards"
                : "fadeIn .3s .4s forwards"
            }
          >

          </Box>
          )}
        </div>
      )}
      </div>
    </ChakraProvider>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
      </Routes>
    </Router>
  );
}
