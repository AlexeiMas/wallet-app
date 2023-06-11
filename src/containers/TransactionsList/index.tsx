import BriefSummary from "@/components/BriefSummary"
import LatestTransactions from "@/components/LatestTransactions"

const TransactionsList = () => {
  return (
    <div>
      <BriefSummary/>
      <h2>Latest Transactions</h2>
      <LatestTransactions/>
    </div>
  )
}

export default TransactionsList