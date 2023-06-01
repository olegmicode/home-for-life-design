import { View, Text } from "@react-pdf/renderer";

// Create Document Component
const PageFooter = () => {
  return (
    <View
      style={{
        fontSize: 10,
        paddingTop: 10,
        paddingBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
        textAlign: "center",
      }}
      fixed={true}
    >
      <Text>Footer Section - Page numbers go here</Text>
    </View>
  );
};

export default PageFooter;
