export interface IMenu {
    name: string;
    price: number; 
  }

  
export interface IAddressData {
    
  }
  
  
  export interface IStoreRegistState {
    menus: IMenu[];
    files: (File | null)[];
    businessName: string;
    instagram: string;
    businessHours: string;
    addressData: IAddressData | null;
  }