import { Schema } from 'mongoose';
import { Asset } from './asset';

export const AssetSchemaMongo = new Schema<Asset>(
    {
        name: { type: String },
        type: { type: String },
        category: { type: String },
        state: { type: String },
        priority: { type: String },
        estimatedCost: { type: String },
        realCost: { type: String },
        acquisitionDate: { type: String },
        brand: { type: String },
        primaryUse: { type: String },
        link: { type: String },
        notes: { type: String },

    },
    {
        versionKey: false,
        timestamps: true,
    },
);