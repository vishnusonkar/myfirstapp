import sdata,{Heading, LabelName} from "../../Sdata"

import List from "../List";

function Webseries() {
  return <List StoredData={sdata} Heading={Heading} LabelName={LabelName} />;
}
export default Webseries;
