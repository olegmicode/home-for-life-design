import { View, Text } from "@react-pdf/renderer";

// Create Document Component
const ClientNoteView = ({ note }) => {
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
    >
      {note}
    </View>
  );
};

export default ClientNoteView;
