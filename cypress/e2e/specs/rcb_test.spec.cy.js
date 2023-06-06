import {apiCall} from '../pages/rcb_po';
const api = new apiCall();
describe("RCB E-SALA CUP NAMDE",()=>{
    it ('max foregin players in playing XI',()=>{
        api.maxForeignPlayerPlaying();
    })
    it ('max allrounder in playing XI',()=>{
        api.maxAllRounderPlaying();
    })
    it ('one wicketkeeper in team',()=>{
        api.wicketKeeperMust();
    })
    it ('playing XI and substitutes in team',()=>{
        api.finalTeamPlayerWithSubstitutes();
        api.SubstitutesPlayers();
    })
})