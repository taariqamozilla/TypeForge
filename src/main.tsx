import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AppSidebar from "./components/app-sidebar.tsx";
import {SidebarProvider} from "@/components/ui/sidebar";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SidebarProvider>
        <AppSidebar/>
        <App />
    </SidebarProvider>
  </StrictMode>,
)
