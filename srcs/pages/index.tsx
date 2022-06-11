import { useRouter } from 'next/router'
import { useEffect } from 'react';

const Home = () => {
  const router = useRouter()

  // ホームディレクトリへのリクエスト時に、カテゴリー0画面へ遷移させる
  useEffect(() => {
    const path = router.basePath
    console.log(path)
    if (path == '') {
      router.replace('/category_0')
    }
  }, []);

  return
}

export default Home
