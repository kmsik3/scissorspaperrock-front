import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  PATH_OF_API = "http://localhost:8080";

  constructor(private httpClient: HttpClient, private userAuthService: UserAuthService) { }

  public startGame(pickedHand: any, playerId: any) {
    var requestBody = {
      "playerId": playerId,
      "playerPick": pickedHand
    };

    return this.httpClient.post(this.PATH_OF_API + "/api/v1/game/start", requestBody);
  }

  public getWinRate() {
    let playerId = this.userAuthService.getEmail();

    let endpointUrl = this.PATH_OF_API + `/api/v1/game/calculate/${playerId}`;
    return this.httpClient.get(endpointUrl);
  }
}
