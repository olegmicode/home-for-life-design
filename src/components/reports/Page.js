import { Page } from '@react-pdf/renderer';


// Create Document Component
const RePage = ({ children }) => {
    return <Page>
        <PageHeader />
        { ...children }
        <PageFooter />
    </Page>
};

export default RePage
