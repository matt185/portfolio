import { ProjectModalData } from '../../types/projectModalTypes'
// Logo
import graphQL from '../../assets/images/Logo/database-server/graphql-logo.png'
import express from '../../assets/images/Logo/database-server/nodeExpress-logo.png'
import apollo from '../../assets/images/Logo/database-server/apollo-logo.png'
import vue from '../../assets/images/Logo/frontend/vue-logo.png'
import vueMaterial from '../../assets/images/Logo/frontend/vuematerial-logo.png'
import sequelize from '../../assets/images/Logo/database-server/sequelize-logo.png'
import postgress from '../../assets/images/Logo/database-server/postgresql-logo.png'

// Image
import storedMain from '../../assets/images/projectPic/store-simulator/main.png'
import storeDialog from '../../assets/images/projectPic/store-simulator/dialog.png'
import storeBag from '../../assets/images/projectPic/store-simulator/favoriteList.png'
import musicWandPianoKeyboard from '../../assets/images/projectPic/MusicWand/piano_keyboard.gif'


export const storeSimulatorSlide: ProjectModalData[] = [
  {
    backgroundImage: 'background_buble',
    intro: {
      githubLink: 'https://github.com/matt185/store-simulator',
      background:
        'Fullstack application developed independently The main goal for this project was to create a an application using new technology recently learned.',
      concept: 'Store simulator is the simulation  of the online site of a wholesale company. The user account will be activate after a request from the owner of the site. After the activation the user will be able to save the favorite item and ship the order.',
      projectTechLogo: [sequelize, postgress, vue, graphQL, express, apollo, vueMaterial],
      image: storedMain,
      imageIsVertical: false
    },
    keyFeature: [
      {
        text: 'See the selected item information choose if add it directly to the shopping bag or simply save it on the favorite for easily find it later.',
        image: storeDialog,
        imageIsVertical: false
      },
      {
        text: 'See the list of the article in the favorite list and inside the shopping bag decide if keep them or simply ship the order. Keep track of your order in the order view.',
        image: storeBag,
        imageIsVertical: false
      },
      {
        text: 'Manage the store by adding, deleting or update the item present in the store.Search the favorite item around the many present inside the store',
        image: musicWandPianoKeyboard,
        imageIsVertical: false
      }
    ],
    contributions: [
      {
        description: [
          {
            text: 'Developed backend by setting up the SQL Database using Postgres and Sequelize.',
          },
          {
            text: 'Developed the backend by implementing an Express server and a GraphQL API by using.',
          },
          {
            text: 'Developed the frontend using VueJS,Vue Material library for style the UI component and implemented a Vuex store for state management .',
          },
          {
            text: 'Query the database data by using Vue Apollo.',
          },
        ],
      },
    ],
  },
]