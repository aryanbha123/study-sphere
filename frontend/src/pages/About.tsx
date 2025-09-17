import React from 'react'
import { Helmet } from 'react-helmet-async'

interface AboutProps {
  title: string
}

const About: React.FC<AboutProps> = (props) => {
  return <>
    <Helmet>
        <title>{props.title}</title>
    </Helmet>
  </>
}

export default About
