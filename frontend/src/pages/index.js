import CustomHead from 'components/Customhead'
import Header from 'components/header'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from 'styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <CustomHead title={'Home'} description={'Home Description'} />
      <div>
        <Header />
        <main>
          {/* Contenido de la página */}
        </main>
        {/* Footer y otros componentes */}
      </div>
    </>
  )
}
