import Navbar from "../components/Navbar";
import EmployeeProfile from "../components/EmployeeProfile";
import {Page} from "../components/Page";

export default function AboutUsPage() {
  return (
    <Page title="GreenScreen - About Us" nav={<Navbar activePage={"about-us"} />} layout="simple">
      <h2>About Us</h2>
      <p>
        We are a tech Startup focusing on bridging the gap between consumption patterns and environmental action.
      </p>
      <h3>Team</h3>
      <EmployeeProfile fullName="Bridget Downey" positionTitle={"Co-Owner"} />
      <EmployeeProfile fullName="Winona Schroeer-Smith" positionTitle={"Engineering Lead"} />
    </Page>
  )
}
