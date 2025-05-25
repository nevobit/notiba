import { Base } from "../../../common";

export interface Asset extends Base {
    name: string;
    type: string;
    category: string;
    state: string;
    priority: string;
    estimatedCost: string;
    realCost: string;
    acquisitionDate: string;
    brand: string;
    primaryUse: string;
    link: string;
    notes: string;
}