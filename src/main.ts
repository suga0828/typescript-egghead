import { SocialNetwork } from './interfaces/social-network';

class App implements SocialNetwork {
  
  title = 'Eggheads';

  getUsers() {
    return [{name: 'John'}];
  }

}

new App();