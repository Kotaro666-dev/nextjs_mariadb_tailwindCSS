
import Header from "./Header"
import SideBar from "./SideBar"

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
    return(
        <div className="flex flex-col h-screen">
            <Header/>
            <div className="flex-auto flex">
                <SideBar/>
                <main className="grow mx-[50px] mt-10">{props.children}</main>
            </div>
        </div>
    )
}

export default Layout