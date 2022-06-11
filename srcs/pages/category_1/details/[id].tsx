import type { NextPage } from 'next'
import { FilledButton, WhiteButton } from '../../../components'
import { useRouter } from 'next/router'

const Details: NextPage = () => {
    const router = useRouter()
    const query = router.query

    const handleEditButtonOnClick = () => {
        router.push('../edit')
    }

    const handleBackButtonOnClick = () => {
        router.back()
    }

  return (
    <>
     <h1 className='text-4xl'>詳細 - {query.title}</h1>
        <div className='flex justify-end'>
            <WhiteButton title='戻る' onClick={handleBackButtonOnClick}/>
            <FilledButton title='編集' onClick={handleEditButtonOnClick}/>
        </div>
    </>
  )
}

export default Details