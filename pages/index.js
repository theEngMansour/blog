import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Lists } from 'components/about';
import { MainLayout } from 'layouts';

const listData = [
  {
    title: "هدفنا ؟ 🤷‍♂️😊",
    content: "هذا المجتمع ليس منتدى، بل مجموعة من المجتمعات المتخصصة تتم إدارته بشكل", 
    number: 1, 
    icon: "1"
  },
  {
    title: "المجتمعات ؟ 🤷‍♂️🚀",
    content: "هذا المجتمع ليس منتدى، بل مجموعة من المجتمعات المتخصصة تتم إدارته بشكل", 
    number: 2, 
    icon: "1"
  },
  {
    title: "المتخصصة ؟ 😢👏",
    content: "هذا المجتمع ليس منتدى، بل مجموعة من المجتمعات المتخصصة تتم إدارته بشكل", 
    number: 3, 
    icon: "1"
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
              <Lists 
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
