import { connect } from 'react-redux';
import Album from '../components/Album';
import {toggleOne} from '../action-creators/player';

const mapStateToProps = function (state, ownProps) {
  //  console.log('BLAHHHHH: ', ownProps, 'state: ', state)
  return {
      selectedAlbum: state.albums.selected,
      currentSong: state.player.currentSong,
      isPlaying: state.player.isPlaying,
  };
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    toggleOne: function(song, list) {
      dispatch(toggleSong(song, list));
    }
  };
}

const AlbumContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);
export default AlbumContainer;
