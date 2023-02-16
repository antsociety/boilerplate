import Head from 'next/head'
import styled from 'styled-components'

const HomeWrapper = styled.div`
  display: flex;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Boilerplate</title>
        <meta name="description" content="Boilerplate" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeWrapper>
        <h1>Boilerplate</h1>
      </HomeWrapper>
    </>
  )
}
