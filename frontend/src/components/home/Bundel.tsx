import { Face, Timeline, Whatshot } from '@mui/icons-material'
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  Typography,
  Fade,
  CardMedia,
  CardActions,
  Button
} from '@mui/material'
import { Link } from 'react-router-dom'

type Quiz = {
  id: number
  title: string
  description: string
  category: 'Trending' | 'Popular' | 'New'
  image: string
}

const QUIZZES: Quiz[] = [
  {
    id: 1,
    title: 'DBMS Basics',
    description:
      'Test your understanding of Database Management Systems fundamentals.',
    category: 'Trending',
    image: 'https://picsum.photos/300/200?random=1'
  },
  {
    id: 2,
    title: 'Advanced SQL',
    description: 'Challenge your SQL skills with complex queries and joins.',
    category: 'Popular',
    image: 'https://picsum.photos/300/200?random=2'
  },
  {
    id: 3,
    title: 'Data Structures',
    description:
      'Evaluate your knowledge of stacks, queues, trees, and graphs.',
    category: 'New',
    image: 'https://picsum.photos/300/200?random=3'
  },
  {
    id: 4,
    title: 'Operating Systems',
    description:
      'Dive into processes, threads, memory management, and scheduling.',
    category: 'Trending',
    image: 'https://picsum.photos/300/200?random=4'
  },
  {
    id: 5,
    title: 'Computer Networks',
    description:
      'Test your knowledge of TCP/IP, routing, and OSI model layers.',
    category: 'Popular',
    image: 'https://picsum.photos/300/200?random=5'
  },
  {
    id: 6,
    title: 'Algorithms',
    description:
      'Assess your skills with sorting, searching, and optimization algorithms.',
    category: 'New',
    image: 'https://picsum.photos/300/200?random=6'
  },
  {
    id: 7,
    title: 'Computer Architecture',
    description: 'Understand CPU design, pipelining, and instruction sets.',
    category: 'Trending',
    image: 'https://picsum.photos/300/200?random=7'
  },
  {
    id: 8,
    title: 'Machine Learning',
    description: 'Basics of supervised and unsupervised learning models.',
    category: 'Popular',
    image: 'https://picsum.photos/300/200?random=8'
  },
  {
    id: 9,
    title: 'Artificial Intelligence',
    description: 'Test your AI knowledge on search, planning, and reasoning.',
    category: 'New',
    image: 'https://picsum.photos/300/200?random=9'
  },
  {
    id: 10,
    title: 'Cyber Security',
    description: 'Explore cryptography, attacks, and defense mechanisms.',
    category: 'Trending',
    image: 'https://picsum.photos/300/200?random=10'
  },
  {
    id: 11,
    title: 'Web Development',
    description: 'Covers HTML, CSS, JavaScript, and modern frameworks.',
    category: 'Popular',
    image: 'https://picsum.photos/300/200?random=11'
  },
  {
    id: 12,
    title: 'Mobile Development',
    description: 'Test your skills on Android, iOS, and cross-platform tools.',
    category: 'New',
    image: 'https://picsum.photos/300/200?random=12'
  },
  {
    id: 13,
    title: 'Cloud Computing',
    description: 'Check your knowledge of AWS, Azure, and GCP fundamentals.',
    category: 'Trending',
    image: 'https://picsum.photos/300/200?random=13'
  },
  {
    id: 14,
    title: 'Big Data',
    description:
      'Test your knowledge of Hadoop, Spark, and distributed systems.',
    category: 'Popular',
    image: 'https://picsum.photos/300/200?random=14'
  },
  {
    id: 15,
    title: 'DevOps',
    description: 'Cover CI/CD, Docker, Kubernetes, and monitoring tools.',
    category: 'New',
    image: 'https://picsum.photos/300/200?random=15'
  },
  {
    id: 16,
    title: 'Software Engineering',
    description: 'Covers SDLC, agile methodologies, and design principles.',
    category: 'Trending',
    image: 'https://picsum.photos/300/200?random=16'
  },
  {
    id: 17,
    title: 'Programming in C',
    description: 'Assess your C programming skills with pointers and memory.',
    category: 'Popular',
    image: 'https://picsum.photos/300/200?random=17'
  },
  {
    id: 18,
    title: 'Java Programming',
    description: 'OOP, collections, and concurrency concepts tested.',
    category: 'New',
    image: 'https://picsum.photos/300/200?random=18'
  },
  {
    id: 19,
    title: 'Python Programming',
    description: 'Covers syntax, libraries, and problem-solving skills.',
    category: 'Trending',
    image: 'https://picsum.photos/300/200?random=19'
  },
  {
    id: 20,
    title: 'Data Science',
    description: 'Statistics, visualization, and predictive modeling basics.',
    category: 'Popular',
    image: 'https://picsum.photos/300/200?random=20'
  }
]
export default function QuizBundle () {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Explore Quizzes
      </Typography>

      <Grid container spacing={3}>
        {QUIZZES.map(quiz => (
          <Grid size={3}>
            <Link to={'/quiz/'+ quiz.id}>
              <Card
                elevation={0}
                sx={{ maxWidth: 345, border: '1px solid #eee' }}
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image={quiz.image}
                  title='green iguana'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    {quiz.title}
                  </Typography>
                  <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Chip
                    variant='outlined'
                    color='info'
                    size='small'
                    label={quiz.category}
                    icon={
                      quiz.category == 'Trending' ? (
                        <Timeline />
                      ) : quiz.category == 'Popular' ? (
                        <Whatshot />
                      ) : (
                        <></>
                      )
                    }
                  />

                  <Button size='small'>Share</Button>
                  <Button size='small'>Learn More</Button>
                </CardActions>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
