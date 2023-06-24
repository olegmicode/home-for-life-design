import { Page } from "@react-pdf/renderer";
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";

// Create Document Component
const RePage = ({ data, clientReportCode, children, ...rest }) => {
  return (
    <Page
      style={{
        paddingLeft: 23,
        paddingRight: 18,
        paddingTop: 15,
        paddingBottom: 35,
        color: "#333333",
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
