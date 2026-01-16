const BASE_URL = 'https://feb-scouting-backend.onrender.com'

export class Network {
  static async get<T>(url: string) {
    try {
      const response = await fetch(`${`${BASE_URL}${url}`}`, {
        method: 'GET',
        credentials: 'include',
      })
      if (!response.ok) throw 'error'
      const json = (await response.json()) as ApiErrorParams | ApiSuccess<T>
      if (!json.success) throw new ApiError(json)
      return { data: json.data }
    } catch (error) {
      if (error instanceof ApiError) return { error: error.error }
      return { error: { status: 500, message: 'Internal Server Error' } }
    }
  }
}

class ApiError {
  error: ErrorResponse
  constructor(err: ApiErrorParams) {
    this.error = {
      status: err.status,
      message: err.message,
      details: err.details,
    }
  }
}

interface ApiErrorParams {
  success: false
  status: number
  message: string
  details: unknown
}
interface ApiSuccess<T> {
  success: true
  data: T
}
export interface ErrorResponse {
  status: number
  message: string
  details?: unknown
}
