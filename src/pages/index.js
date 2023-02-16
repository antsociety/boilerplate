import { useState } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import axios from 'axios'

const HomeWrapper = styled.div`
  display: flex;
`

export default function Home() {
  const [title, setTitle] = useState('')

  axios.get('http://localhost:1337/api/title').then((response) => {
    setTitle(response.data.data.attributes.Title)
  })

  return (
    <>
      <Head>
        <title>Boilerplate</title>
        <meta name="description" content="Boilerplate" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeWrapper>{title && <h1>{title}</h1>}</HomeWrapper>
    </>
  )
}
