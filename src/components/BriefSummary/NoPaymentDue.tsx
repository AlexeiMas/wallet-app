import {TPaper} from "@/types/general"
import Paper from "@/components/UI/Paper"
import {getFullMonth} from "@/features/helpers/functions"
import BriefCardBase from "@/components/BriefSummary/BriefCardBase"

const NoPaymentDue = ({areaName}: TPaper) => {
  const props = areaName ? {areaName} : {}
  const currentMonth = getFullMonth()

  return (
    <Paper {...props}>
      <BriefCardBase
        title={"No Payment Due"}
        description={`You've paid your ${currentMonth} balance.`}
        isAdditional
      />
    </Paper>
  )
}

export default NoPaymentDue