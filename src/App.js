import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from './components/Create';
import Home from './components/Home';
import Navbar from "./components/Navbar";
import SeeBlogs from './components/SeeBlogs';
import NotFound from './components/NotFound';
import EnterBlogs from './components/EnterBlogs';
import EditBlogs from './components/EditBlogs';

function App() {
  return (
    <Router>
		<div className="App-container">
			<Navbar />
			<div className="App-content">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/create">
						<Create />
					</Route>
					<Route path="/seeblogs">
						<SeeBlogs />
					</Route>
					<Route path="/blogs/:id">
						<EnterBlogs />
					</Route>
					<Route path="/editblogs/:id">
						<EditBlogs />
					</Route>
					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
			</div>
		</div>
		</Router>
  );
}

export default App;
