import ViewState from './ViewState.jsx'
import { useApiData } from './useApiData.js'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME
const endpoint = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/'

export default function Users() {
  const { data: users, loading, error } = useApiData(endpoint, 'users')

  return (
    <section className="content-view">
      <div className="view-heading">
        <div><span className="eyebrow">Community</span><h1>Members</h1></div>
        <span className="record-count">{users.length} active</span>
      </div>
      <ViewState loading={loading} error={error} empty={!users.length}>
        <div className="member-grid">
          {users.map((user) => (
            <article className="member-card" key={user._id ?? user.username}>
              <div className="avatar">{user.firstName?.[0]}{user.lastName?.[0]}</div>
              <div><h2>{user.firstName} {user.lastName}</h2><p>@{user.username}</p></div>
              <span className="detail-label">Goal</span>
              <p className="goal">{user.fitnessGoal}</p>
            </article>
          ))}
        </div>
      </ViewState>
    </section>
  )
}