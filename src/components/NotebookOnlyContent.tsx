interface NotebookOnlyContentProps {
    children?: React.ReactNode;
}

const NotebookOnlyContent = ({ children }: NotebookOnlyContentProps) => {

return(
    <>
        {children}   
    </>
    );
}

export default NotebookOnlyContent;