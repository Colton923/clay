import 'styles/globals.scss'
import Navbar from 'components/navbar/Navbar'
import { SiteContextProvider } from 'context/SiteContext'
import Footer from 'components/footer/Footer'
import { Open_Sans } from 'next/font/google'
interface Props {
  children: React.ReactNode
}

const Font = Open_Sans({
  display: 'swap',
  weight: ['300', '400', '800'],
  subsets: ['latin'],
})

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={Font.className}>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <title>Clay Construction Services</title>
        <meta
          name="description"
          content="At Clay Construction Services, we provide superior commercial and residential building restoration, renovation, and repair services in Virginia, Washington D.C. and Maryland. Contact us today to learn more"
        />
        <meta name="author" content="Colton McClintock - Webdev Solutions LLC" />
        <meta
          name="keywords"
          content="commercial building restoration, residential building renovation, property repair services, Virginia, Washington D.C., Maryland"
        />
        <meta name="theme-color" content="#000000" />
        <meta name="language" content="English" />
        {/* <meta name='revisit-after' content='7 days' /> */}
        <meta name="web_author" content="Colton McClintock - Webdev Solutions LLC" />
        <meta name="reply-to" content='<a href="mailto:me@gmail.com">' />
        <meta name="owner" content="Clay Construction Services" />
        <meta name="url" content="https://clayconstructionservices.com" />
        <meta name="identifier-URL" content="https://clayconstructionservices.com" />
        <meta name="category" content="Building Restoration" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="google" content="notranslate" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="google" content="notranslate" />
        <meta property="og:title" content="Clay Construction Services" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://clayconstructionservices.com" />
        <meta
          property="og:image"
          content="https://clayconstructionservices.com/images/og-image.jpg"
        />
        <meta
          property="og:description"
          content="At Clay Construction Services, we provide superior commercial and residential building restoration, renovation, and repair services in Virginia, Washington D.C. and Maryland. Contact us today to learn more"
        />
        <meta property="og:site_name" content="Clay Construction Services" />
        <meta property="article:publisher" content="" />
        <meta property="og:locale" content="en_US" />
        {/* This meta tag is for your representative image <meta property="og:image" content="https://westernspecialtycontractors.com/wp-content/uploads/2020/07/Peopleatwork-scaled.jpg" /> */}
        <meta property="og:image:width" content="2560" />
        <meta property="og:image:height" content="1707" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:label1" content="" />
        <meta name="twitter:data1" content="" />
        {/* This meta tag is for bing <meta name="msvalidate.01" content="" /> */}
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <main>
          <SiteContextProvider>
            <Navbar />
            {children}
            <Footer />
          </SiteContextProvider>
        </main>
      </body>
    </html>
  )
}
