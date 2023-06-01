import { View, Text } from "@react-pdf/renderer";

// Create Document Component
const PageHeader = ({ data }) => {
  const { partnerOrganizationName } = data;
  return (
    <View
      style={{
        fontSize: 14,
        marginBottom: 28,
        marginRight: 40,
        height: 64.8,
        textAlign: "left",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
      }}
      fixed={true}
    >
      <Text>{partnerOrganizationName}</Text>
      <View style={{ display: "flex", justifyContent: "space-between" }}>
        <Text>Home for Life Design®</Text>
        <Text
          style={{
            fontSize: 12,
          }}
        >
          Home Assessment Report
        </Text>
        <Text
          style={{
            fontSize: 12,
          }}
        >
          Client ID: 2076
        </Text>
      </View>
    </View>
  );
};

export default PageHeader;
