import { ProjectModalData } from '../../types/projectModalTypes'
// Logo
import audiokit from '../../assets/images/Logo/other/audiokit-logo.png'
import swift from '../../assets/images/Logo/language/Swift-logo.png'
import realm from '../../assets/images/Logo/database-server/realm-logo.png'
// Image
import musicWandMain from '../../assets/images/projectPic/MusicWand/intro.png'
import musicWandIntro from '../../assets/images/projectPic/MusicWand/MainScreen.gif'
import musicWandDragAndDrop from '../../assets/images/projectPic/MusicWand/drag_and_drop.gif'
import musicWandPianoKeyboard from '../../assets/images/projectPic/MusicWand/piano_keyboard.gif'


export const musicWandSlide: ProjectModalData[] = [
  {
    backgroundImage: 'background_purple',
    intro: {
      githubLink: 'https://github.com/MusicMens/MusicWandPog.git',
      background:
        'Application created during a 4 week project in a 4 people team. The goal was to build and deploy a fullstack application using new technology.',
      concept: 'MusicWand is a simple, easy-to-use music composition app. Just create a new score and start adding in notes! Hear your song played back to you when you press play!',
      projectTechLogo: [realm, swift, audiokit],
      image: musicWandMain,
      imageIsVertical: true
    },
    keyFeature: [
      {
        text: 'Create simple create manage and listen your music track directly from the score view.',
        image: musicWandIntro,
        imageIsVertical: true
      },
      {
        text: "Create your composition by dragging the note on the score or by using the arrow command. Listen in real time the effect of your adjustment.",
        image: musicWandDragAndDrop,
        imageIsVertical: true
      },
      {
        text: 'Play your favorite music track in the piano view',
        image: musicWandPianoKeyboard,
        imageIsVertical: false
      }
    ],
    contributions: [
      {
        description: [
          {
            text: 'Developed backend by setting up a Realm Database for save and keep track in real time of any update at the score during the musik composition.',
          },
          {
            text: 'Work at the implementation of various element of the UI such the score visualization view and its functionality.',
          },
        ],
      },
    ],
  },
]