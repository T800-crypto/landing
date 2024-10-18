import React, { ReactNode } from 'react'

interface SectionProps {
    children: ReactNode,
    clasName?: string
}

export const Section = ({children, clasName}:SectionProps) => {
  return (
    <div className={`${clasName}`}>
        {children}
    </div>
  )
}
