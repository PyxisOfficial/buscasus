import AppRoutes from "./routes";
import GlobalStyle from './styles/global';
import { AuthProvider } from "./contexts/auth";

export default function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <AppRoutes />
    </AuthProvider>
  )
}