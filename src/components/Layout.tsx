 import type { ReactNode } from "react"
import Footer from "./Footer"
import NavBar from "./Navbar"


interface Iprop {
    children: ReactNode

}

const Layout = ({children}: Iprop) => {
  return (
    <div>
      <NavBar />
        <main>{children}</main>
        <Footer />
    </div>
  )
}

export default Layout