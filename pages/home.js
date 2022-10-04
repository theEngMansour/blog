import Image from 'next/image';
import Container from './Container';
import BlogPostCard from './BlogPostCard';
import { Suspense } from 'react';

export default function Home() {
    return (
      <Suspense fallback={null}>
        <Container>
          <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 border-gray-700 mx-auto pb-16">
            <div className="flex flex-col-reverse sm:flex-row items-start">
              <div className="flex flex-col pr-8 md:mt-4">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black text-left">
                  Mansour Ahmed
                </h1>
                <h2 className="text-gray-700 mb-4">
                  Director {' '}
                  <span className="font-semibold">BeeMedia</span>
                </h2>
                <p className="text-gray-600 mb-16">
                  Software engineer for web pages and mobile application
                </p>
              </div>
              <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto mt-5">
                <Image
                  alt="Mansour Ahmed"
                  height={176}
                  width={176}
                  src="/avatar.jpg"
                  sizes="40vw"
                  priority
                  className="rounded-full filter grayscale"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-2 w-full">
                <h1 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black">
                About Me
                </h1>
                <div className="mb-8 prose prose-dark leading-6">
                    <h2>Links</h2>
                    <ul>
                        <li>
                        Twitter: <a href="https://twitter.com/mansour_tech" className="text-blue-700">@mansour_tech</a>
                        </li>
                        <li>
                        GitHub: <a href="https://github.com/theEngMansour" className="text-blue-700">@theEngMansour</a>
                        </li>
                        <li>
                        Facebook:{' '}
                        <a href="https://fb.com/theEngMansour" className="text-blue-700">
                            @theEngMansour
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
            <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black">
                Education
            </h3>
            <div className="flex gap-6 flex-col md:flex-row">
              <BlogPostCard
                title="Electronic and Commun.Engg"
                imag="/data/engg.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-red-800 via-red-300 to-red-400"
              />
              <BlogPostCard
                title="Academy Hsoub - Front End"
                imag="/data/front-end-web-development.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-red-500 via-red-300 to-red-200"
              />
              <BlogPostCard
                title="Academy Hsoub - JS"
                imag="/data/javascript-application-development.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-yellow-500 via-yellow-300 to-yellow-200"
              />
              <BlogPostCard
                title="Academy Hsoub - PHP"
                imag="/data/php-web-application-development.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-blue-500 via-blue-300 to-blue-200"
              />
            </div> 
            <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black">
                Programming languages
            </h3>
            <div className="flex gap-6 flex-col md:flex-row">
              <BlogPostCard
                title="JavaScript"
                imag="/data/js.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-yellow-500 via-yellow-300 to-yellow-200"
              />
              <BlogPostCard
                title="PHP"
                imag="/data/php.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-blue-500 via-blue-300 to-blue-200"
              />
              <BlogPostCard
                title="Verilog"
                imag="/data/mili.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-red-500 via-red-300 to-red-200"
              />
              <BlogPostCard
                title="C++"
                imag="/data/cx.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-[#0000FF] via-[#3B82F6] to-[#9333EA]"
              />
            </div> 
            <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black">
                Framework Front End 
            </h3>
            <div className="flex gap-6 flex-col md:flex-row">
              <BlogPostCard
                title="HTML"
                imag="/data/html.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
              />
              <BlogPostCard
                title="CSS"
                imag="/data/css.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
              />
              <BlogPostCard
                title="SASS"
                imag="/data/sass.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
              />
              <BlogPostCard
                title="React"
                imag="/data/reactjs.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
              />
              <BlogPostCard
                title="Material UI"
                imag="/data/mui.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
              />
              <BlogPostCard
                title="Alpine.js"
                imag="/data/ali.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
              />
              <BlogPostCard
                title="Tailwind CSS"
                imag="/data/tail.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
              />
              <BlogPostCard
                title="Bootstrap"
                imag="/data/bootstrap.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
              />
              <BlogPostCard
                title="Miligram CSS"
                imag="/data/mg.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
              />
              <BlogPostCard
                title="Next UI"
                imag="/data/nexrui.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
              />
              <BlogPostCard
                title="Ionic.js"
                imag="/data/ionic.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
              />
              <BlogPostCard
                title="Livewire"
                imag="/data/livewire.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
              />
            </div>    
            <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black">
                Framework Back End 
            </h3>
            <div className="flex gap-6 flex-col md:flex-row">
              <BlogPostCard
                title="Next.js"
                imag="/data/nextjs.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-[#D8B4FE] to-[#818CF8]"
              />
              <BlogPostCard
                title="Express"
                imag="/data/nodejs.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-[#D8B4FE] to-[#818CF8]"
              />
              <BlogPostCard
                title="Laravel"
                imag="/data/laravel.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-[#D8B4FE] to-[#818CF8]"
              />
            </div> 
            <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black">
                Database
            </h3>
            <div className="flex gap-6 flex-col md:flex-row">
              <BlogPostCard
                title="MongoDB"
                imag="/data/mongodb.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
              />
              <BlogPostCard
                title="MySql"
                imag="/data/mysql.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
              />
              <BlogPostCard
                title="PostgrdSql"
                imag="/data/postgrad.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
              />
            </div> 
            <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black">
                Raletioship Database
            </h3>
            <div className="flex gap-6 flex-col md:flex-row">
              <BlogPostCard
                title="ORM - Laravel"
                imag="/data/laravel.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
              />
              <BlogPostCard
                title="ORM - Prisma"
                imag="/data/prisma.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
              />
              <BlogPostCard
                title="ODM - MongoDB"
                imag="/data/mongodb.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
              />
            </div> 
            <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black">
                Internet Protocal (IP)
            </h3>
            <div className="flex gap-6 flex-col md:flex-row">
              <BlogPostCard
                title="HTTP"
                imag="/data/http.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
              />
              <BlogPostCard
                title="Web Sockets"
                imag="/data/ws.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
              />
              <BlogPostCard
                title="Sockets IO"
                imag="/data/so.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
              />
            </div> 
            <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black">
                API
            </h3>
            <div className="flex gap-6 flex-col md:flex-row">
              <BlogPostCard
                title="Restful API"
                imag="/data/restful.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
              />
              <BlogPostCard
                title="Graphql"
                imag="/data/graphql.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
              />
            </div> 
            <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black">
                Mobile Application
            </h3>
            <div className="flex gap-6 flex-col md:flex-row">
               <BlogPostCard
                title="React Native"
                imag="/data/reactjs.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-[#FECACA] via-[#FCA5A5] to-[#FCA5A5]"
              />
              <BlogPostCard
                title="Expo"
                imag="/data/expo.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-[#FECACA] via-[#FCA5A5] to-[#FCA5A5]"
              />
            </div> 
            <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black">
                Desktop
            </h3>
            <div className="flex gap-6 flex-col md:flex-row">
              <BlogPostCard
                title="Electron.js"
                imag="/data/electornjs.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-[#FECACA] via-[#FCA5A5] to-[#FCA5A5]"
              />
            </div> 
            <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black">
                Graphite Designer + Montage
            </h3>
            <div className="flex gap-6 flex-col md:flex-row">
              <BlogPostCard
                title="Photoshop"
                imag="/data/photoshop.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-[#6EE7B7] via-[#fff] to-[#6EE7B7]"
              />
              <BlogPostCard
                title="Illustrator"
                imag="/data/lits.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-[#6EE7B7] via-[#fff] to-[#6EE7B7]"
              />
              <BlogPostCard
                title="Indesign"
                imag="/data/indesgin.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-[#6EE7B7] via-[#fff] to-[#6EE7B7]"
              />
              <BlogPostCard
                title="Premiere pro"
                imag="/data/pr.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-[#6EE7B7] via-[#fff] to-[#6EE7B7]"
              />
            </div> 
            <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black">
                Editor
            </h3>
            <div className="flex gap-6 flex-col md:flex-row">
              <BlogPostCard
                title="GIT"
                imag="/data/git.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-red-100 via-red-200 to-red-500"
              />
              <BlogPostCard
                title="GITHub"
                imag="/data/github.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-red-100 via-red-200 to-red-500"
              />
              <BlogPostCard
                title="MathLap"
                imag="/data/mathla.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-red-100 via-red-200 to-red-500"
              />
              <BlogPostCard
                title="Microsoft Applications"
                imag="/data/office.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-red-100 via-red-200 to-red-500"
              />
              <BlogPostCard
                title="V.S Code"
                imag="/data/vs.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-red-100 via-red-200 to-red-500"
              />
            </div> 
            <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black">
                CMS
            </h3>
            <div className="flex gap-6 flex-col md:flex-row">
              <BlogPostCard
                title="Developer themes Wordpress"
                imag="/data/wp.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-red-100 via-red-200 to-red-500"
              />
            </div> 
            <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black">
                UI & UX
            </h3>
            <div className="flex gap-6 flex-col md:flex-row">
              <BlogPostCard
                title="Adobe XD"
                imag="/data/xd.svg"
                gradient="rounded-xl w-[240px] bg-gradient-to-r p-1 from-red-100 via-red-200 to-red-500"
              />
            </div> 
          </div>     
        </Container>
      </Suspense>
    );
  }
  