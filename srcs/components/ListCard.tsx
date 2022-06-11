import { Card } from "../pages/category_0"
import { useRouter } from 'next/router'

const ListCard: React.FC<{ items: Card[] }> = (props) => {
    const router = useRouter()
    const basePath = router.pathname

    const handleItemOnClick = (card: Card) => {
        router.push({
            pathname: `${basePath}/details/[id]`,
            query: { id: card.id, title: card.title},
        })
      }

    return (
        <div className="bg-white overflow-hidden rounded-md border-2 border-gray-300">
        <ul role="list" className="divide-y divide-gray-300">
            <li className="h-7" />
            {props.items.map((item, index) => (
            <li key={item.id} className={`px-6 py-2.5 ${index % 2 == 0 && 'bg-gray-100'}`} onClick={() => handleItemOnClick(item)} >
                <p>{item.title}</p>
            </li>
            ))}
        </ul>
        </div>
    )
}

export default ListCard