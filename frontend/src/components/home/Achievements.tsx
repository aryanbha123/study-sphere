import { Star } from '@mui/icons-material'
import { Avatar, Box, Container, Typography } from '@mui/material'

type CardType = {
  image: string
  rating: number
  title: string
  description: string
}

const CARDS: CardType[] = [
  {
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    title: 'Excellent Guidance',
    description:
      'The mentorship and support I received helped me crack my first internship!'
  },
  {
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 4,
    title: 'Very Helpful',
    description:
      'Clear explanations and real-world examples made learning enjoyable.'
  },
  {
    image: 'https://randomuser.me/api/portraits/men/65.jpg',
    rating: 5,
    title: 'Boosted My Confidence',
    description:
      'I was struggling with DSA, but the practice sessions gave me clarity and speed.'
  },
  {
    image: 'https://randomuser.me/api/portraits/women/29.jpg',
    rating: 5,
    title: 'Loved the Community',
    description:
      'Collaborating with peers and sharing solutions made my journey fun.'
  },
  {
    image: 'https://randomuser.me/api/portraits/men/78.jpg',
    rating: 4,
    title: 'Great for Beginners',
    description:
      'The structured curriculum and step-by-step learning path kept me consistent.'
  },
  {
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
    rating: 5,
    title: 'Amazing Experience',
    description:
      'The projects helped me showcase my skills and land freelance work.'
  }
]

export default function Achievements () {
  return (
    <Container sx={{ py: 10, overflow: 'hidden' }} maxWidth='xl'>
      <Box
        sx={{
          display: 'flex',
          gap: 3,
          width: 'max-content',
          animation: 'scroll 15s linear infinite',
          '&:hover, &:focus, &:focus-within': {
            animationPlayState: 'paused'
          }
        }}
      >
        {[...CARDS, ...CARDS].map((item, idx) => (
          <Box
            key={idx}
            sx={{
              width: 300,
              border: '1px solid #eee',
              borderRadius: 2,
              p: 2,
              // boxShadow: 1,
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'column',
              '&:hover, &:focus': {
                scale:1.1,
                transition : "ease-in",
                transitionDuration : ".1s"
              }
              // gap: 1.5
            }}
          >
            <Avatar
              src={item.image}
              alt={item.title}
              sx={{ width: 56, height: 56 }}
            />
            <Box sx={{ display: 'flex', gap: 0.5 }}>
              {Array.from({ length: 5 }).map((_, key) => (
                <Star
                  key={key}
                  sx={{
                    fontSize: 18,
                    color: key < item.rating ? '#0472e7b8' : '#ddd'
                  }}
                />
              ))}
            </Box>
            <Typography variant='subtitle1' fontWeight={600}>
              {item.title}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  )
}
