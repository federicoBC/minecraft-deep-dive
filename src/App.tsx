import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import NotFound from "./pages/NotFound";

// Lazy load pages to avoid loading the entire knowledgeBase immediately
const Index = lazy(() => import("./pages/Index"));
const Farm = lazy(() => import("./pages/Farm"));
const Combat = lazy(() => import("./pages/Combat"));
const Mob = lazy(() => import("./pages/Mob"));
const Redstone = lazy(() => import("./pages/Redstone"));
const Tricks = lazy(() => import("./pages/Tricks"));
const Info = lazy(() => import("./pages/Info"));

const queryClient = new QueryClient();

const LoadingFallback = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-primary animate-pulse text-xl font-pixel">Caricamento...</div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/farm" element={<Farm />} />
            <Route path="/combat" element={<Combat />} />
            <Route path="/mob" element={<Mob />} />
            <Route path="/redstone" element={<Redstone />} />
            <Route path="/tricks" element={<Tricks />} />
            <Route path="/info" element={<Info />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
