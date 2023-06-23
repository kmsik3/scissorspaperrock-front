import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameRecordService {

  constructor() { }

  public setComputerPick(computerPick: string) {
    localStorage.setItem('computerPick', computerPick);
  }

  public getComputerPick() {
    return localStorage.getItem('computerPick');
  }

  public setGameResult(result: string) {
    localStorage.setItem('result: ', result);
  }

  public getGameResult() {
    return localStorage.getItem('result: ');
  }

  public setCountGame(countGame: number) {
    localStorage.setItem('countGame', countGame.toString())
  }

  public getCountGame() {
    return localStorage.getItem('countGame');
  }

  public setCountWin(countWin: number) {
    localStorage.setItem('countWin', countWin.toString())
  }

  public getCountWin() {
    return localStorage.getItem('countWin');
  }

  public setCountLoss(countLoss: number) {
    localStorage.setItem('countLoss', countLoss.toString())
  }

  public getCountLoss() {
    return localStorage.getItem('countLoss');
  }

  public setCountDraw(countDraw: number) {
    localStorage.setItem('countDraw', countDraw.toString())
  }

  public getCountDraw() {
    return localStorage.getItem('countDraw');
  }

  public setWinRate(winRate: number) {
    localStorage.setItem('winRate', winRate.toString())
  }

  public getWinRate() {
    return localStorage.getItem('winRate');
  }
}
