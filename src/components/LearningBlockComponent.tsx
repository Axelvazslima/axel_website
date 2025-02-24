interface LearningBlockProps {
    title: string;
    content: string;
    image: string;
    alt: string;
}

function LearningBlockComponent({title, content, image, alt}: LearningBlockProps) {
return(
    <div className='flex justify-between text-start md:w-[75%] h-fit'>
        <div className='flex flex-col items-start p-2 md:p-4'>
            <h3 className="items-start md:text-2xl text-xl">{title}</h3>
            <p className="md:text-lg text-sm">{content}</p>
        </div>
        <img src={image} alt={alt} className="h-20 w-20"/>
    </div>
    )
}

export default LearningBlockComponent;