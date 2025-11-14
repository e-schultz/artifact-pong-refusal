import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Index from "./pages/Index";
import AttentionModule from "./pages/AttentionModule";
import SleepModule from "./pages/SleepModule";
import MemoryModule from "./pages/MemoryModule";
import SequencerModule from "./pages/SequencerModule";
import ReferenceWeb from "./pages/ReferenceWeb";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <AppSidebar />
            <div className="flex-1 flex flex-col">
              <header className="h-12 flex items-center border-b-2 bg-black sticky top-0 z-50" 
                style={{ borderBottomColor: 'hsl(var(--neon-cyan))' }}>
                <SidebarTrigger className="ml-4 text-neon-cyan hover:text-neon-cyan/80" />
                <div className="ml-4 text-xs text-neon-cyan glow-cyan font-mono tracking-wider">
                  CONSCIOUSNESS TECH // INFRASTRUCTURE v2.0
                </div>
              </header>
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/attention" element={<AttentionModule />} />
                  <Route path="/sleep" element={<SleepModule />} />
                  <Route path="/memory" element={<MemoryModule />} />
                  <Route path="/sequencer" element={<SequencerModule />} />
                  <Route path="/references" element={<ReferenceWeb />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
