"use server"
import { Helmet } from 'react-helmet-async'

interface ContactProps {
  title: string
}
const Contact: React.FC<ContactProps> = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>



    </>
  )
}

export default Contact
