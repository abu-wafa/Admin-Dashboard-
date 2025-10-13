import { createContext, useContext, useState } from "react";

interface AppContextType {
  Base_url: string;
  open: boolean;
  setopen: React.Dispatch<React.SetStateAction<boolean>>;
}
interface ContextProps {
  children?: React.ReactNode;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const Context: React.FC<ContextProps> = ({ children }) => {
  const Base_url = "http://localhost:8800/api/";
  const [open, setopen] = useState(false);

  return (
    <AppContext.Provider value={{ Base_url, open, setopen }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
export default Context;
