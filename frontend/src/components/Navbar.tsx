import {
  AppBar,
  Autocomplete,
  Button,
  Drawer,
  IconButton,
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
import CloseIcon from '@mui/icons-material/Close'

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
  { label: 'Home', link: '/home', isPrivate: false },
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

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const isMobile = useMediaQuery('(max-width:900px)')

  return (
    <AppBar elevation={0} color="primary" position="static">
      <Toolbar>
        {/* Left: Logo */}
        <Box flexGrow={1} display="flex" alignItems="center">
          <img className="h-10" src="/logo.png" alt="Logo" />
        </Box>

        {/* Desktop: Search + Nav Items + Buttons */}
        {!isMobile && (
          <>
            <Box
              display="flex"
              flexGrow={3}
              alignItems="center"
              justifyContent="center"
              gap="2rem"
              ml={4}
            >
              <Autocomplete
                freeSolo
                disableClearable
                options={SEARCH_DATA}
                getOptionLabel={(option) =>
                  typeof option === 'string' ? option : option.title
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search input"
                    InputProps={{
                      ...params.InputProps,
                      type: 'search'
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '50px',
                        border:"1px solid #f6f6f6"
                      }
                    }}
                  />
                )}
                sx={{ width: 350 }}
              />

              {NAV_ITEMS.map((item) => (
                <Tooltip title={item.label} key={item.label}>
                  <Link to={item.link} style={{ textDecoration: 'none' }}>
                    <Typography color="inherit">{item.label}</Typography>
                  </Link>
                </Tooltip>
              ))}
            </Box>

            <Box>
              <Button variant="outlined" sx={buttonStyle}>
                Login
              </Button>
              <Button
                variant="outlined"
                sx={{ ...buttonStyle, bgcolor: 'white', color: '#010101' }}
              >
                Sign Up
              </Button>
            </Box>
          </>
        )}

        {/* Mobile: Hamburger */}
        {isMobile && (
          <>
            <IconButton
              color="inherit"
              edge="end"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              anchor="right"
              open={open}
              onClose={() => setOpen(false)}
              PaperProps={{ sx: { width: 250 } }}
            >
              <Box display="flex" justifyContent="flex-end" p={2}>
                <IconButton onClick={() => setOpen(false)}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <Box p={2}>
                <Autocomplete
                  freeSolo
                  disableClearable
                  options={SEARCH_DATA}
                  getOptionLabel={(option) =>
                    typeof option === 'string' ? option : option.title
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Search"
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
                  {NAV_ITEMS.map((item) => (
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
                  <Button fullWidth variant="outlined" sx={buttonStyle}>
                    Login
                  </Button>
                  <Button
                    fullWidth
                    variant="outlined"
                    sx={{
                      ...buttonStyle,
                      bgcolor: 'white',
                      color: '#010101',
                      mt: 1
                    }}
                  >
                    Sign Up
                  </Button>
                </Box>
              </Box>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}
