import {playMode} from 'common/js/config'

const state = {
  singer: {},
  playing: false,
  // 全屏
  fullScreen: false,
  playlist: [],
  sequenceList: [],
  // 播放模式
  mode: playMode.sequence,
  currentIndex: -1
}

export default state
