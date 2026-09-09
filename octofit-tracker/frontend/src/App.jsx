import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import logo from './assets/octofitapp-small.png'
import './App.css'
import './octofit.css'

const navigation = [
  ['Users', '/users'],
  ['Teams', '/teams'],
  ['Activities', '/activities'],
  ['Leaderboard', '/leaderboard'],
  ['Workouts', '/workouts'],
]

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <NavLink className="brand" to="/users" aria-label="OctoFit Tracker home">
          <img src={logo} alt="" />
          <span><strong>OctoFit</strong><small>Tracker</small></span>
        </NavLink>
        <nav aria-label="Primary navigation">
          {navigation.map(([label, path]) => <NavLink key={path} to={path}>{label}</NavLink>)}
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/users" replace />} />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="*" element={<Navigate to="/users" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
