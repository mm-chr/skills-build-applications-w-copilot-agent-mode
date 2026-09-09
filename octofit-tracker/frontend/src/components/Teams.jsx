import ViewState from './ViewState.jsx'
import { useApiData } from './useApiData.js'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME
const endpoint = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/teams/`
  : 'http://localhost:8000/api/teams/'

export default function Teams() {
  const { data: teams, loading, error } = useApiData(endpoint, 'teams')

  return (
    <section className="content-view">
      <div className="view-heading"><div><span className="eyebrow">Together</span><h1>Teams</h1></div></div>
      <ViewState loading={loading} error={error} empty={!teams.length}>
        <div className="team-list">
          {teams.map((team, index) => (
            <article className="team-row" key={team._id ?? team.name}>
              <span className="team-number">{String(index + 1).padStart(2, '0')}</span>
              <div><h2>{team.name}</h2><p>{team.motto}</p></div>
              <div className="team-stat"><strong>{team.memberCount}</strong><span>members</span></div>
              <div className="team-stat"><strong>{team.weeklyGoalMinutes}</strong><span>weekly minutes</span></div>
            </article>
          ))}
        </div>
      </ViewState>
    </section>
  )
}