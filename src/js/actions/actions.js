import * as types from './actionTypes';

export function playerChoiceAction(player1Choice, player2Choice) {
  return {
    type: types.PLAYER_CHOICE,
    player1Choice,
    player2Choice
  }
}

export function newGameAction() {
  return {
    type: types.NEW_GAME
  }
}

export function setGameModeAction(gameMode) {
  return {
    type: types.SET_GAME_MODE,
    gameMode
  }
}

//TODO : Use me in the web UI
export function roundEndAction() {
  return {
    type: types.ROUND_END
  }
}

//TODO : Use me in the web UI
export function roundRestartAction() {
  return {
    type: types.ROUND_RESTART
  }
}
