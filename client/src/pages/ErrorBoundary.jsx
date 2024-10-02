import { useEffect } from "react"
import { useNavigate, useRouteError } from "react-router-dom"

export default function ErrorBoundary() {
  const error = useRouteError()
  const navigate = useNavigate()

  useEffect(() => {
    if (error.status === 401) {
      navigate("/login")
    }
  }, [error, navigate])

  return null 
}
