import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likes: 12},
                {id: 2, message: 'It\'s my first post?', likes: 20}
            ],
            newPostText: 'eusky'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Eugene'},
                {id: 2, name: 'Jack'},
                {id: 3, name: 'Steve'},
                {id: 4, name: 'Tim'},
                {id: 5, name: 'Craig'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'How is your React lessons?'},
                {id: 4, message: 'Whats up?'},
                {id: 5, message: 'What are you doing?'}
            ],
            newMessageBody: ''
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: 'Eugene',
                    avatarUrl: 'https://i0.wp.com/ahfirstaid.org/wp-content/uploads/2014/07/avatar-placeholder.png?fit=204%2C204'
                },
                {
                    id: 2,
                    name: 'Jack',
                    avatarUrl: 'https://i0.wp.com/ahfirstaid.org/wp-content/uploads/2014/07/avatar-placeholder.png?fit=204%2C204'
                },
                {
                    id: 3,
                    name: 'Steve',
                    avatarUrl: 'https://i0.wp.com/ahfirstaid.org/wp-content/uploads/2014/07/avatar-placeholder.png?fit=204%2C204'
                },
                {
                    id: 4,
                    name: 'Tim',
                    avatarUrl: 'https://i0.wp.com/ahfirstaid.org/wp-content/uploads/2014/07/avatar-placeholder.png?fit=204%2C204'
                },
                {
                    id: 5,
                    name: 'Craig',
                    avatarUrl: 'https://i0.wp.com/ahfirstaid.org/wp-content/uploads/2014/07/avatar-placeholder.png?fit=204%2C204'
                }
            ]
        }
    },
    _callSubscriber() {
        console.log('State was changed')
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state)
    }
};


window.store = store;
export default store;