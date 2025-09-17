import {
  AppBar,
  Autocomplete,
  Button,
  Drawer,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
  type SxProps
} from '@mui/material'
import type { Theme } from '@mui/material/styles'
import { Box } from '@mui/system'
import { Link } from 'react-router'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { Close as CloseIcon, Search } from '@mui/icons-material'
import theme from '../../config/theme'
const buttonStyle: SxProps<Theme> = {
  backgroundColor: theme => theme.palette.supporting.main,
  color: '#fff',
  borderRadius: '20px',
  fontSize: '12px',
  ml: 1
}

interface NavItemsType {
  label: string
  link: string
  isPrivate: boolean
}

const NAV_ITEMS: NavItemsType[] = [
  { label: 'Home', link: '/', isPrivate: false },
  { label: 'About', link: '/about', isPrivate: false },
  { label: 'Contact', link: '/contact', isPrivate: false },
  { label: 'Join Call', link: '/join', isPrivate: false }
]

interface SearchItemType {
  title: string
  year: number
}

const SEARCH_DATA: SearchItemType[] = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 }
]

export default function Navbar () {
  const [open, setOpen] = useState(false)
  const isMobile = useMediaQuery('(max-width:900px)')

  return (
    <AppBar
      elevation={0}
      sx={{ background: 'transparent', top: 0, position: 'fixed' }}
    >
      <Toolbar>
        {/* Left: Logo */}
        <Box flexGrow={1} display='flex' alignItems='center'>
          <Link to={'/'}>
            <img className='h-10' src='/logo.png' alt='Logo' />
          </Link>
        </Box>

        {/* Desktop: Search + Nav Items + Buttons */}
        {!isMobile && (
          <>
            <Box
              display='flex'
              flexGrow={3}
              alignItems='center'
              justifyContent='center'
              gap='2rem'
              ml={4}
            >
              <TextField
                variant='outlined'
                placeholder='Search...'
                size='small'
                sx={{
                  width: 500,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '50px',
                    paddingRight: '8px',
                    backgroundColor: '#fff',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                    },
                    '&.Mui-focused': {
                      border: '1px solid #1976d2',
                      boxShadow: '0 0 0 3px rgba(25, 118, 210, 0.2)'
                    }
                  }
                }}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton>
                          <Search />
                        </IconButton>
                      </InputAdornment>
                    )
                  }
                }}
              />
              {NAV_ITEMS.map(item => (
                <Tooltip title={item.label} key={item.label}>
                  <Link to={item.link} style={{ textDecoration: 'none' }}>
                    <Typography
                      variant='subtitle2'
                      sx={{ color: theme.palette.supporting.main }}
                    >
                      {item.label}
                    </Typography>
                  </Link>
                </Tooltip>
              ))}
            </Box>

            <Box>
              <Link to={'/login'}>
                <Button variant='outlined' sx={buttonStyle}>
                  Login
                </Button>
              </Link>
              <Link to='/signup'>
                <Button
                  variant='outlined'
                  sx={{ ...buttonStyle, bgcolor: 'white', color: '#010101' }}
                >
                  Sign Up
                </Button>
              </Link>
            </Box>
          </>
        )}

        {/* Mobile: Hamburger */}
        {isMobile && (
          <>
            <IconButton
              color='inherit'
              edge='end'
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              anchor='right'
              open={open}
              onClose={() => setOpen(false)}
              PaperProps={{ sx: { width: 250 } }}
            >
              <Box display='flex' justifyContent='flex-end' p={2}>
                <IconButton onClick={() => setOpen(false)}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <Box p={2}>
                <Autocomplete
                  freeSolo
                  disableClearable
                  options={SEARCH_DATA}
                  getOptionLabel={option =>
                    typeof option === 'string' ? option : option.title
                  }
                  renderInput={params => (
                    <TextField
                      {...params}
                      label='Search'
                      InputProps={{
                        ...params.InputProps,
                        type: 'search'
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '50px'
                        }
                      }}
                    />
                  )}
                  sx={{ width: '100%', mb: 2 }}
                />

                <List>
                  {NAV_ITEMS.map(item => (
                    <ListItem
                      key={item.label}
                      component={Link}
                      to={item.link}
                      onClick={() => setOpen(false)}
                    >
                      <ListItemText primary={item.label} />
                    </ListItem>
                  ))}
                </List>

                <Box mt={2}>
                  <Link to={'/login'}>
                    <Button fullWidth variant='outlined' sx={buttonStyle}>
                      Login
                    </Button>
                  </Link>
                  <Link to={'/signup'}>
                    <Button
                      fullWidth
                      variant='outlined'
                      sx={{
                        ...buttonStyle,
                        bgcolor: 'white',
                        color: '#010101',
                        mt: 1
                      }}
                    >
                      Sign Up
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}
