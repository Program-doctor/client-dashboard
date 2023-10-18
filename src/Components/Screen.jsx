import CompressedNav from "./CompressedNav";
import DataScreen from "./DataScreen";
import Header from "./Header";

const Screen = () => {
  return (
    <div className="Screen">
      <CompressedNav/>
      <div className="Header-body">

      <Header/>
      <DataScreen/>
      </div>
    </div>
  )
}

export default Screen