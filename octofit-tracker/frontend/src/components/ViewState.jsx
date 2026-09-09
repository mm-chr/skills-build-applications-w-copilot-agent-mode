export default function ViewState({ loading, error, empty, children }) {
  if (loading) return <div className="view-state">Loading data...</div>
  if (error) return <div className="view-state error">Unable to load data: {error}</div>
  if (empty) return <div className="view-state">No records found.</div>
  return children
}