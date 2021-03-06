import Navbar from "../components/Navbar";
import InstallButton from "../components/InstallButton";
import ExtensionPreview from "../components/ExtensionPreview";
import {Page, PageColumn} from "../components/Page";

export default function RootPage() {
  return (
    <Page
      title="GreenScreen - Consciously Consume"
      nav={<Navbar activePage="root" />}
      layout="columns">
      <PageColumn>
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
      </PageColumn>
      <PageColumn>
        <ExtensionPreview />
      </PageColumn>
    </Page>
  );
}
