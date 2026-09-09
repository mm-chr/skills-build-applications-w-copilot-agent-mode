import ViewState from './ViewState.jsx'
import { useApiData } from './useApiData.js'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME
const endpoint = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/'

export default function Leaderboard() {
  const { data: entries, loading, error } = useApiData(endpoint, 'leaderboard')

  return (
    <section className="content-view">
      <div className="view-heading"><div><span className="eyebrow">This season</span><h1>Leaderboard</h1></div></div>
      <ViewState loading={loading} error={error} empty={!entries.length}>
        <div className="leaderboard-list">
          {entries.map((entry) => (
            <article className="leader-row" key={entry._id ?? entry.username}>
              <span className="rank">{entry.rank}</span><strong>{entry.username}</strong>
              <span>{entry.streakDays} day streak</span><b>{entry.points.toLocaleString()} pts</b>
            </article>
          ))}
        </div>
      </ViewState>
    </section>
  )
}