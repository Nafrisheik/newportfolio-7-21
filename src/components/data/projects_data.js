import tweetme from '../../assets/projects_images/tweetme.PNG'
import chat from '../../assets/projects_images/chat.png'
import hardware_store from '../../assets/projects_images/hardware_store.jpg'
import portfolio from '../../assets/projects_images/portfolio.JPG'
import new_year from '../../assets/projects_images/new_year.jpg'
import url from '../../assets/projects_images/img-1.jpg'
import todo from '../../assets/projects_images/img-2.jpg'
import sequence from '../../assets/projects_images/img-5.jpg'
import tictac from '../../assets/projects_images/img-3.jpg'
const data_projects = [
     {
        name: 'WhatsChat App',
        image: chat,
        deployed_url: 'https://whatsschat.netlify.app/',
        github_url: 'https://github.com/Nafrisheik/Whatschat',
        category: ['node.js', 'fullstack', 'react.js']
    },
    {
        name: 'Url Shortener',
        image: url,
        deployed_url: 'https://url-longto-shortener.netlify.app/',
        github_url: 'https://github.com/Nafrisheik/Url-shortener-frontend',
        category: ['node.js', 'fullstack']
     } ,
     {
        name: 'To-do-list',
        image: todo,
        deployed_url: 'https://advancetodolist.netlify.app/',
        github_url: 'https://github.com/Nafrisheik/Todolist-App',
        category: ['react.js']
       },
       {
        name: 'Sequence Finder',
        image: sequence,
        deployed_url: 'https://sequence-finder.netlify.app/',
        github_url:'https://github.com/Nafrisheik/SequenceFinder',
        category: ['vanilla']
       },
       {
        name: 'Tic-tac-toe',
        image: tictac,
        deployed_url: 'https://react-tic-tactoe.netlify.app/',
        github_url:'https://github.com/Nafrisheik/React_tictactoe',
        category: ['react.js']
       },
]


export default data_projects;