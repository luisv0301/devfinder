import { useState, useEffect } from "react";

import { fetchUser } from "./services/user";
import useDebounce from "./hooks/useDebounce";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import UserProfile from "./components/UserProfile";
import Loader from "./components/Loader";
import "./app.scss";

function App() {
  const [searchParam, setSearchParam] = useState("");
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const debouncedValue = useDebounce(searchParam, 700);

  useEffect(() => {
    if (debouncedValue) {
      console.log("ejecuntando api call");
      setIsLoading(true);
      setUser(null)
      fetchUser(debouncedValue)
        .then((data) => setUser(data))
        .catch((err) => console.log("el error es:", err))
        .finally(() => {
          setIsLoading(false);
          setSearchParam("");
        });
    }
  }, [debouncedValue]);

  console.log("el usuario es:", user);

  return (
    <div className="container">
      <Navbar />
      <main>
        <Searchbar searchParam={searchParam} setSearchParam={setSearchParam} />
        {isLoading && <Loader />}
        {user && <UserProfile user={user} />}
      </main>
    </div>
  );
}

export default App;
