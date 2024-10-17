import React from 'react'
import { Section } from '@/components/Section'
import copy from '@/constants/copy'
import Image from 'next/image'

export const About = () => {
  return (
    <Section>
        <h1>{copy.about.title}</h1>
        <p>{copy.about.p1}</p>
        <p>{copy.about.p2}</p>
        <Image src={copy.about.image} alt={copy.about.title} width={500} height={600}></Image>
    </Section>
    
  )
}
