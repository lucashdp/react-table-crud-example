import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ReactLoading from "react-loading";

const EditBook = lazy(() => import("../screens/EditBook"));
const BookList = lazy(() => import("../screens/BooksList"));
const AddBook = lazy(() => import("../screens/AddBook"));
const EditTutorial = lazy(() => import("../screens/EditTutorial"));
const TutorialList = lazy(() => import("../screens/TutorialsList"));
const AddTutorial = lazy(() => import("../screens/AddTutorial"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<ReactLoading type="Spin" height={667} width={375} />}>
      <Routes>
        <Route path="/books/edit/:bookId" exact element={<EditBook />} />
        <Route path="/books/add" exact element={<AddBook />} />
        <Route path="/books" exact element={<BookList />} />

        <Route
          path="/tutorials/edit/:tutorialId"
          exact
          element={<EditTutorial />}
        />
        <Route path="/tutorials/add" exact element={<AddTutorial />} />
        <Route path="/tutorials" exact element={<TutorialList />} />

        <Route path="*" element={<Navigate to="/tutorials" replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
