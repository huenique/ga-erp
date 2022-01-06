import Navbar from "./components/Navbar";
import Dashboard from "./containers/Dashboard/Dashboard";
import useScript from "./hooks/useScript";

function App() {
  useScript(
    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
    "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",
    "anonymous",
    true
  );
  useScript("js/feather.min.js", undefined, undefined, false);
  useScript("js/icons.js", undefined, undefined, false);

  return (
    <>
      <Navbar />
      <Dashboard />
    </>
  );
}

export default App;
