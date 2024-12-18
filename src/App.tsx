import "./styles.css";
import ThemePage from "./component/ThemePage";
import { ThemeContext, ThemeContextProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <ThemePage />
      </ThemeContextProvider>
    </div>
  );
}
