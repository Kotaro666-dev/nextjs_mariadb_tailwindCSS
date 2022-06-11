import { useState } from 'react'
import type { NextPage } from 'next'
import { DataEmptyBanner, FilledButton } from '../../components'
import { useRouter } from 'next/router'


const Category_0: NextPage = () => {
  const router = useRouter()
  const [isData, setIsData] = useState<boolean>(false);

  const handleOnClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      e.preventDefault()
      router.push('./category_0/details')
  }

  const Body = () => {
    if (!isData) {
      return (
        <div className='mt-10'>
          <DataEmptyBanner title='カテゴリー0' />
        </div>
      )
    } else {
      return (
        <div  className='mt-10'>
          <p>データがあります</p>
        </div>
      )
    }
  }

  return (
    <>
      <h1 className='text-4xl'>カテゴリー0</h1>
      <div className='flex justify-end'>
        <FilledButton title='詳細画面' onClick={handleOnClick}/>
      </div>
      {Body()}
    </>
  )
}

export default Category_0