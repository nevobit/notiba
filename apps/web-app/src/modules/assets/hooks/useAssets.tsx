import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export interface AssetFormData {
  id: string;
    item: string;
    category: string;
    priority: string;
    status: string;
    estimated_cost: number;
    real_cost: number;
    acquisition_date: string;
    brand: string;
    primary_use: string;
    link: string;
    notes: string;
  tags: string[];
  createdAt: string;
  }

  
export interface Asset extends AssetFormData {
  id: string;
}

export const useAssets = () => {
  const [assets, setAssets] = useState<Asset[]>([]);

  // Cargar desde localStorage al montar
  useEffect(() => {
    const stored = localStorage.getItem("assets");
    if (stored) {
      setAssets(JSON.parse(stored));
    }
  }, []);

  // Guardar cada vez que se actualicen
  useEffect(() => {
    localStorage.setItem("assets", JSON.stringify(assets));
  }, [assets]);

  const addAsset = (data: AssetFormData) => {
    const newAsset: Asset = {
      ...data,
      id: uuidv4(),
      createdAt: new Date().toISOString()
    };
    setAssets((prev) => [...prev, newAsset]);
  };

  const updateAsset = (id: string, data: AssetFormData) => {
    setAssets((prev) =>
      prev.map((asset) =>
        asset.id === id ? { ...asset, ...data } : asset
      )
    );
  };

  const deleteAsset = (id: string) => {
    setAssets((prev) => prev.filter((asset) => asset.id !== id));
  };

  const getAsset = (id: string): Asset | undefined => {
    return assets.find((asset) => asset.id === id);
  };

  return {
    assets,
    addAsset,
    updateAsset,
    deleteAsset,
    getAsset
  };
};
