import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Playerfootball from "./pages/Playerfootball.jsx"; 
import Coach from "./pages/Coach.jsx";  
import Searchefootball from "./pages/Searchfootball.jsx";  
import Home from "./pages/Home.jsx" 
import Searchcoach from "./pages/Searchcoach.jsx"; 
import Sporttype from "./pages/Sporttype.jsx"; 
import Searchbadminton from "./pages/Searchbadminton.jsx"; 
import Searchbasketball from "./pages/Searchbasketball.jsx"; 
import Searchesport from "./pages/Searchesport.jsx"; 
import Searchfutsal from "./pages/Searchfutsal.jsx"; 
import Searchhooptakraw from "./pages/Searchhooptakraw.jsx"; 
import Searchpetanque from "./pages/Searchpetanque.jsx";  
import Searchtabletenis from "./pages/Searchtabletenis.jsx"; 
import Searchtakraw from "./pages/Searchtakraw.jsx";
import Searchvolleyball from "./pages/Searchvolleyball.jsx"; 
import Playerbadminton from "./pages/Playerbadminton.jsx"; 
import Playerbasketball from "./pages/Playerbasketball.jsx"; 
import Playeresport from "./pages/Playeresport.jsx"; 
import Playerfutsal from "./pages/Playerfutsal.jsx"; 
import Playerhooptakraw from "./pages/Playerhooptakraw.jsx"; 
import Playerpetanque from "./pages/Playerpetanque.jsx"; 
import Playertakraw from "./pages/Playertakraw.jsx"; 
import Playertabletenis from "./pages/Playertabletenis.jsx"; 
import Playervolleyball from "./pages/Playervolleyball.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx"; 
import Searchstudentorganization from "./pages/Searchstudentorganization.jsx"; 
import Searchdirector from "./pages/Searchdirector.jsx"; 
import Director from "./pages/Director.jsx"; 
import Organizations from "./pages/Organizations.jsx"; 


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/playerfootball/:rowIndex" element={<Playerfootball />} /> 
          <Route path="/playerbadminton/:rowIndex" element={<Playerbadminton />} />
          <Route path="/playerbasketball/:rowIndex" element={<Playerbasketball />} />
          <Route path="/playeresport/:rowIndex" element={<Playeresport />} />
          <Route path="/playerfutsal/:rowIndex" element={<Playerfutsal />} /> 
          <Route path="/playerhooptakraw/:rowIndex" element={<Playerhooptakraw />} />
          <Route path="/playerpetanque/:rowIndex" element={<Playerpetanque />} />
          <Route path="/playertakraw/:rowIndex" element={<Playertakraw />} />
          <Route path="/playertabletenis/:rowIndex" element={<Playertabletenis/>} />
          <Route path="/playervolleyball/:rowIndex" element={<Playervolleyball />} />
          <Route path="/coach/:fname/:lname" element={<Coach />} /> 
          <Route path="/director/:fname/:lname" element={<Director />} />  
          <Route path="/studentorganization/:rowIndex" element={<Organizations />} /> 
          <Route path="/searhfootball" element={<Searchefootball />} />  
          <Route path="/searhvolleyball" element={<Searchvolleyball />} />   
          <Route path="/searhfutsal" element={<Searchfutsal />} />   
          <Route path="/searhesport" element={<Searchesport />} />  
          <Route path="/searhbasketball" element={<Searchbasketball />} />  
          <Route path="/searhhooptakraw" element={<Searchhooptakraw />} />   
          <Route path="/searhpetanque" element={<Searchpetanque />} />   
          <Route path="/searhtabletenis" element={<Searchtabletenis />} />  
          <Route path="/searhtakraw" element={<Searchtakraw />} />  
          <Route path="/searhbadminton" element={<Searchbadminton />} /> 
          <Route path="/" element={<Home />} /> 
          <Route path="/coach" element={<Searchcoach />} />   
          <Route path="/studentorganization" element={<Searchstudentorganization />} />   
          <Route path="/director" element={<Searchdirector />} />  
          <Route path="/player" element={<Sporttype />} />  
          <Route path="*" element={<NotFoundPage />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
