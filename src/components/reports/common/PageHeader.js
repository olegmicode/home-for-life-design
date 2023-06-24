import { useMemo } from "react";
import { View, Text, Image } from "@react-pdf/renderer";
import FloridaLogo from "../../../assets/logos/FACIL_Logo.png";

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
            marginTop: 16,
            marginBottom: 16,
          },
          heading: {
            paddingRight: 2,
          },
          logo: {
            width: 130,
            height: 30,
          },
        },
        licience: {
          fontSize: 8,
          color: "#777777",
        },
      },
      partnerInfo: {
        logo: {
          width: "auto",
          height: "100%",
        },
        wrapper: {
          padding: 0,
          height: 70,
        },
      },
    }),
    []
  );
  const currentYear = new Date().getFullYear();

  return (
    <View style={styles.wrapper} fixed={true}>
      <View style={styles.partnerInfo.wrapper}>
        <Image src={FloridaLogo} style={styles.partnerInfo.logo} />
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
