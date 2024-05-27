import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Route, Routes } from "react-router-dom"
import { NotFoundPage } from "./pages/NotFoundPage"
import { VerifyPage } from "./pages/VerifyPage"
import { ConnectionsPage } from "./pages/ConnectionsPage"
import { HomePage } from "./pages/HomePage"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: true,
      retry: false,
      staleTime: 60_000,
    },
  },
})

function App() {
  // States

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/verify" element={<VerifyPage />} />
        <Route path="/verify/connections" element={<ConnectionsPage />} />
        <Route
          path="*"
          element={
            <>
              <NotFoundPage />
            </>
          }
        />
      </Routes>
    </QueryClientProvider>
  )
}

export default App
