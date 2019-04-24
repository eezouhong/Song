import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) => {
    if(!song){
        return <div>Select a song </div>
    }

    return (
        <div>
            <h3>Detail for:</h3>
            <p>Title:{song.title}</p>
            <p>Duration:{song.duration}</p>
        </div>
    );
}

const mapStateToPros = (state) => {
    return { song: state.selectedSong }
};

export default connect(mapStateToPros)(SongDetail) ;