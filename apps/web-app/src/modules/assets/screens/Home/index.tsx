// import Filters from './Filters';
// import ExportMenu from './ExportMenu';
// import AddAssetModal from './AddAssetModal';
import styles from './Home.module.css';
// import { useAssetsStore } from '../../store';
import AssetCard from '../../components/AssetCard.tsx';
import { Link } from 'react-router-dom';
import { useAssetsStore } from '../../store/index.ts';

export default function Home() {
    //   const assets = useAssetsStore(state => state.assets);
      const assets = useAssetsStore((state) => state.assets);
    

  return (
    <div className={styles.container}>
      <header className={styles.header}>
              <h1>Assets & Tools</h1>
              <p>Track your assets, tools, and wishlist items</p>
        {/* <ExportMenu assets={filteredAssets} /> */}
      </header>

      {/* <Filters selectedTags={filterTags} onChange={setFilterTags} /> */}

      <main className={styles.assetList}>
        {assets.length === 0 ? (
          <p className={styles.empty}>No assets found</p>
        ) : (
            assets.map(asset => (
            <AssetCard key={asset.id} asset={asset} />
          ))
        )}
      </main>

      <Link
        className={styles.fab}
              aria-label="Add new asset"
              to='/assets/new'
      >
        +
      </Link>

      {/* {modalOpen && <AddAssetModal onClose={() => setModalOpen(false)} />} */}
    </div>
  );
}
