import { Mic, PlayCircle, Videocam } from '@mui/icons-material'
import {
  Box,
  Container,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Tooltip
} from '@mui/material'
import { useEffect, useRef, useState } from 'react'

export default function VideoMeet() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [stream, setStream] = useState<MediaStream | null>(null)
  const [videoEnabled, setVideoEnabled] = useState(true)
  const [audioEnabled, setAudioEnabled] = useState(true)

  // Initialize camera + mic
  useEffect(() => {
    const initMedia = async () => {
      try {
        const userStream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true
        })
        setStream(userStream)
        if (videoRef.current) videoRef.current.srcObject = userStream
      } catch (err) {
        console.error('Error accessing camera/mic:', err)
      }
    }
    initMedia()
  }, [])

  // Toggle video
  const handleVideoToggle = () => {
    if (!stream) return
    stream.getVideoTracks().forEach(track => (track.enabled = !videoEnabled))
    setVideoEnabled(prev => !prev)
  }

  // Toggle audio
  const handleAudioToggle = () => {
    if (!stream) return
    stream.getAudioTracks().forEach(track => (track.enabled = !audioEnabled))
    setAudioEnabled(prev => !prev)
  }

  return (
    <Container
      maxWidth="xl"
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f2f5'
      }}
    >
      <Stack spacing={4} alignItems="center">
        {/* Video + Meeting Input */}
        <Box
          sx={{
            display: 'flex',
            gap: 3,
            alignItems: 'center',
            flexWrap: 'wrap'
          }}
        >
          <video
            ref={videoRef}
            autoPlay
            playsInline
            style={{
              width: '220px',
              height: '220px',
              borderRadius: '12px',
              objectFit: 'cover',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
              variant="outlined"
              placeholder="Enter Meeting code..."
              size="medium"
              sx={{
                width: { xs: '200px', sm: '280px' },
                '& .MuiOutlinedInput-root': {
                  borderRadius: '50px',
                  backgroundColor: '#fff',
                  paddingRight: '8px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': { boxShadow: '0 4px 12px rgba(0,0,0,0.15)' },
                  '&.Mui-focused': {
                    border: '1px solid #1976d2',
                    boxShadow: '0 0 0 3px rgba(25,118,210,0.2)'
                  }
                }
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Tooltip title="Join Meeting">
                      <IconButton
                        sx={{
                          color: '#1976d2',
                          '&:hover': { backgroundColor: 'rgba(25,118,210,0.1)' }
                        }}
                      >
                        <PlayCircle fontSize="large" />
                      </IconButton>
                    </Tooltip>
                  </InputAdornment>
                )
              }}
            />
            <Box
              sx={{
                display: 'flex',
                gap: 3,
                mt: 2
              }}
            >
              <Tooltip title={videoEnabled ? 'Turn Off Video' : 'Turn On Video'}>
                <IconButton
                  onClick={handleVideoToggle}
                  sx={{
                    backgroundColor: videoEnabled ? '#fff' : '#f44336',
                    '&:hover': {
                      backgroundColor: videoEnabled ? '#e3f2fd' : '#f77'
                    },
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                  }}
                >
                  <Videocam fontSize="large" color={videoEnabled ? 'primary' : 'inherit'} />
                </IconButton>
              </Tooltip>

              <Tooltip title={audioEnabled ? 'Mute Mic' : 'Unmute Mic'}>
                <IconButton
                  onClick={handleAudioToggle}
                  sx={{
                    backgroundColor: audioEnabled ? '#fff' : '#f44336',
                    '&:hover': {
                      backgroundColor: audioEnabled ? '#e3f2fd' : '#f77'
                    },
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                  }}
                >
                  <Mic fontSize="large" color={audioEnabled ? 'primary' : 'inherit'} />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Container>
  )
}
