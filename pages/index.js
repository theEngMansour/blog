import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { List } from 'components/about';
import { MainLayout } from 'layouts';

const listData = [
  {
    title: "هدفنا ؟ 🤷‍♂️😊",
    content: "هذا المجتمع ليس منتدى، بل مجموعة من المجتمعات المتخصصة تتم إدارته بشكل", 
    number: 1, 
    icon: (
      <svg fill="none" stroke="currentColor"  stroke-width="2" className="w-12 h-12" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
       </svg>
    )
  },
  {
    title: "المجتمعات ؟ 🤷‍♂️🚀",
    content: "هذا المجتمع ليس منتدى، بل مجموعة من المجتمعات المتخصصة تتم إدارته بشكل", 
    number: 2, 
    icon: (
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" className="w-12 h-12" viewBox="0 0 24 24">
       <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    )
  },
  {
    title: "المتخصصة ؟ 😢👏",
    content: "هذا المجتمع ليس منتدى، بل مجموعة من المجتمعات المتخصصة تتم إدارته بشكل", 
    number: 3, 
    icon: (
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" className="w-12 h-12" viewBox="0 0 24 24">
        <circle cx="12" cy="5" r="3"></circle>
        <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
      </svg>
    )
  }
]

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
          <p className="text-center m-0 text-[#546e7a] font-semibold">موقع من تطوير منصور أحمد 👌😉</p>
          <p className="text-justify text-[#546e7a] w-[100%] px-[30px] sm:w-[80%] lg:w-[90%] m-auto mt-3">
           هذا المجتمع ليس منتدى، بل مجموعة من المجتمعات المتخصصة تتم إدارته بشكل جماعي بناء على تصويت المستخدمين وذلك برفع المساهمات ذات المحتوى الجيد وخفض ترتيب المساهمات ذات المحتوى السيء. هذا الأسلوب بالإدارة أقرب الى الشبكة الاجتماعية المتخصصة من المنتديات التقليدية نهدف من خلاله الى بناء مجتمع عربي ناضج بأسلوب.
          </p>
          <br></br>
          {
            listData.map((items, index) => (
              <List 
                key={index}
                title={items.title}
                content={items.content}
                number={items.number}
                icon={items.icon}
              />
            ))
          }

        </Paper>
      </Box>
    </MainLayout>
  )
}
