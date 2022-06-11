import type { NextPage } from 'next'
import { FilledButton } from '../../components'
import { useRouter } from 'next/router'


const Category_0: NextPage = () => {
  const router = useRouter()

  const handleOnClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      e.preventDefault()
      router.push('./category_0/details')
  }

  return (
    <>
      <h1 className='text-4xl'>カテゴリー0</h1>
      <div className='flex justify-end'>
        <FilledButton title='詳細画面' onClick={handleOnClick}/>
      </div>

    </>
  )
}

export default Category_0