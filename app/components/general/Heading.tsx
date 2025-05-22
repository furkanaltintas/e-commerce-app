interface HeadingProps {
  center?: boolean;
  text: string;
  useDefaultStyles?: boolean;
  customClassName?: string;
}

const Heading: React.FC<HeadingProps> = ({
  text,
  center = false,
  useDefaultStyles = true,
  customClassName = "",
}) => {
  const defaultStyles = "text-slate-500 my-3 md:my-5 px-3 md:px-12 md:text-xl";
  const appliedClassName = `${
    useDefaultStyles ? defaultStyles : customClassName
  } ${center ? "text-center" : "text-start"}`;

  return <div className={appliedClassName}>{text}</div>;
};

export default Heading;
