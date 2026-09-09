import ViewState from './ViewState.jsx'
import { useApiData } from './useApiData.js'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME
const endpoint = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/'

export default function Workouts() {
  const { data: workouts, loading, error } = useApiData(endpoint, 'workouts')

  return (
    <section className="content-view">
      <div className="view-heading"><div><span className="eyebrow">Training library</span><h1>Workouts</h1></div></div>
      <ViewState loading={loading} error={error} empty={!workouts.length}>
        <div className="workout-grid">
          {workouts.map((workout) => (
            <article className="workout-card" key={workout._id ?? workout.title}>
              <div className="workout-meta"><span>{workout.category}</span><span>{workout.durationMinutes} min</span></div>
              <h2>{workout.title}</h2><p>{workout.difficulty}</p>
              <div className="equipment">{workout.equipment?.join(' · ') || 'No equipment'}</div>
            </article>
          ))}
        </div>
      </ViewState>
    </section>
  )
}