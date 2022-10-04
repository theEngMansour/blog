import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';;
import NextLink from 'next/link';
// import cn from 'classnames';

/* function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? 'font-semibold text-gray-800 text-gray-200'
            : 'font-normal text-gray-600 text-gray-400',
          'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 hover:bg-gray-800 transition-all'
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
} */

export default function Container(props) {
  const [mounted, setMounted] = useState(false);

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Mansour Ahmed – Developer, creator.',
    description: `Front-end developer, JavaScript, and PHP.`,
    image: '/avater.jpg',
    type: 'website',
    ...customMeta
  };

  return (
    <div dir='ltr' className="bg-gray-50 bg-gray-900 ltr">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://theengmansour.vercel.app${router.asPath}`} />
        <link rel="canonical" href={`https://theengmansour.vercel.app/${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Mansour Ahmed" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mansour_tech" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
        <main
            id="skip"
            className="flex flex-col justify-center px-8 bg-gray-50"
        >
        <br></br>
        {children}
      </main>
    </div>
  );
}






