import { useState, useEffect, useReducer } from "react";
import { AnimatePresence } from "framer-motion";

import userReducer from "./reducers/userReducer";
import { fetchUser } from "./services/user";
import useDebounce from "./hooks/useDebounce";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import UserProfile from "./components/UserProfile";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import "./app.scss";

const initialState = {
  user: null,
  isLoading: false,
  isError: false,
};

function App() {
  const [searchParam, setSearchParam] = useState("");
  const [userState, dispatch] = useReducer(userReducer, initialState);
  const debouncedValue = useDebounce(searchParam, 700);

  useEffect(() => {
    if (debouncedValue) {
      dispatch({ type: "START_FECTH" });
      fetchUser(debouncedValue)
        .then((data) => dispatch({ type: "FETCH_SUCCESS", payload: data }))
        .catch(() => dispatch({ type: "FETCH_ERROR" }))
        .finally(() => {
          setSearchParam("");
        });
    }
  }, [debouncedValue]);

  return (
    <div className="container">
      <Navbar />
      <main>
        <Searchbar searchParam={searchParam} setSearchParam={setSearchParam} />
        {!userState.isLoading && userState?.user?.message === "Not Found" && (<ErrorMessage message="The user does not exist"/>
        )}
        {userState.isLoading && <Loader />}
        <AnimatePresence>
          {userState.user && (
            <UserProfile
              user={userState.user}
            />
          )}
        </AnimatePresence>
        {
  console.log("el user", userState.user)}
        {userState.isError && <ErrorMessage />}
      </main>
    </div>
  );
}

export default App;
