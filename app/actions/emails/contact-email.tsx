import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

interface Props {
  name: string
  email: string
  message: string
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const ContactEmail = ({ name, email, message }: Props) => (
  <Html>
    <Head />
    <Preview>New message from your portfolio site</Preview>
    <Tailwind>
      <Body className='mx-auto my-auto bg-white font-sans'>
        <Container className='mx-auto my-[40px] w-[465px] rounded border border-[#eaeaea] border-solid p-[20px]'>
          <Section className='mt-[32px] text-center'>{''}</Section>
          <Heading className='mx-0 my-[30px] p-0 text-center font-normal text-[24px] text-black'>
            You got a new message!
          </Heading>
          <Text className='text-[14px] text-black leading-[24px]'>
            Someone just contacted you from your portfolio site.
          </Text>
          <Text className='text-[14px] text-black leading-[24px]'>
            <strong>Name:</strong> {name}
          </Text>
          <Text className='text-[14px] text-black leading-[24px]'>
            <strong>Email:</strong> {email}
          </Text>
          <Text className='text-[14px] text-black leading-[24px]'>
            <strong>Message:</strong>
          </Text>
          <Text className='rounded-lg bg-gray-100 p-4 text-[14px] text-black leading-[24px]'>
            {message}
          </Text>
          <Hr className='mx-0 my-[26px] w-full border border-[#eaeaea] border-solid' />
          <Text className='text-[#666666] text-[12px] leading-[24px]'>
            This message was sent from the contact form on your{' '}
            <Link href='https://marwanshehata.vercel.app/'>
              portfolio website
            </Link>
            .
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
)
