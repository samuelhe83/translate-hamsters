import { observable } from 'mobx';

export class AppStore {
  @observable sitename = "Translate Hamsters";
  @observable username = "";
  @observable languages = {};
  @observable word = "";
  @observable translatedWord = "test";
  @observable showUpload = '';
  @observable audioSentence = '';
}

export default new AppStore;