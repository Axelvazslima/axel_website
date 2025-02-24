interface MobileOnlyProps {
    children?: React.ReactNode;
}

const MobileOnlyContent = ({ children }: MobileOnlyProps) => {
    return(
        <>
            { children }
            </>
        );
}

export default MobileOnlyContent;