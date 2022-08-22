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
          <h1>Consciously Consume</h1>
          <p>
            Hold the companies you shop at accountable for sustainability.
          </p>
          <p>
            We evaluate thousands of companies to give you real time, easy to access information about their
            environmental practices.
          </p>
          <p>
            Our sustainability score helps you make informed decisions when you browse or shop, with data sourced from a
            variety of independent environmental research organizations.
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
