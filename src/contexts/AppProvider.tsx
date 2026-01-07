"use client";

import React, { ReactNode } from 'react';
import { CollegesProvider } from './CollegesContext';
import { BlogsProvider } from './BlogsContext';

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <CollegesProvider>
      <BlogsProvider>
        {children}
      </BlogsProvider>
    </CollegesProvider>
  );
}
