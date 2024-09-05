import AudioSpecTable from '../Component/AudioSpecTable'
import { TheadMetaType } from '../Component/Type'

import unprocessedAudio00 from './wav/speech/00_0_lr_audio.wav'
import unprocessedSpec00 from './wav/speech/00_0_lr_audio.png'
import nvsrAudio00 from './wav/speech/00_2_NVSR.wav'
import nvsrSpec00 from './wav/speech/00_2_NVSR.png'
import audioSRAudio00 from './wav/speech/00_3_AudioSR.wav'
import audioSRSpec00 from './wav/speech/00_3_AudioSR.png'
import flashSRAudio00 from './wav/speech/00_4_FlashSR.wav'
import flashSRSpec00 from './wav/speech/00_4_FlashSR.png'
import goundTruthAudio00 from './wav/speech/00_1_hr_audio.wav'
import goundTruthSpec00 from './wav/speech/00_1_hr_audio.png'

import unprocessedAudio01 from './wav/speech/01_0_lr_audio.wav'
import unprocessedSpec01 from './wav/speech/01_0_lr_audio.png'
import nvsrAudio01 from './wav/speech/01_2_NVSR.wav'
import nvsrSpec01 from './wav/speech/01_2_NVSR.png'
import audioSRAudio01 from './wav/speech/01_3_AudioSR.wav'
import audioSRSpec01 from './wav/speech/01_3_AudioSR.png'
import flashSRAudio01 from './wav/speech/01_4_FlashSR.wav'
import flashSRSpec01 from './wav/speech/01_4_FlashSR.png'
import goundTruthAudio01 from './wav/speech/01_1_hr_audio.wav'
import goundTruthSpec01 from './wav/speech/01_1_hr_audio.png'

export default function Speech() {
  const theadMetaArray: Array<TheadMetaType> = [
    {
      name: '8 kHz (Input)',
      miniTopDescription: '',
      description: '',
      color: '#4D97EF',
    },
    {
      name: 'NVSR-ResUNet',
      miniTopDescription: '',
      description: '',
      color: '#C00909',
    },
    {
      name: 'AudioSR',
      miniTopDescription: '100 NFEs',
      description: '',
      color: '#C00909',
    },
    {
      name: 'FlashSR ',
      miniTopDescription: '1 NFE',
      description: '(proposed)',
      color: '#EF7E4D',
    },
    {
      name: 'Ground-Truth',
      miniTopDescription: '',
      description: '',
      color: '#449948',
    },
  ]
  const tableAudio: Array<Array<any>> = [
    [
      unprocessedAudio00,
      nvsrAudio00,
      audioSRAudio00,
      flashSRAudio00,
      goundTruthAudio00,
    ],
    [
      unprocessedSpec00,
      nvsrSpec00,
      audioSRSpec00,
      flashSRSpec00,
      goundTruthSpec00,
    ],
    [
      unprocessedAudio01,
      nvsrAudio01,
      audioSRAudio01,
      flashSRAudio01,
      goundTruthAudio01,
    ],
    [
      unprocessedSpec01,
      nvsrSpec01,
      audioSRSpec01,
      flashSRSpec01,
      goundTruthSpec01,
    ],
  ]
  return (
    <AudioSpecTable
      tableName='Speech (8 kHz to 48 kHz)'
      theadMetaArray={theadMetaArray}
      tableAudio={tableAudio}
      audioWidth={'180px'}
    />
  )
}
