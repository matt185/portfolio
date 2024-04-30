// import { store } from '../store/store'
import { SlidesData } from '../types/projectModalTypes'
import { jobutenSlide } from './projects/jobutenDescription'
import { musicWandSlide } from './projects/musicWandDescriptions'
import { storeSimulatorSlide } from './projects/storeSimulatorDescription.ts'

export const projectsSlideData: SlidesData[] = [
  {
    projectId: 2,
    projectName: 'Music Wand',
    modalData: musicWandSlide,
  },
  {
    projectId: 3,
    projectName: 'Jobuten',
    modalData: jobutenSlide,
  },
  {
    projectId: 4,
    projectName: 'StoreSimulator',
    modalData: storeSimulatorSlide,
  }
]
