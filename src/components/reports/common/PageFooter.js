import { View, Text, Link } from "@react-pdf/renderer";
import { useMemo } from "react";

// Create Document Component
const PageFooter = ({ data }) => {
  const { reportCode } = data;
  const styles = useMemo(() => ({
    links: {
      fontSize: 10,
      marginBottom: 10,
    },
    wrapper: {
      position: "absolute",
      fontSize: 10,
      bottom: 20,
      left: 0,
      right: 0,
      textAlign: "center",
      color: "grey",
    },
  }));
  return (
    <View style={styles.wrapper} fixed={true}>
      <Link
        style={styles.links}
        src={`https://uat-hflweb.azurewebsites.net/report/clientreport?code=${reportCode}`}
      >
        https://uat-hflweb.azurewebsites.net/report/clientreport?code=
        {reportCode}
      </Link>
      <Text
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
    </View>
  );
};

export default PageFooter;
