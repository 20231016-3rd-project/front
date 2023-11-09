import { useState, ChangeEvent } from 'react';
import { IMenu, IAddressData } from '../pages/adminPage/admin/types/storeregist' 

export const useForm = () => {
  const [businessName, setBusinessName] = useState<string>(""); 
  const [tell, setTell] = useState<string>(""); 
  const [menus, setMenus] = useState<IMenu[]>([{ name: "", price: "" }]); 
  const [files, setFiles] = useState<(File | null)[]>(Array(5).fill(null)); 
  const [instagram, setInstagram] = useState<string>(""); 
  const [businessHours, setBusinessHours] = useState<string>(""); 
  const [breakTime, setbreakTime] = useState<string>(""); 
  const [addressData, setAddressData] = useState<IAddressData | null>(null);

  const handleAddressSelect = (adrdata: IAddressData) => {
    setAddressData(adrdata);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const newFiles = [...files];
    const file = e.target.files ? e.target.files[0] : null;
    newFiles[index] = file;
    setFiles(newFiles);
  };

  const handleFileButtonClick = (index: number) => {
    const fileInput = document.getElementById(`fileInput-${index}`) as HTMLInputElement;
    fileInput?.click();
  };

  const addMenu = () => {
    setMenus([...menus, { name: "", price: "" }]);
  };

  const handleMenuChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { name, value } = e.target;
    const list = [...menus];
    if (name === 'price') {
      list[index].price = value;
    } else {
      list[index][name as 'name'] = value;
    }
    setMenus(list);
  };

  return {
    businessName, setBusinessName,
    tell, setTell,
    menus, setMenus,
    files, setFiles,
    instagram, setInstagram,
    businessHours, setBusinessHours,
    breakTime, setbreakTime,
    addressData, setAddressData,
    handleAddressSelect,
    handleFileChange,
    handleFileButtonClick,
    addMenu,
    handleMenuChange,
  };
};
