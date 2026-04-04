"use client";

import { createContext, useContext, useState } from "react";

const ModalContext = createContext<any>(null);

export const QuoteModalProvider = ({ children }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useQuoteModal = () => {
  return useContext(ModalContext);
};