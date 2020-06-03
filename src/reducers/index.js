export const songsReducer = () => {
    return [
        {
            title: 'Rocketman',
            duration: '5:20'
        },
        {
            title: 'Saturday Night',
            duration: '4:33'
        },
        {
            title: 'Here Comes The Sun',
            duration: '2:54'
        },
        {
            title: 'No Scrubs',
            duration: '3:03'
        }
    ];
};

export const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SELECTED_SONG') {
        return action.payload;
    }

    return selectedSong;
};