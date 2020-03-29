import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import ProfileEntry from './ProfileEntry'
import { fetchResult} from '../redux/profileactions';
import ProfileHeader from './ProfileHeader';
import styles from './ProfileList.module.css';

const ProfileList = ({ result, loading, sort, dispatch}) => {

  // eslint-disable-next-line
  useEffect(() => dispatch(fetchResult()), []);

  const resultSorted = result.slice(0);
  resultSorted.sort((a, b) => sort === 'time' ? b.time - a.time : (sort === 'count' ? b.count - a.count : b.name.localeCompare(a.name)));

  let list;

  if (loading) {
    list = <div>Loading...</div>
  }
  else {
    if (resultSorted.length > 0) {
      list =
        <div className={styles.wrapper}>
          <ProfileHeader/>
          {resultSorted.map((entry, index) => (
            <ProfileEntry key={index} entry={entry} />
          ))}
        </div>
    }
    else
      list = <div>Nothing to show!</div>
  }

  return (
    <div style={{textAlign:'start', margin: '8px'}}>
      <button style={{margin: '8px', marginLeft: '0px'}} type='button' onClick={() => dispatch(fetchResult())}>Reload</button>
      {list}
    </div>
  )
}

ProfileList.propTypes = {
  result: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  sort: PropTypes.oneOf(['name', 'count', 'time']).isRequired,
  dispatch: PropTypes.func.isRequired
}

export default ProfileList