import { AngularFireAuth } from 'angularfire2/auth';

import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase/app';


@Component({
    selector: 'app-root',
    templateUrl: './register.component.html',
})
export class RegisterComponent {
    constructor(private angularFireAuth: AngularFireAuth) {}

    registerWithGitHub() {
        console.log("clicked");
        this.angularFireAuth.auth
            .signInWithRedirect(new auth.GithubAuthProvider())
            .then(res => console.log());
    }
}
