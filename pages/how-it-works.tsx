import {Page} from "../components/Page";
import Navbar from "../components/Navbar";

export default function HowItWorksPage() {
  return (
    <Page title="GreenScreen - How It Works" nav={<Navbar activePage="how-it-works" />} layout="simple">
      <h2>How It Works</h2>
      <p>
        We provide a downloadable browser extension that will give you real time information about
        the environmental practices of various companies. Each company has a  “sustainability score” that will pop up on
        screen when you visit that company’s site.
      </p>
      <p>
        Each company has a general score, as well as subscores for various issues such as carbon emissions,
        labor rights, and water pollution. You can use these scores to learn more about a company's overall
        sustainability, and to evaulate that company against your personal priorities.
      </p>
      <p>
        The scores are based on a number of reporting standards, including
        GRI, CDP, MS ESG Ratings, Sustainalytics, Dow Jones Sustainability Index, GRESB, OEKO-TEX, and GOTS.
        We download and aggregate their research into our easy-to-use sustainability score.
      </p>
    </Page>
  )
}