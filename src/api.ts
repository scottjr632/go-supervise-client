import axios from 'axios'
import { Worker, WorkerHealth } from './components/dashboard/interfaces'

export interface error {
  error?: {
    message: string
  }
}

export interface WorkerResponse<T> extends error {
  worker?: T
}

export interface Response<T> {
  data: T
}

export const login = ({ username, password }) => { 
  return axios.post('/api/auth/', { username, password })
}

export const checkAuthentication = () => {
  return axios.get('/api/protected/')
}

export const getAllWorkersHealth = (): Promise<Response<WorkerHealth[]>> => {
  return axios.get('/api/workers/health/').catch(err => err)
}

export const getWorkerById = async (workerId: string): Promise<Response<Worker>> => {
  let res = await axios.get(`/api/workers/health?workerId=${workerId}`)
  return <Response<Worker>><unknown>res
}