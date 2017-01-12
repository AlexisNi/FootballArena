/**
 * Created by alex on 07/01/2017.
 */
import {Component, Input, OnInit} from "@angular/core";
import {Stats} from "../game-list/models/stats";
import {SocketService} from "../socketHanding/socket.service";
import {AuthService} from "../../auth/auth.service";


@Component({
    selector:'arena-header',
    templateUrl:'./arena-header.component.html'
})

export  class ArenaHeaderComponent{
    constructor(private socketServices:SocketService,private authservice:AuthService){}


    @Input() username;
    @Input() stats:Stats;




    logout(){
        this.authservice.logout();

    }
}