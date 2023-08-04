interface AppImageProps extends React.HTMLProps<HTMLImageElement> {
    src: string;
    alt: Exclude<string, ''>; // Mandatory accessibility attr
}

const AppImage: React.FC<AppImageProps> = (props) => {
    return <img {...props} />;
};

export default AppImage;