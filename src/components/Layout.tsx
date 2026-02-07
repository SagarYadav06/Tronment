 import type { ReactNode } from "react"
import Footer from "./Footer"
import Navbar from "./NavBar"

interface Iprop {
    children: ReactNode

}

const Layout = ({children}: Iprop) => {
  return (
    <div>
        <Navbar />
        <main>{children}</main>
        <Footer />
    </div>
  )
}

export default Layout