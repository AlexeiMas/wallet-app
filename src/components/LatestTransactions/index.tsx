import Paper from "@/components/UI/Paper"
import styled from "styled-components"
import TransactionItem from "@/components/LatestTransactions/TransactionItem"
import data from "@/assets/data.json"
import {IData} from "@/types/data.ts"

const ListWrapper = styled.ul`
  list-style: none;
  padding-left: 1.2rem;

  li {
    border-bottom: 1px solid var(--hr-color);
    padding: 10px 0;
  }

  li:last-child {
    border-bottom: none;
  }
`
const EmptyList = styled.p`
  text-align: center;
`

const LatestTransactions = () => {

  if (data?.length === 0) {
    return (
      <Paper>
        <EmptyList>No transactions yet</EmptyList>
      </Paper>
    )
  }

  return (
    <Paper p0>
      <ListWrapper>
        {data.map(item =>
          <TransactionItem data={item as IData} key={item.id}/>
        )}
      </ListWrapper>
    </Paper>
  )
}

export default LatestTransactions