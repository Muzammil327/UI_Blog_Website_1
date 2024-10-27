import React from 'react'
import About from '@/src/components/dropbox/about/page'
import Blog from '@/src/components/dropbox/blog/page'
import Footer from '@/src/components/dropbox/footer/page'
import Service from '@/src/components/dropbox/service/page'
import Testionmial from '@/src/components/dropbox/testionmial/page'

export default function page() {
  return (
    <React.Fragment>
    <main>
      <About />
      <Testionmial />
      <Service />
      <Blog />
    </main>
    <Footer />
  </React.Fragment>
  )
}
