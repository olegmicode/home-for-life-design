import { useMemo } from "react";
import { View, Text, Image } from "@react-pdf/renderer";

// Create Document Component
const PageHeader = ({ data }) => {
  const { partnerOrganizationName, partnerLogo } = data;
  const styles = useMemo(
    () => ({
      wrapper: {
        fontSize: 14,
        marginBottom: 28,
        marginRight: 40,
        height: 64.8,
        textAlign: "left",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
      },
      companyInfo: {
        wrapper: {
          display: "flex",
          justifyContent: "space-between",
        },
        title: {
          fontSize: 14,
          fontWeight: "bold",
        },
        poweredBy: {
          wrapper: {
            display: "flex",
            flexDirection: "row",
            fontSize: 10,
            alignItems: "center",
            color: "#777777",
            marginTop: 12,
            marginBottom: 12,
          },
          heading: {
            paddingRight: 2,
          },
          logo: {
            width: 130,
          },
        },
        licience: {
          fontSize: 8,
          color: "#777777",
        },
      },
      partnerInfo: {},
    }),
    []
  );
  const currentYear = new Date().getFullYear();

  return (
    <View style={styles.wrapper} fixed={true}>
      <View style={styles.partnerInfo}>
        <Text style={styles.title}>{partnerOrganizationName}</Text>
      </View>
      <View style={styles.companyInfo.wrapper}>
        <Text style={styles.companyInfo.title}>Home Assessment Report</Text>
        <View style={styles.companyInfo.poweredBy.wrapper}>
          <Text style={styles.companyInfo.poweredBy.heading}>Powered by:</Text>
          <Image src={partnerLogo} style={styles.companyInfo.poweredBy.logo} />
        </View>
        <Text style={styles.companyInfo.licience}>
          @ {currentYear} {partnerOrganizationName} All Rights Reserved.
        </Text>
      </View>
    </View>
  );
};

export default PageHeader;
