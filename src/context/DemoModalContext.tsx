"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { DemoFormModal } from "@/components/DemoFormModal";

interface DemoModalContextValue {
  openModal: () => void;
}

const DemoModalContext = createContext<DemoModalContextValue | null>(null);

export function DemoModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const shown = sessionStorage.getItem("demo_modal_shown");
    if (!shown) {
      const timer = setTimeout(() => {
        setOpen(true);
        sessionStorage.setItem("demo_modal_shown", "true");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <DemoModalContext.Provider value={{ openModal: () => setOpen(true) }}>
      {children}
      <DemoFormModal open={open} onClose={() => setOpen(false)} />
    </DemoModalContext.Provider>
  );
}

export function useDemoModal() {
  const ctx = useContext(DemoModalContext);
  if (!ctx) throw new Error("useDemoModal must be used within DemoModalProvider");
  return ctx;
}
