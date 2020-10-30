import { combineReducers } from 'redux';


const songsReducer = () => {
    return[
        { title: 'This is What if Feels Like', author: 'Armin Van Buuren' , duration: '5:25'},
        { title: 'Royal Intense', author: 'Armin Van Buuren', duration: '4:24'},
        { title: 'Tomorrowland 2015', author: 'Tomorrowland', duration: '53:29'},
        { title: 'Something Real', author: 'Armin Van Buuren', duration: '3:58'},
        { title: 'Remei', author: 'My First Story', duration: '4:40'}
    ]
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});