import {Page} from "../components/Page";
import Navbar from "../components/Navbar";
import {useEffect, useState} from "react";
import UAParser from "ua-parser-js";
import Link from "../components/Link";
import Router from "next/router";

type DetectionState = 'detecting' | 'supported' | 'unsupported';

export default function InstallPage() {

  const [browserName, setBrowserName] = useState<string | null>(null);
  const [detectionState, setDetectionState] = useState<DetectionState>("detecting");

  useEffect(() => {
    const userAgentParser = new UAParser();
    setBrowserName(userAgentParser.getBrowser().name);
  }, [])

  useEffect(() => {
    if (browserName != null) {
      if (browserName.toLowerCase().includes("firefox")) {
        setDetectionState("supported");
        const _ = Router.replace("https://addons.mozilla.org/en-US/firefox/addon/greenscreeneco/")
      } else {
        setDetectionState("unsupported");
      }
    }
  }, [browserName]);

  return (
    <Page title={"GreenScreen - Install Extension"} nav={<Navbar activePage={null} />} layout="single">
      <h2>Install Our Extension</h2>
      {detectionState == "detecting" && <p>
        Detecting browser... please wait.
      </p>}
      {detectionState == "supported" && <p>
        We detect you are using {browserName}. Redirecting you to the extension website...
      </p>}
      {detectionState == "unsupported" && <p>
        We don't know or don't support the browser you are using.
      </p>}
      <p>
        You may manually install our extension by visiting the appropriate page for your browser:
        <ul>
          <li><Link href={"https://addons.mozilla.org/en-US/firefox/addon/greenscreeneco/"}>Firefox</Link></li>
        </ul>
      </p>
    </Page>
  )
}