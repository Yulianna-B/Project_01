interface ProfileCardProps {
    avatar: string;
    name: string;
    description: string;
  }
  
  export default function ProfileCard(props: ProfileCardProps) {
    const { avatar, name, description } = props;
  
    return (
      <div>
        <h2>{name}</h2>
        <img src={avatar} alt={"User avatar:" + name} />
        <p>{description}</p>
      </div>
    );
  }
