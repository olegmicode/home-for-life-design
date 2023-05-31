import { View, StyleSheet, Text } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    header: {
        fontSize: 12,
        marginBottom: 10,
        textAlign: 'center',
    },
})

// Create Document Component
const PageHeader = ({ data, children }) => {
    return <View style={styles.header}>
        <Text>Header Section</Text>
    </View>
};

export default PageHeader
