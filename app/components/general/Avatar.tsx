import Image from "next/image";
import { RxAvatar } from "react-icons/rx";

interface AvatarProps {
  image?: string;
}

const Avatar: React.FC<AvatarProps> = ({ image }) => {
  if (image) return <Image src={image} alt="avatar" height={35} width={35} />;
  return (
    <div>
      <RxAvatar size="35" />
    </div>
  );
};

export default Avatar;
