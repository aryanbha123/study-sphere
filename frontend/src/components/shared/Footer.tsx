import { Box, Container, Typography, Link, Divider } from '@mui/material'

export default function Footer () {
  return (
    <Box
      component='footer'
      sx={{
        backgroundColor: theme => theme.palette.supporting.light,
        color: '#000',
        py: 4,
        mt: 'auto'
      }}
    >
      <Container maxWidth='xl'>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2
          }}
        >
          <img src='/logo.png' className='h-10' alt='' />
          <Box sx={{ display: 'flex', gap: 2, mt: { xs: 2, sm: 0 } }}>
            <Link href='#' color='inherit' underline='hover'>
              <Typography variant='body2'>About</Typography>
            </Link>
            <Link href='#' color='inherit' underline='hover'>
              <Typography variant='body2'>Contact</Typography>
            </Link>
            <Link href='#' color='inherit' underline='hover'>
              <Typography variant='body2'>FAQ</Typography>
            </Link>
          </Box>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)', mb: 2 }} />

        <Typography variant='body2' align='center'>
          © {new Date().getFullYear()} StudySphere. All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}
