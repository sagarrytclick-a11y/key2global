"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ApplyModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ApplyModalContext = createContext<ApplyModalContextType | undefined>(undefined);

export function ApplyModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <ApplyModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ApplyModalContext.Provider>
  );
}

export function useApplyModal() {
  const context = useContext(ApplyModalContext);
  if (!context) {
    throw new Error('useApplyModal must be used within ApplyModalProvider');
  }
  return context;
}
