import "../../pages/projectContent/ProjectContent.css"

interface Props {
    src: string;
    alt: string;
    caption?: string;
}

export default function ProjectContentImage({
                                                src,
                                                alt,
                                                caption,
                                            }: Props) {
    return (
        <figure className="project-content-figure">

            <img
                src={src}
                alt={alt}
                className="project-content-image"
                // style={{maxWidth: '100%'}}
            />

            {caption && (
                <figcaption className="project-content-caption">
                    {caption}
                </figcaption>
            )}

        </figure>
    );
}