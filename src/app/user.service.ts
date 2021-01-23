import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User): void {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      value: user.email
    });
  }
}
