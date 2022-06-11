import type { NextPage } from 'next'
import { FilledButton, WhiteButton } from '../../components'
import { useRouter } from 'next/router'


const Edit: NextPage = () => {
    const router = useRouter()

    const handleSaveButtonOnClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault()
        router.back()
    }

    const handleBackButtonOnClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault()
        router.back()
    }

  return (
    <>
     <h1 className='text-4xl'>編集</h1>
        <div className='flex justify-end'>
            <WhiteButton title='戻る' onClick={handleBackButtonOnClick}/>
            <FilledButton title='登録' onClick={handleSaveButtonOnClick}/>
        </div>
    </>
  )
}

export default Edit