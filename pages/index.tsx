import React from 'react'
import { Button, Text, Image, Box } from '@chakra-ui/core'
import HeroContainer from '../components/hero/hero-container'
import HeroTexts from '../components/hero/hero-texts'
import HeroTitle from '../components/hero/hero-title'
import Welcome from '../components/home/welcome'

const Home: React.FC = () => {
  return (
    <>
      <HeroContainer>
        <HeroTexts>
          <HeroTitle>
            We provide easy solution to exchange your{' '}
            <Text fontWeight="bold" display="inline">
              Bitcoin/ GiftCard for money
            </Text>
          </HeroTitle>
          <Text py="6" maxW="550px">
            CoinBase is a platform for trading your bitcoin and giftcard at the
            best rate, why not give us a trial.
          </Text>
          <Button
            background="white"
            textTransform="uppercase"
            color="pink.500"
            rounded="100px"
            width="158px"
            py="6"
            mb={['8', '8', '8', '0', '0']}
          >
            Get Started
          </Button>
        </HeroTexts>

        <Image
          src="/home-bg.png"
          display={['none', 'none', 'none', 'block', 'block']}
          pb={['0', '0', '0', '40', '20']}
        />
      </HeroContainer>

      <Welcome />
    </>
  )
}

export default Home
