import styles from './FileCard.module.sass';

export interface IFileCard {
  cid: string;
  name: string;
  deal_id: string;
}

const FileCard: React.FC<IFileCard> = ({ cid, name, deal_id }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card__body}>
          <span className={`${styles.tag} ${styles['tag-blue']}`}>{cid}</span>
          <h4>{name}</h4>
        </div>
      </div>
    </div>
  );
};

export default FileCard;
