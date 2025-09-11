import styles from "./ProfileCard.module.css";

interface ProfileCardProps {
  avatar: string;
  name: string;
  description: string;
}

export default function ProfileCard(props: ProfileCardProps) {
  const { avatar, name, description } = props;

  const fallbackUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s";

  return (
    <div className={styles.container}>
      <h2 className={styles.name}>{name}</h2>
      <img src={avatar || fallbackUrl} alt={"User avatar: " + name} />
      <p className={styles.userDescription}>{description}</p>
    </div>
  );
}
