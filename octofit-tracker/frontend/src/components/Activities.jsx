import ViewState from './ViewState.jsx'
import { useApiData } from './useApiData.js'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME
const endpoint = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/'

export default function Activities() {
  const { data: activities, loading, error } = useApiData(endpoint, 'activities')

  return (
    <section className="content-view">
      <div className="view-heading"><div><span className="eyebrow">Recent movement</span><h1>Activities</h1></div></div>
      <ViewState loading={loading} error={error} empty={!activities.length}>
        <div className="data-table" role="table" aria-label="Recent activities">
          <div className="table-row table-head" role="row"><span>Athlete</span><span>Activity</span><span>Duration</span><span>Energy</span></div>
          {activities.map((activity) => (
            <div className="table-row" role="row" key={activity._id ?? `${activity.user}-${activity.completedAt}`}>
              <strong>{activity.user}</strong><span>{activity.type}</span><span>{activity.durationMinutes} min</span><span>{activity.caloriesBurned} kcal</span>
            </div>
          ))}
        </div>
      </ViewState>
    </section>
  )
}