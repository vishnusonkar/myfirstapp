import Techdata ,{TechHeading, TechLabelName} from "../../TechStore";

import List from "../List";

function Tech() {
  return (
    <List
      StoredData={Techdata}
      Heading={TechHeading}
      LabelName={TechLabelName}
    />
  );
}
export default Tech;
