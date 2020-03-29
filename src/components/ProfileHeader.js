import React from 'react'
import { connect } from 'react-redux'
import styles from './ProfileHeader.module.css';
import {sortByName, sortByCount, sortByTime} from '../redux/profileactions';

const ProfileHeader = ({dispatch}) => (
    <div className={styles.entry}>
        <div className={styles.name} onClick={() => dispatch(sortByName())}>Name</div>
        <div className={styles.count} onClick={() => dispatch(sortByCount())}>Count</div>
        <div className={styles.time} onClick={() => dispatch(sortByTime())}>Time</div>
    </div>
)

export default connect()(ProfileHeader);