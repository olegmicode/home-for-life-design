import { View, StyleSheet, Text } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    footer: {
        fontSize: 10,
        paddingTop: 10,
        paddingBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
        textAlign: 'center',
    },
})

// Create Document Component
const PageFooter = () => {
    return  <View style={styles.footer}>
    <Text>Footer Section - Page numbers go here</Text>
  </View>
};

export default PageFooter
