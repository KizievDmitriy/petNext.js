import Head from 'next/head'
// import Image from 'next/image'
import { Montserrat } from '@next/font/google'
import { Button, Htag, Ptag, Raiting, Tag } from '../components'
import { useState } from "react"
import { withLayout } from '../layout/Layout'


const montserrat = Montserrat({
  subsets: ['cyrillic'],
  style: ['normal', 'italic']
})


function Home() {
  const [raiting, setRaiting] = useState<number>(4)

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Htag tag='h2'>Ntkejbgk</Htag>
        <Button appearance='primary' arrow='right'>Узнать подробнее</Button>
        <Button appearance='secondary' arrow='down'>Читать отзывы</Button>
        <Ptag size='s'>Маленький</Ptag>
        <Ptag size='m'>Средний</Ptag>
        <Ptag size='l'>Большой</Ptag>
        <Tag>transparent</Tag>
        <Tag size='m' color='red'>red</Tag>
        <Tag size='m' color='primary'>primary</Tag>
        <Raiting raiting={raiting} isEditable setRaiting={setRaiting} />
      </main>
    </>
  )
}

export default withLayout(Home)