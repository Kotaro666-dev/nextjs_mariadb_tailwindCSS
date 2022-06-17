import type { NextPage } from 'next'
import { FilledButton, WhiteButton } from '../../../components'
import { useRouter } from 'next/router'

const Details: NextPage = () => {
    const router = useRouter();

    const handleEditButtonOnClick = () => {
        router.push('/category_0/detail/0/edit')
    }

    const handleBackButtonOnClick = () => {
        router.back()
    }

  return (
    <>
     <h1 className='text-4xl'>詳細 - タイトル</h1>
        <div className='flex justify-end'>
            <WhiteButton title='戻る' onClick={handleBackButtonOnClick}/>
            <FilledButton title='編集' onClick={handleEditButtonOnClick}/>
        </div>
    </>
  )
}

export default Details