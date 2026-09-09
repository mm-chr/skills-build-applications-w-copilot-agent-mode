import { useEffect, useState } from 'react'

function normalizeResponse(payload, collectionName) {
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload?.results)) return payload.results
  if (Array.isArray(payload?.[collectionName])) return payload[collectionName]
  return []
}

export function useApiData(endpoint, collectionName) {
  const [state, setState] = useState({ data: [], loading: true, error: '' })

  useEffect(() => {
    const controller = new AbortController()

    async function load() {
      try {
        const response = await fetch(endpoint, { signal: controller.signal })
        if (!response.ok) throw new Error(`Request failed with status ${response.status}`)
        const payload = await response.json()
        setState({ data: normalizeResponse(payload, collectionName), loading: false, error: '' })
      } catch (error) {
        if (error.name !== 'AbortError') setState({ data: [], loading: false, error: error.message })
      }
    }

    load()
    return () => controller.abort()
  }, [collectionName, endpoint])

  return state
}