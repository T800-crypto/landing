import React from 'react'
import { Section } from '@/components/Section'
import copy from '@/constants/copy'
import Image from 'next/image'

export const Mission = () => {
  return (
    <Section>
        <h1>{copy.mission.title}</h1>
        <p>{copy.mission.p1}</p>
        <p>{copy.mission.p2}</p>
        <Image src={copy.mission.image} alt={copy.mission.title}width={500} height={600}></Image>
    </Section>
  )
}
