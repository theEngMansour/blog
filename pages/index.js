import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { MainLayout } from 'layouts';

export default function Home() {
  return (
    <MainLayout>
      <Box
        className="text-center w-[100%] md:w-[90%] lg:w-[70%] m-auto"
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            height: '100%'
          },
        }}
      >
        <Paper className="shadow-lg mt-6 pb-24 pt-16" variant={0}>
          <h2 className="text-center m-0 text-[30px]">أهلاً بالعالم 🚀👋</h2>
        </Paper>
      </Box>
    </MainLayout>
  )
}
