import {TPaper} from "@/types/general"
import Paper from "@/components/UI/Paper"
import {calculatePoints} from "@/features/helpers/functions"
import BriefCardBase from "@/components/BriefSummary/BriefCardBase"

const DailyPoints = ({areaName}: TPaper) => {
  const props = areaName ? {areaName} : {}
  const pointsValue = calculatePoints()

  return (
    <Paper {...props}>
      <BriefCardBase
        title={"Daily Points"}
        description={pointsValue}
      />
    </Paper>
  )
}

export default DailyPoints