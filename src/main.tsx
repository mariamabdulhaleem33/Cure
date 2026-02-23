import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import { ProfileImageProvider } from "./context/ProfileImgContext";
import { AuthProvider } from "@/context/authContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <ProfileImageProvider>
      <App />
    </ProfileImageProvider>
  </AuthProvider>,
);
