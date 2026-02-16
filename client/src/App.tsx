import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ColorBlindFilters } from "@/components/color-blind-filters";
import Home from "@/pages/home";
import Login from "@/pages/login";
import About from "@/pages/about";
import NotFound from "@/pages/not-found";
import AdminWaitlist from "@/pages/admin-waitlist";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/about" component={About} />
      <Route path="/admin/waitlist" component={AdminWaitlist} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ColorBlindFilters />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
