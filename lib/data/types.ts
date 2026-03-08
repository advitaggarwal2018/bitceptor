export interface Service{
    id: string;
    title: string;
    description: string;
    icon: string;
    details?: string[];
}

export interface CompanyInfo{
    background: string;
    mission: string;
    values: string[];
    contact:{
        email: string;
        phone: string;
    };
}