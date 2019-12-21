import React, { useEffect, FC, useState } from 'react';
import { getAllWorkersHealth } from '~api';
import { WorkerHealth } from '../components/dashboard/interfaces'
import WorkerList from '~components/dashboard/workerList'
import Sidebar from '../components/dashboard/sidebar'

const Dashboard = () => {
  const [workers, setWorkers] = useState(new Array<WorkerHealth>());
  useEffect(() => {
    getAllWorkersHealth().then(res => {
      let workers = res.data
      console.log(res.data)
      if (res.data) setWorkers(workers)
    })
  }, [])

  return (
    <div className="dashboard"> 
      <Sidebar>
        <ul>
          <li className="active-li">Dashboard</li>
          <li>Add User</li>
        </ul>
      </Sidebar>
      <div className="worker-list-container">
        <div className="table-container">
          <WorkerList workers={workers} />
        </div>
      </div>
    </div>
  )
}
  
export default Dashboard