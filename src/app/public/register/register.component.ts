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
        const provider = new auth.GithubAuthProvider();
        provider.addScope('repo');

        this.angularFireAuth.auth
            .signInWithRedirect(provider)
            .then(res => console.log(res));
    }
}
