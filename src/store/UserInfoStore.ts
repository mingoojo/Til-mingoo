/* eslint-disable no-console */
import { collection, onSnapshot } from 'firebase/firestore';
import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import { appFireStore } from '../firebase/config';
import { UserData } from '../type/types';

@singleton()
@Store()
export default class UserInfoStore {
  // 유저정보
  UserInfo:UserData[] = [];

  // 유저사진 URL
  UserURL = '';

  // 에러상태
  error = false;

  // 통신상태
  isPending = false;

  // 정보받아오기
  async readUserInfo({ uid }:{ uid:string}) {
    this.setIsPending(true);
    this.setError(false);

    try {
      await onSnapshot(
        collection(appFireStore, 'Users'),
        (snapshot) => {
          snapshot.docs.forEach((docu) => {
            const result = [{ ...docu.data(), id: docu.id }] as UserData[];
            if (uid === result[0].uid) {
              this.setUserInfo(result);
            }
          });
        },
      );
      this.setIsPending(false);
      this.setError(false);
    } catch (error) {
      this.setIsPending(false);
      this.setError(true);
    }
  }

  @Action()
  setError(payload:boolean) {
    this.error = payload;
  }

  @Action()
  setIsPending(payload:boolean) {
    this.isPending = payload;
  }

  @Action()
  setUserInfo(UserInfo:UserData[]) {
    this.UserInfo = UserInfo;
  }
}
