import React from 'react'
import { Section } from '@/components/Section'
import  copy  from '@/constants/copy'
import  Image  from 'next/image'

export const Hero = () => {
  return (
    <Section>
        <h1>{copy.hero.title}</h1>
        <p>{copy.hero.p1}</p>
        <p>{copy.hero.p2}</p>
        <Image src={copy.hero.image} alt={copy.hero.title}width={500} height={600}/>
    </Section>
  )
}
