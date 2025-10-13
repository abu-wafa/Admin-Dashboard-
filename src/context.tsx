import { createContext, useContext } from "react";

interface AppContextType {
  Base_url: string;
}
interface ContextProps {
  children?: React.ReactNode;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const Context: React.FC<ContextProps> = ({ children }) => {
  const Base_url = "http://localhost:8800/api/";
  return (
    <AppContext.Provider value={{ Base_url }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
export default Context;
