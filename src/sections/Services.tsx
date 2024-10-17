import React from 'react'
import { Section } from '@/components/Section'
import copy from '@/constants/copy'
import Image from 'next/image'

export const Services = () => {
  return (
    <Section>
        <h1>{copy.services.title}</h1>
        <p>{copy.services.p1}</p>
        <p>{copy.services.p2}</p>
        <Image src={copy.services.image} alt={copy.services.title} width={500} height={600}></Image>
    </Section>
  )
}
