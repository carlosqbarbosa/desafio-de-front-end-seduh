import { Box, CircularProgress } from '@mui/material';
import { colors } from '@/theme/colors';

export default function Loading() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.black,
      }}
    >
      <CircularProgress 
        sx={{ 
          color: '#fff',
          '& .MuiCircularProgress-circle': {
            strokeLinecap: 'round',
          },
        }} 
        size={60} 
        thickness={2}
      />
    </Box>
  );
}