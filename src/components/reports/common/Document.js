import { Document } from '@react-pdf/renderer';


// Create Document Component
const ReDocument = ({ children, ...rest }) => {
    return <Document {...rest}>
        {{ ...children }}
    </Document>
};

export default ReDocument
