import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GameRecordService } from '../_services/game-record.service';
import { GameService } from '../_services/game.service';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  public radioButtonReactiveForm: FormGroup | undefined;
  public selected: string = 'SCISSORS';
  public hands: any = ['SCISSORS', 'PAPER', 'ROCK'];
  computerPick: string = "";
  gameResult: string = "";
  countGame: number = 0;
  countWin: number = 0;
  countLoss: number = 0;
  countDraw: number = 0;
  winRate: string = "";

  isSuccessful = false;
  isGameRecordExsited = false;
  errorMessage: string | null = '';
  isInternalServerError = false;


  constructor(private userService: UserService, private userAuthService: UserAuthService, private gameRecordService: GameRecordService,
    private gameService: GameService, private router: Router) { }

  ngOnInit(): void {

  }

  pickHand(handPickForm: NgForm) {
    let playerPick = handPickForm.value['hand'];
    let playerId = this.userAuthService.getEmail();
    let userRole = this.userAuthService.getUserRole();
    let desiredWinPercentage = this.gameRecordService.getDesiredWinPercentage() ? this.gameRecordService.getDesiredWinPercentage() : 0 ;
    let useAdminAdvantage = this.gameRecordService.getUseAdminAdvantage();

    this.gameService.startGame(playerPick, playerId, userRole, desiredWinPercentage, useAdminAdvantage).subscribe(
      (response: any) => {
        console.log(response);
        this.gameRecordService.setComputerPick(response.computerPick);
        this.gameRecordService.setComputerPick(response.result);
        this.computerPick = response.computerPick;
        this.gameResult = response.result;

        if (response.computerPick && response.result) {
          this.router.navigate(['/game'])
        }


      },
      (error) => {
        console.log(error);
        this.errorMessage = error.message;
        if (error === "Internal server error") {
          this.isInternalServerError = true;
        }
        }
      );
    }

  getWinRate() {
    this.gameService.getWinRate().subscribe(
      (response: any) => {
        console.log(response);
        this.gameRecordService.setCountGame(response.countGame);
        this.gameRecordService.setCountWin(response.countWin);
        this.gameRecordService.setCountLoss(response.countLoss);
        this.gameRecordService.setCountDraw(response.countDraw);
        this.gameRecordService.setWinRate(response.winRate);

        this.countGame = response.countGame;
        this.countWin = response.countWin;
        this.countLoss = response.countLoss;
        this.countDraw = response.countDraw;
        this.winRate = response.winRate;
        if (response.countGame && response.winRate) {
          this.isGameRecordExsited = false;
        }

      },
      (error) => {
        console.log(error);
        this.errorMessage = error;
        this.isGameRecordExsited = true;
      }
    );
  }
}
