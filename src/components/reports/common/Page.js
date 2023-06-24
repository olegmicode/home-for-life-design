import { Font, Page } from "@react-pdf/renderer";
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";

import RobotoBlack from "../../../assets/fonts/Roboto-Black.ttf";
import RobotoItalic from "../../../assets/fonts/Roboto-Italic.ttf";
import RobotoMediumItalic from "../../../assets/fonts/Roboto-MediumItalic.ttf";
import RobotoBlackItalic from "../../../assets/fonts/Roboto-BlackItalic.ttf";
import RobotoLight from "../../../assets/fonts/Roboto-Light.ttf";
import RobotoRegular from "../../../assets/fonts/Roboto-Regular.ttf";
import RobotoBold from "../../../assets/fonts/Roboto-Bold.ttf";
import RobotoLightItalic from "../../../assets/fonts/Roboto-LightItalic.ttf";
import RobotoThin from "../../../assets/fonts/Roboto-Thin.ttf";
import RobotoBoldItalic from "../../../assets/fonts/Roboto-BoldItalic.ttf";
import RobotoMedium from "../../../assets/fonts/Roboto-Medium.ttf";
import RobotoThinItalic from "../../../assets/fonts/Roboto-ThinItalic.ttf";
// Create Document Component

const RePage = ({ data, clientReportCode, children, ...rest }) => {
  Font.register({ family: "Roboto", src: RobotoThin, fontWeight: 100 });
  Font.register({ family: "Roboto", src: RobotoLight, fontWeight: 300 });
  Font.register({ family: "Roboto", src: RobotoRegular });
  Font.register({ family: "Roboto", src: RobotoItalic, fontStyle: "italic" });
  Font.register({ family: "Roboto", src: RobotoBold, fontWeight: "bold" });
  Font.register({
    family: "Roboto",
    src: RobotoBoldItalic,
    fontWeight: "bold",
    fontStyle: "italic",
  });
  Font.register({ family: "Roboto", src: RobotoMedium, fontWeight: 500 });
  Font.register({
    family: "Roboto",
    src: RobotoMediumItalic,
    fontWeight: 500,
    fontStyle: "italic",
  });

  return (
    <Page
      style={{
        paddingLeft: 23,
        paddingRight: 18,
        paddingTop: 15,
        paddingBottom: 35,
        color: "#333333",
        fontFamily: "Roboto",
      }}
      {...rest}
      wrap
    >
      <PageHeader data={data} />
      {children}
      <PageFooter data={data} />
    </Page>
  );
};

export default RePage;
