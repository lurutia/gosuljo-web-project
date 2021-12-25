import { NextPageWithLayout } from "../types/layout";

const PresentationLayout: NextPageWithLayout = ({children}) => {
    return (
        <>{children}</>
    )
}

export default PresentationLayout;