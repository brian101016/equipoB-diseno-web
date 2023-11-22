import ImageProvider from "@utils/ImageProvider";

type Image_TitleProps = {
    title: string;
    bgColor: string;
};

const Image_Title = (props: Image_TitleProps) => {
    console.log("bgColor:", props.bgColor);
    return (
        <div className="imageTitle">
            <div
                className="image-background"
                style={{
                    backgroundImage: `url('${ImageProvider.background.buttonClassSVG}')`,
                    backgroundColor: `${props.bgColor}`
                }}
            ></div>
            <h1 className="title">{props.title || "Titulo de materia"}</h1>
        </div>
    );
};

export default Image_Title;