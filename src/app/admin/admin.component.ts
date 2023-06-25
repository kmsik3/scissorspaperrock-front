import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GameRecordService } from '../_services/game-record.service';
import { GameService } from '../_services/game.service';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  winPercentage: number = 0;
  useAdavantage: string = "";

  constructor(private userService: UserService, private userAuthService: UserAuthService, private gameRecordService: GameRecordService,
    private gameService: GameService, private router: Router) { }

  ngOnInit(): void {
    this.winPercentage = Number(this.gameRecordService.getDesiredWinPercentage());
    this.useAdavantage = this.gameRecordService.getUseAdminAdvantage() ? 'Yes' : 'No';

  }


  advantage(advantageForm: NgForm) {
    this.gameRecordService.setDesiredWinPercentage(advantageForm.value.desiredWinPercentage);
    this.gameRecordService.setUseAdminAdvantage(advantageForm.value.useAdvantage);
    location.reload();
  }
}
