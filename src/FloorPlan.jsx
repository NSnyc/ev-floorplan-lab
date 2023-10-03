import Bedroom from "./Bedroom"
import LivingRoom from "./LivingRoom"

const FloorPlan = (props) => {
  return (
    <div>
      <Bedroom bedNum="1" />
      <Bedroom bedNum="2" />
      <LivingRoom />
      <Bedroom bedNum="3" />
    </div>
  )
}
export default FloorPlan
