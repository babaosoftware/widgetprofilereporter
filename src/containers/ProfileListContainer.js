import { connect } from 'react-redux'
import ProfileList from '../components/ProfileList';

const mapStateToProps = state => ({result: state.result, sort: state.sort, loading: state.loading});

// const mapDispatchToProps = dispatch => ({
//   toggleTodo: id => dispatch(toggleTodo(id))
// })

export default connect(mapStateToProps)(ProfileList);