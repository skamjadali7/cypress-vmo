var data = require('./../../fixtures/rcb.json');
var players = data.player
var maxOverseasPlayer = [];
var maxAllROunderPlayer = [];
var oneWicketKeeper = [];
var playingXI = [];
var substitutes = [];
export class apiCall {
    maxForeignPlayerPlaying () {
        for (let i=0;i<players.length;i++){
            if (players[i].country != 'India' && players[i].playing == 'XI'){
                maxOverseasPlayer.push(players[i].name)
            }
        }
        expect(maxOverseasPlayer.length).to.eq(4);
    }

    maxAllRounderPlaying () {
        for (let i=0;i<players.length;i++){
            if (players[i].role == 'AllRounder' && players[i].playing == 'XI') {
                maxAllROunderPlayer.push(players[i].name)
            }
        }
        expect(maxAllROunderPlayer.length).to.be.greaterThan(1);
    }

    wicketKeeperMust () {
        for (let i=0;i<players.length;i++) {
            if (players[i].role == 'Wicketkeeper') {
                oneWicketKeeper.push(players[i].name)
            }
        }
        expect(oneWicketKeeper.length).to.be.eq(1);
    }
    SubstitutesPlayers () {
        for (let i=0;i<players.length;i++){
            if (players[i].playing !== "XI" && players[i].playing == "Sub") {
                substitutes.push(players[i].name)
                console.log(substitutes)
            }
        }
        console.log(substitutes);
        expect(substitutes.length).to.eq(15);
    }

    finalTeamPlayerWithSubstitutes () {
        for (let i=0;i<players.length;i++) {
            if (players[i].playing == 'XI'){
                playingXI.push(players[i].name)
                substitutes.push(players[i].playing['Sub'])
            }
        }
        console.log(playingXI);
        expect(playingXI.length).to.be.eq(11);
        this.SubstitutesPlayers();
    }

}