import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store';

@Module({ 
    namespaced: true,
    name: 'preferences',
    store,
    dynamic: true, 
})
class Preferences extends VuexModule {
  public lang = 'en-US';

  get language() {
      return this.lang;
  }

  @Mutation
  public SET_LANG(lang: string): void {
    this.lang = lang;
  }

  @Action
  public setLang(lang: string): void {
    this.context.commit('SET_LANG', lang);
  }
}

export default getModule(Preferences);