import GlobalStyle from './Shared/GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import Error404 from './Shared/Error404';
import HeaderBar from './Shared/HeaderBar';
import Home from './pages/Home';
import Beavers from './pages/Beavers';
import Cubs from './pages/Cubs';
import Scouts from './pages/Scouts';
import Explorers from './pages/Explorers';
import OurCalendar from './pages/OurCalendar';
import Documents from './pages/Documents';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <>
      <>
        <ScrollToTop />
        <HeaderBar stickyHeader />
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}`} element={<Home />} />
          {/* <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About} /> */}
          <Route path={`${process.env.PUBLIC_URL}/beavers`} element={<Beavers />} />
          <Route path={`${process.env.PUBLIC_URL}/cubs`} element={<Cubs />} />
          <Route path={`${process.env.PUBLIC_URL}/scouts`} element={<Scouts />} />
          <Route path={`${process.env.PUBLIC_URL}/explorers`} element={<Explorers />} />
          <Route path={`${process.env.PUBLIC_URL}/ourCalendar`} element={<OurCalendar />} />
          <Route path={`${process.env.PUBLIC_URL}/documents`} element={<Documents />} />
          <Route element={<Error404 />} />
        </Routes>
      </>
      <GlobalStyle />
    </>
  );
}

export default App;
