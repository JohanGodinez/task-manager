import Kanban from "./pages/Kanban/Kanban";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Kanban />
      </QueryClientProvider>
    </>
  );
}

export default App;
