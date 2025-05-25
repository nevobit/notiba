import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Asset {
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

interface AssetsState {
    assets: Asset[];
    addAsset: (asset: Asset) => void;
    updateAsset: (id: string, data: Partial<Asset>) => void;
    removeAsset: (id: string) => void;
}

export const useAssetsStore = create<AssetsState>()(
    persist(
        (set) => ({
            assets: [],
            addAsset: (asset) =>
                set((state) => ({
                    assets: [...state.assets, asset],
                })),
            updateAsset: (id, data) =>
                set((state) => ({
                    assets: state.assets.map((a) => (a.id === id ? { ...a, ...data } : a)),
                })),
            removeAsset: (id) =>
                set((state) => ({
                    assets: state.assets.filter((a) => a.id !== id),
                })),
        }),
        {
            name: 'assets-storage',
        }
    )
);
