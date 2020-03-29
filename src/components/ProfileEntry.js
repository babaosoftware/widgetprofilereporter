import React from 'react'
import PropTypes from 'prop-types'
import styles from './ProfileEntry.module.css';

const ProfileEntry = ({entry}) => (
    <div className={styles.entry}>
        <div className={styles.name}>{entry.name}</div>
        <div className={styles.count}>{entry.count}</div>
        <div className={styles.time}>{entry.time}</div>
    </div>
)

ProfileEntry.propTypes = {
  entry: PropTypes.shape({
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      time: PropTypes.number.isRequired
  })
}

export default ProfileEntry