import type { NextPage } from 'next'
import { FilledButton, WhiteButton } from '../../../components'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from "axios";

const Details: NextPage = () => {
    const router = useRouter();
    const id = router.query.id;
    const [title, setTitle] = useState<string>("タイトル");

    const handleEditButtonOnClick = () => {
        router.push({
          pathname: `/category_1/detail/${id}/edit`,
        })
    }

    const handleBackButtonOnClick = () => {
        router.back()
    }

    const getDetail = async () => {
      // https://zenn.dev/tronperidot/articles/c1dc86c634cbc30b3a3d
      const id = router.asPath.split("/")[3];
      const response = await axios.get(`../../api/categories_1/${id}`);
      if (response.status !== 200) {
        return;
      }
      // console.log(response.data);
      setTitle(response.data.data.title);
    }

    useEffect(() => {
      getDetail();
    }, []);

  return (
    <>
     <h1 className='text-4xl'>詳細 - {title}</h1>
        <div className='flex justify-end'>
            <WhiteButton title='戻る' onClick={handleBackButtonOnClick}/>
            <FilledButton title='編集' onClick={handleEditButtonOnClick}/>
        </div>
    </>
  )
}

export default Details