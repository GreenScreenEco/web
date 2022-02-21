import {Page} from "../components/Page";
import Navbar from "../components/Navbar";

export default function InstallPage() {
  return (
    <Page title={"GreenScreen - Install Extension"} nav={<Navbar activePage={null} />} layout="single">
      <h2>Install Our Extension</h2>
      <p>
        Thank you for your interest! Our extension is still in development. When we finish it, the install button will
        lead you to your browser's extension store.
      </p>
    </Page>
  )
}