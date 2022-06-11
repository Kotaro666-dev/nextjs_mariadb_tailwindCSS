
import Header from "./Header"
import SideBar from "./SideBar"

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
    return(
        <div>
            <Header/>
            <SideBar/>
            <main>{props.children}</main>
        </div>
    )
}

export default Layout