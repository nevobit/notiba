// src/stores/assetFormStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { format } from "date-fns";
import { AssetFormData } from "../hooks/useAssets";
import { v4 as uuid } from 'uuid';

const initialFormData: AssetFormData = {
    id: uuid(),
    item: "",
    category: "Electronics",
    priority: "Medium",
    status: "Active",
    estimated_cost: 0,
    real_cost: 0,
    acquisition_date: format(new Date(), "yyyy-MM-dd"),
    brand: "",
    primary_use: "",
    link: "",
    notes: "",
    tags: [],
    createdAt: new Date().toDateString(),
};

type AssetFormStore = {
    formData: AssetFormData;
    setFormData: (data: Partial<AssetFormData>) => void;
    resetForm: () => void;
    setTags: (tags: string[]) => void;
};

export const useAssetFormStore = create<AssetFormStore>()(
    persist(
        (set) => ({
            formData: initialFormData,
            setFormData: (data) =>
                set((state) => ({
                    formData: { ...state.formData, ...data },
                })),
            resetForm: () => set({ formData: initialFormData }),
            setTags: (tags) =>
                set((state) => ({
                    formData: { ...state.formData, tags },
                })),
        }),
        {
            name: "asset-form-storage",
        }
    )
);
