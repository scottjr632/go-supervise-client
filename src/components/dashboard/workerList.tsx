import React, { FC, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import CheckUpStatus, { Status } from './checkupStatus'
import { WorkerHealth, CheckUp } from './interfaces'

const useShowCheckUps = (initialState = false) => {
  const [showRow, setShowRow] = useState(initialState)
  const toggleShowRow = () => setShowRow(!showRow)
  return {showRow, toggleShowRow}
}

const CheckUprow: FC<{ checkups: CheckUp[] }> = ({ checkups }) => (
  <tr>
    <td colSpan={4}>
      <table>
        <thead>
          <th>Actual Response</th>
          <th>Response Code</th>
        </thead>
        <tbody>
          {checkups.map(checkup => (
            <tr key={checkup.worker.workerId}>
              <td>{checkup.actualResponse}</td>
              <td>{checkup.responseCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </td>
  </tr>
)

const WorkerRow: FC<{worker: WorkerHealth}> = ({ worker }) => {
  const {showRow, toggleShowRow} = useShowCheckUps()

  return (
    <>
      <tr>
        <td data-title='Worker ID'>{worker.workerId}</td>
        <td data-title='Name'>{worker.name}</td>
        <td data-title='Check Up URI'>{worker.checkUpUri}</td>
        <td data-title='Status' className='table__worker-status'>
          <span className={`fa-icon transitionable-3s ${showRow ? 'rotated' : ''}`}>
            <FontAwesomeIcon icon={faPlus} onClick={toggleShowRow} />
          </span>
          <CheckUpStatus status={worker.status as Status} />
        </td>
      </tr>
      {showRow && <CheckUprow checkups={worker.checkUps} />}
    </>
  )
}

const AddWorkerRow = () => {
  return (
    <div>
      <button>Add Worker</button>
    </div>
  )
}

const WorkerList: FC<{workers: WorkerHealth[]}> = ({ workers }) => (
  <div className='table-responsive-vertical shadow-z-1'>
    <table className='table table-hover table-mc-light-blue'>
      <thead>
        <th>Worker ID</th>
        <th>Name</th>
        <th>Check Up URI</th>
        <th>Status</th>
      </thead>
      <tbody>
        {workers.map(worker => (
          <WorkerRow key={worker.workerId} worker={worker} />
        ))}
      </tbody>
      <AddWorkerRow />
    </table>
  </div>
)

export default WorkerList