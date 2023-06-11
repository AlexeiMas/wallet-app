import DetailHead from "@/components/DetailHead"
import DetailSummary from "@/components/DetailSummary"
import {useParams} from "react-router-dom"
import data from "@/assets/data.json"
import {IData} from "@/types/data"

const TransactionDetail = () => {
  const {id} = useParams<{ id: string }>()
  const itemData = data.find(el => el.id === id) as IData

  return (
    <div>
      {
        itemData &&
        <>
          <DetailHead data={itemData}/>
          <DetailSummary data={itemData}/>
        </>
      }
    </div>
  )
}

export default TransactionDetail