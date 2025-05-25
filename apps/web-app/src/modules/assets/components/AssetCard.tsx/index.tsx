import { Asset } from '../../hooks/useAssets';
import styles from './Card.module.css';


interface Props {
  asset: Asset;
}

export default function AssetCard({ asset }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2>{asset.item}</h2>
        <span className={styles.status}>{asset.status}</span>
          </div>
          <ul className={styles.list} >
              <li><p>Category</p> <span></span></li>
              <li><p>Priority</p> <span></span></li>
              <li><p>Cost</p> <span>${asset.estimated_cost.toFixed(2)}</span></li>
              <li><p>Brand</p> <span></span></li>
              <li><p>Acquisition</p> <span>{new Date(asset.acquisition_date).toLocaleDateString()}</span></li>
              <li><p>Use</p> <span>{asset.primary_use}</span></li>
          </ul>
          <button></button>
      {asset.link && (
        <a href={asset.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
          View Product
        </a>
      )}
    </div>
  );
}
