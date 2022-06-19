import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { DataEmptyBanner, FilledButton, ListCard } from '../../components'
import { Card } from '../category_0'
import axios from "axios";

const Category_1: NextPage = () => {
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [isData, setIsData] = useState<boolean>(false);
  const [card, setCard] = useState<Card[]>([]);

  const getCard = async () => {
    const response = await axios.get("api/category_1");
    if (response.status !== 200) {
      setIsInitialized(true);
      return;
    }
    const data = response.data.data;
    setCard(data);
    setIsData(true);
    setIsInitialized(true);
  }

  useEffect(() => {
    getCard();
  }, []);

  const Body = () => {
    if (!isInitialized) {
      return <div></div>;
    } else if (!isData) {
      return (
        <div className='mt-10'>
          <DataEmptyBanner title='カテゴリー1' />
        </div>
      )
    } else {
      return (
        <div  className='mt-10'>
          <ListCard items={card}/>
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