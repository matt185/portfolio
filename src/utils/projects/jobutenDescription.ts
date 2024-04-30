import { ProjectModalData } from '../../types/projectModalTypes'
// Logo
import react from '../../assets/images/Logo/frontend/react-logo.png'
import mdb from '../../assets/images/Logo/frontend/mdb-logo.png'
import knex from '../../assets/images/Logo/database-server/knex-logo.png'
import postgresql from '../../assets/images/Logo/database-server/postgresql-logo.png'
import node from '../../assets/images/Logo/language/node-logo.png'
import rakutenRapidApi from '../../assets/images/Logo/other/Rakuten-RapidAPI-logo.png'

// Image
import JobutenMain from '../../assets/images/projectPic/Jobuten/JobutenMain.png'
import JobutenJob from '../../assets/images/projectPic/Jobuten/jobs.png'
import JobutenNews from '../../assets/images/projectPic/Jobuten/news.png'
import musicWandPianoKeyboard from '../../assets/images/projectPic/MusicWand/piano_keyboard.gif'


export const jobutenSlide: ProjectModalData[] = [
  {
    backgroundImage: 'background_yellow',
    intro: {
      githubLink: 'https://github.com/matt185/Jobuten-Dev-Jobs-App',
      background:
        'Application developed inside a 4 day project in a 5 people team. The main objective was to create a deploy an application by using some of the API served by Rakuten Rapid Api.',
      concept: 'Jobuten is an application to help job seekers around the world and be updated with the latest tech news.',
      projectTechLogo: [react, mdb, knex, postgresql, node, rakutenRapidApi],
      image: JobutenMain,
    },
    keyFeature: [
      {
        text: 'Look for job postings from Japan or abroad with filtered search function.',
        image: JobutenJob,
        imageIsVertical: false
      },
      {
        text: "Search for latest tech news in Japan or globally. Title and Summary are visible in search result.",
        image: JobutenNews,
        imageIsVertical: false
      },

    ],
    contributions: [
      {
        description: [
          {
            text: 'Developed backend by setting up the SQL Database for tracking user login data.',
          },
          {
            text: 'Successfully implemented RESTful API server in Node JS.',
          },
        ],
      },
    ],
  },
]