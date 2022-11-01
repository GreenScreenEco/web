import Navbar from "../components/Navbar";
import InstallButton from "../components/InstallButton";
import ExtensionPreview from "../components/ExtensionPreview";
import {Page} from "../components/Page";
import {ColumnSection} from "../components/ColumnSection";
import {RowSection} from "../components/RowSection";

export default function RootPage() {
  return (
    <Page
      title="GreenScreen - Consciously Consume"
      nav={<Navbar activePage="root" />}
      layout="focused">
      <RowSection>
        <h1>GreenScreen</h1>
        <h3>The power to purchase with intention.</h3>
        <p>We find the data on brand sustainability. You use it to power impactful purchases. An easy way to consciously consume.</p>
        <br style={{marginBottom: "2em"}}/>
      </RowSection>
      <ColumnSection>
        <div>
          <h4>Reward conscious consumption</h4>
          <p>We want you to participate in and be rewarded for supporting the conscious consumption movement.</p>
        </div>
        <div>
          <h4>Address Greenwashing</h4>
          <p>Stop retail companies from labeling unsustainable products as sustainable and environmentally friendly.</p>
        </div>
        <div>
          <h4>Bring transparent data</h4>
          <p>Provide easy to access, reliable data on the sustainable practices of retail companies.</p>
        </div>
      </ColumnSection>

      <ColumnSection>
        <div>
          <br/>
          <h3 className={"signatureGradient"}>Consciously Consume</h3>
          <p>
            Our browser extension gives you the power to purchase with intention.
          </p>
          <p>
            See sustainability scores while you shop with our easy-to-use browser extension. We commit to providing you
            with quality information to make independent decisions. We do not track you and we do not sell your information.
          </p>
          <p>
            Start consciously consuming today.
          </p>
          <InstallButton style="extended-with-logos" />
        </div>
        <div>
          <ExtensionPreview />
        </div>
      </ColumnSection>
    </Page>
  );
}
