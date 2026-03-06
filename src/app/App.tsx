import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Toaster } from "./components/ui/sonner";
import { AdminModeProvider } from "./hooks/use-admin-mode";

function App() {
  return (
    <AdminModeProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AdminModeProvider>
  );
}

export default App;
