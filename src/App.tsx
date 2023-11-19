// import './App.css'
import RoutesWire from "./Routes.tsx";
import AuthProvider from "./providers/AuthProvider.tsx";

function App() {

  return (
    <AuthProvider>
      <RoutesWire/>
    </AuthProvider>
  )
}

export default App
