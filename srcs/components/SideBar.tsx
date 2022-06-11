import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from '@heroicons/react/outline'

interface Category {
  name: string,
  href: string,
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
}

const items: Category[] = [
  { name: 'カテゴリー0', href: '/', icon: HomeIcon, },
  { name: 'カテゴリー1', href: '/category_1', icon: UsersIcon },
  { name: 'カテゴリー2', href: '/category_2', icon: FolderIcon },
  { name: 'カテゴリー3', href: '/category_3', icon: CalendarIcon },
  { name: 'カテゴリー4', href: '/category_4', icon: InboxIcon },
]

const SideBar = () => {
  return (
    <div className="md:flex md:w-64">
      <div className="flex-1 flex flex-col min-h-0 bg-indigo-700">
          <nav className="mt-5 flex-1 px-2 space-y-5">
            {items.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group flex items-center px-3 py-3 text-sm text-white font-medium rounded-md"
              >
                <item.icon className="mr-3 flex-shrink-0 h-8 w-8 text-indigo-300" aria-hidden="true" />
                {item.name}
            </a>
            ))}
          </nav>
      </div>
   </div>
  )
}

export default SideBar
