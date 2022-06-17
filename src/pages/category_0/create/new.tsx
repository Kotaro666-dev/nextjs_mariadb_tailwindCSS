import type { NextPage } from 'next'
import { FilledButton, WhiteButton } from '../../../components'
import { useRouter } from 'next/router'

const Create: NextPage = () => {
    const router = useRouter()

    const handleCreateButtonOnClick = () => {
        router.push({
          pathname: `/category_0`
        })
    }

    const handleBackButtonOnClick = () => {
        router.back()
    }

  return (
    <>
     <h1 className='text-4xl'>新規作成 - タイトル</h1>
        <div className='flex justify-end'>
            <WhiteButton title='戻る' onClick={handleBackButtonOnClick}/>
            <FilledButton title='編集' onClick={handleCreateButtonOnClick}/>
        </div>
    </>
  )
}

export default Create