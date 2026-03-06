import { useState, useEffect, createContext, useContext } from "react";
import type { ReactNode } from "react";

// Admin mode context and provider - v2.0
interface AdminModeContextType {
  isAdminMode: boolean;
  toggleAdminMode: () => void;
}

const AdminModeContext = createContext<AdminModeContextType | undefined>(undefined);

export function AdminModeProvider({ children }: { children: ReactNode }) {
  const [isAdminMode, setIsAdminMode] = useState(() => {
    const stored = localStorage.getItem("happygohooky_admin_mode");
    return stored === "true";
  });

  useEffect(() => {
    localStorage.setItem("happygohooky_admin_mode", isAdminMode.toString());
  }, [isAdminMode]);

  const toggleAdminMode = () => {
    setIsAdminMode((prev) => !prev);
  };

  return (
    <AdminModeContext.Provider value={{ isAdminMode, toggleAdminMode }}>
      {children}
    </AdminModeContext.Provider>
  );
}

export function useAdminMode() {
  const context = useContext(AdminModeContext);
  if (!context) {
    throw new Error("useAdminMode must be used within AdminModeProvider");
  }
  return context;
}