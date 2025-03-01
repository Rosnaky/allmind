interface VideoEmbedProps {
    videoUrl: string;
}


const VideoEmbed: React.FC<VideoEmbedProps> = ({ videoUrl }) => {
    return (
        <iframe
            width="100%"
            height="100%"
            src={videoUrl}
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0"
        />
    );
}

export default VideoEmbed;