import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import Issue from "./pages/Issue";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RootLayout } from "./layout/RootLayout";
import Home from "./pages/Home";
import Apply from "./pages/Apply";
import Applying from "./pages/Applying";
import Project from "./pages/Project";
import Applyed from "./pages/Applyed";
import Contributor from "./pages/Contributor";
import Explore from "./pages/Explore";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import { ProfileLayout } from "./layout/ProfileLayout";
import Personal from "./components/profile/Personal";
import Experience from "./components/profile/Experience";
import { ApiProvider } from "./context/ApiContext";
// import store from "./redux/store";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";
import AddProjects from "./pages/AddProjects";
import EditProject from "./pages/EditProject";
import { ProjectScreen } from "./components/profile/ProjectScreen";
// import { MySkills } from "./components/profile/MySkills";
import { PersistGate } from "redux-persist/integration/react";
import Clan from "./pages/Clan";
import ClanList from "./pages/ClanList";
import FundScreen from "./pages/FundScreen";
import LeagueChallenges from "./pages/LeagueChallenges";
import Transactionhistory from "./pages/Transactionhistory";
import WarLog from "./pages/WarLog";
import DetailScreen from "./pages/DetailScreen";
import ContestDescriptionPage from "./pages/ContestDescriptionPage";
import ContestPage from "./pages/ContestPage";
import PostContest from "./components/clan/PostContest";
import MyContests from "./components/clan/MyContests";
import Leaderboard from "./components/clan/Leaderboard";
import TrackRoute from "./components/TrackRoute";
import PreviousRoutes from "./components/PreviousRoutes";
import UserRoute from "./components/UserRoute";
import ProjectRoute from "./components/ProjectRoute";
import ProjectAdminRoute from "./components/ProjectAdminRoute";
import ContributorsRoute from "./components/ContributorsRoute";
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApiProvider>
          <Router>
            <TrackRoute />
            <Routes>
              {/* Root Layout */}
              <Route path="/" element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="explore" element={<Explore />} />
                <Route path="PreviousRoutes" element={<PreviousRoutes />} />
                <Route path="UserRoute" element={<UserRoute />} />
                <Route path="ProjectRoute" element={<ProjectRoute />} />
                <Route
                  path="ContributorsRoute"
                  element={<ContributorsRoute />}
                />
                <Route
                  path="ProjectAdminRoute"
                  element={<ProjectAdminRoute />}
                />
                <Route path="clanlist" element={<ClanList />} />
                <Route path="clans" element={<Clan />} />
                <Route path="warlog" element={<WarLog />} />
                <Route path="fundscreen" element={<FundScreen />} />
                <Route path="leaguechallenges" element={<LeagueChallenges />} />
                <Route
                  path="transactionhistory"
                  element={<Transactionhistory />}
                />
                <Route path="detailscreen" element={<DetailScreen />} />
                <Route
                  path="contestdescriptionpage"
                  element={<ContestDescriptionPage />}
                />
                <Route path="/contestpage" element={<ContestPage />}>
                  <Route index element={<PostContest />} />
                  <Route
                    path="/contestpage/mycontests"
                    element={<MyContests />}
                  />
                  <Route
                    path="/contestpage/leaderboard"
                    element={<Leaderboard />}
                  />
                </Route>

                <Route
                  path="projects/contributor"
                  element={<ProtectedRoute element={<Contributor />} />}
                />
                {/* done */}

                <Route
                  path="projects/admin"
                  element={<ProtectedRoute element={<Project />} />}
                />
                <Route
                  path="projects/add"
                  element={<ProtectedRoute element={<AddProjects />} />}
                />
                <Route
                  path="/projects/contributor/collab/:id"
                  element={<ProtectedRoute element={<Apply />} />}
                />
                <Route
                  path="/projects/contributor/git/:id"
                  element={<ProtectedRoute element={<Applying />} />}
                />
                <Route
                  path="/projects/edit/:id"
                  element={<ProtectedRoute element={<EditProject />} />}
                />
                <Route
                  path="/projects/admin/:id"
                  element={<ProtectedRoute element={<Applyed />} />}
                />
                <Route
                  path="/projects/admin/issue/:id"
                  element={<ProtectedRoute element={<Issue />} />}
                />

                <Route
                  path="chat"
                  element={<ProtectedRoute element={<Chat />} />}
                />
              </Route>

              {/* Authentication */}
              <Route path="signup" element={<Signup />} />
              <Route path="login" element={<Login />} />

              {/* Profile Layout */}
              <Route path="profile" element={<ProfileLayout />}>
                <Route
                  index
                  element={<ProtectedRoute element={<Profile />} />}
                />
                <Route
                  path="personal-details"
                  element={<ProtectedRoute element={<Personal />} />}
                />
                <Route
                  path="work-experience"
                  element={<ProtectedRoute element={<Experience />} />}
                />
                <Route
                  path="project-screen"
                  element={<ProtectedRoute element={<ProjectScreen />} />}
                />
                {/* <Route
                  path="my-skills"
                  element={<ProtectedRoute element={<MySkills />} />}
                /> */}
              </Route>
            </Routes>
          </Router>
        </ApiProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
