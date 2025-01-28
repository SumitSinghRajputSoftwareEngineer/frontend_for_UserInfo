import { Route,  Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import { lazy, Suspense } from "react";
import LoadingSpinner from "./Components/LoadingSpinner";

const UserDetails = lazy(() => import("./Components/UserDetails"));
const UserList = lazy(() => import("./Components/UserList"));
const SortedUser = lazy(() => import("./Components/SortedUser"));

function App() {
  return ( 
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <UserList />
            </Suspense>
          }
        />
        <Route
          path="/users/:id"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <UserDetails />
            </Suspense>
          }
        />
        <Route
          path="/users/sort"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <SortedUser />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
