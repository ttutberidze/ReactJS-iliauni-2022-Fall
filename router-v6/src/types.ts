export interface ContactModel {
    id: string;
    avatar?: string;
    first?: string;
    last?: string;
    twitter?: string;
    notes?: string;
    favorite?: boolean;
    createdAt: number;
}