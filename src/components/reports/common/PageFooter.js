import { View, Text } from "@react-pdf/renderer";
import { useMemo } from "react";

// Create Document Component
const PageFooter = () => {
  const styles = useMemo(() => ({
    position: "absolute",
    fontSize: 12,
    bottom: 20,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  }));
  return (
    <View style={styles} fixed={true}>
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
    </View>
  );
};

export default PageFooter;
