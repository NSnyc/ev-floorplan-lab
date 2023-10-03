import Bedroom from "./Bedroom"
import LivingRoom from "./LivingRoom"
import Bath from "./Bath"

const FloorPlan = (props) => {
  return (
    <div>
      <Bedroom bedNum="1" />
      <Bath size="Full" />
      <Bedroom bedNum="2" />
      <LivingRoom />
      <Bath size="Half" />
      <Bedroom bedNum="3" />
    </div>
  )
}
export default FloorPlan
