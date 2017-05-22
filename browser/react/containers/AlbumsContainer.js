import { connect } from 'react-redux';
import Albums from '../components/Albums';

const mapStateToProps = function (state) {
  //  console.log('state: ', state);
  return {
    albums: (state.albums)
  };
}

const mapDispatchToProps = function(dispatch) {
    return {};
}

const AlbumsContainer = connect(mapStateToProps, mapDispatchToProps)(Albums);
export default AlbumsContainer;
