import './App.css';
import Footer from './components/footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import DeveloperVotePage from './components/dashboardComponents/DeveloperVotePage';
import Welcome from './components/dashboardComponents/welcome/Welcome';
import CreateAContest from './components/dashboardComponents/createContest/CreateAContest';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './components/dashboardComponents/blog/Blog';
import AddPost from './components/dashboardComponents/blog/AddPost';
import PageNotFound from './components/noMatch/PageNotFound';
import BlogDetails from './components/dashboardComponents/blog/blogDetails/BlogDetails';
import TopRatedSeries from './components/dashboardComponents/topRatedSeries/TopRatedSeries';


function App() {
  return (
    <div className="App">
      <div className='home'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='voting-page' element={<DeveloperVotePage />} />
          <Route path='create-a-contest' element={<CreateAContest />} />
          <Route path='top-rated-movies' element={ <TopRatedSeries/> } />
          <Route path='blog' element={<Blog />} />
          <Route path='blog/:id' element={<BlogDetails />} />
          <Route path='create-post' element={<AddPost />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>

      </div>
      <Footer />
    </div>
  );
}

export default App;
