export interface Worker {
  workerId: string
  name: string
  checkUpUri: string
  exprectedResponse: string
}

export interface CheckUp {
  worker: Worker
  actualResponse: string
  responseCode: string
}

export interface WorkerHealth extends Worker {
  status: string
  checkUps: CheckUp[]
}
