import { useState } from 'react'
import type { NextPage } from 'next'
import { DataEmptyBanner, FilledButton, ListCard } from '../../components'
import { Card } from '../category_0'

const items: Card[] = [
  { id: 0, title: 'テスト0' },
  { id: 1, title: 'テスト1' },
  { id: 2, title: 'テスト2' },
  { id: 3, title: 'テスト3' },
  { id: 4, title: 'テスト4' },
  { id: 5, title: 'テスト5' },
  { id: 6, title: 'テスト6' },
  { id: 7, title: 'テスト7' },
  { id: 8, title: 'テスト8' },
  { id: 9, title: 'テスト9' },
]


const Category_1: NextPage = () => {
  const [isData, setIsData] = useState<boolean>(true);

  const Body = () => {
    if (!isData) {
      return (
        <div className='mt-10'>
          <DataEmptyBanner title='カテゴリー1' />
        </div>
      )
    } else {
      return (
        <div  className='mt-10'>
          <ListCard items={items}/>
        </div>
      )
    }
  }

  return (
    <>
      <h1 className='text-4xl'>カテゴリー1</h1>
      {Body()}
    </>
  )
}

export default Category_1