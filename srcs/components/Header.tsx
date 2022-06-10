const Header = () => {
    return (
      <header className="bg-indigo-600 w-full h-20 flex items-center pl-5">
        <a href="#">
            <span className="sr-only">Workflow</span>
            <img
                className="h-10 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                alt=""
            />
            </a>
      </header>
    )
  }

export default Header
