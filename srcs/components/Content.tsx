type Props = {
    title: string,
    body: React.ReactNode
}

const Content: React.FC<Props> = (props: Props) => {
    return (
        <>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex flex-col">
              <div className='bg-indigo-300'>
                  <p className="block mt-1 text-lg leading-tight font-medium text-black py-2 pl-4">{props.title}</p>
              </div>
             <div>{props.body}</div>
            </div>
        </div>
        </>
    )
}

export default Content