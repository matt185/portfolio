import MusicWandImage from '../assets/images/projectPic/MusicWand/intro.png'
import JobutenImage from '../assets/images/projectPic/Jobuten/jobs.png'
import ShopSimulatorImage from '../assets/images/projectPic/store-simulator/shop-simulator.png'
import SnakeGameImage from '../assets/images/projectPic/snake/snake.png'
import TurtleInvadersImage from '../assets/images/projectPic/turtleInvaders/turtle_invaders.png'
import PomodoroAppImage from '../assets/images/projectPic/pomodoroApp/pomodoro-app.png'
import MovieListImage from '../assets/images/projectPic/MovieList/movie-list-main.png'
import { Project } from '../types/types'

export const projectsList: Project[] = [
  {
    projectId: 1,
    name: 'HTML CSS Components',
    logo: MusicWandImage,
    logoIsVertical: true,
    description:
      'Collection of Html components',
    techStack: 'Typescript, React',
    link: 'https://github.com/MusicMens/MusicWandPog.git',
    route: '/projects/web_components',
    page: true,
    home: true,
  },
  {
    projectId: 2,
    name: 'Music Wand',
    logo: MusicWandImage,
    logoIsVertical: true,
    description:
      'MusicWand is a simple, easy-to-use music composition app. Just create a new score and start adding in notes! Hear your song played back to you when you press play!',
    techStack: 'Swift, Realm database',
    link: 'https://github.com/MusicMens/MusicWandPog.git',
    route: '/project/music-wand',
    page: true,
    home: true,
  },
  {
    projectId: 3,
    name: 'Jobuten',
    logo: JobutenImage,
    description:
      'Jobuten is an application to help job seekers around the world and be updated with the latest tech news.',
    techStack: 'React , Rakuten Rapid Api, Postgres',
    link: 'https://github.com/matt185/Jobuten-Dev-Jobs-App',
    route: '/project/jobuten',
    page: true,
    home: true,
  },
  {
    projectId: 4,
    name: 'Store Simulator',
    logo: ShopSimulatorImage,
    description:
      'Store simulator is the simulation  of the online site of a wholesale company. The user  account will be activate after a request from the owner of the site. After the activation the user will be able to save the favorite item and ship the order.',
    techStack: 'VueJS, Graphql, Postgres, Sequelize',
    link: 'https://github.com/matt185/store-simulator',
    route: '/project/store-simulator',
    page: true,
    home: true,
  },
  {
    projectId: 5,
    name: 'Snake Game',
    logo: SnakeGameImage,
    description:
      'Simple remake of the famous snake game, some of the feature implement regards the random positioning of the obstacle and the increasing of the movement speed will playing.',
    techStack: 'Python, Turtle',
    link: 'https://github.com/matt185/Snake-game',
    route: '',
    page: false,
    home: false,
  },
  {
    projectId: 6,
    name: 'Turtle Invaders',
    logo: TurtleInvadersImage,
    description:
      'Remake of the popular game Space Invaders. Hit all the turtle before they reach you.',
    techStack: 'Python, Turtle',
    link: 'https://github.com/matt185/Turtle-Invaders',
    route: '',
    page: false,
    home: false,
  },
  {
    projectId: 7,
    name: 'Pomodoro App',
    logo: PomodoroAppImage,
    description:
      'A pomodoro app to help you manage your better your time.',
    techStack: 'Python, tkinter',
    link: 'https://github.com/matt185/pomodoro-app',
    route: '',
    page: false,
    home: false,
  },
  {
    projectId: 8,
    name: 'Movie List',
    logo: MovieListImage,
    description:
      '',
    techStack: 'Python, tkinter',
    link: 'https://github.com/matt185/pomodoro-app',
    route: '',
    page: false,
    home: false,
  },

]

