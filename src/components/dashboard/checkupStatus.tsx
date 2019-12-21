import React, { FC } from 'react'
import { faCloudSun, faSun, faPooStorm, faTasks } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


enum Status {
	StatusHealthy = 'Worker is healthy',
	StatusCloudy = 'Worker is cloudy',
	StatusStormy = 'Worker is stormy',

	StatusDefault ='No checkups found',
}

const CheckUpStatusIcon: FC<{ status: Status }> = ({ status }) => {
    switch (status) {
    case Status.StatusCloudy:
        return <span className="fa-icon__orange"><FontAwesomeIcon icon={faCloudSun} /></span>
    case Status.StatusHealthy:
        return <span className="fa-icon__orange"><FontAwesomeIcon icon={faSun} /></span>
    case Status.StatusStormy:
        return <span><FontAwesomeIcon icon={faPooStorm} /></span>
    default:
        return <span><FontAwesomeIcon icon={faTasks} /></span>
    }
}

export default ({ status }) => (
    <>
        {status}
        <CheckUpStatusIcon status={status} />
    </>
)
