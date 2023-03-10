import { LitElement, html } from 'lit-element';

class UserSearchView extends LitElement {
  constructor() {
    super();
    this.info = INFO;
  }

  render() {
    return html`
      <img src="${this.info.avatar_url}" />
      <div>
        <span>${this.info.name}</span>
        <span>${this.info.login}</span>
      </div>
    `;
  }
}

window.customElements.define('user-search-view', UserSearchView);

const INFO = {
  login: 'vicdata4',
  id: 25375982,
  node_id: 'MDQ6VXNlcjI1Mzc1OTgy',
  avatar_url: 'https://avatars.githubusercontent.com/u/25375982?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/vicdata4',
  html_url: 'https://github.com/vicdata4',
  followers_url: 'https://api.github.com/users/vicdata4/followers',
  following_url: 'https://api.github.com/users/vicdata4/following{/other_user}',
  gists_url: 'https://api.github.com/users/vicdata4/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/vicdata4/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/vicdata4/subscriptions',
  organizations_url: 'https://api.github.com/users/vicdata4/orgs',
  repos_url: 'https://api.github.com/users/vicdata4/repos',
  events_url: 'https://api.github.com/users/vicdata4/events{/privacy}',
  received_events_url: 'https://api.github.com/users/vicdata4/received_events',
  type: 'User',
  site_admin: false,
  name: 'Víctor González',
  company: 'Banking sector',
  blog: 'https://www.npmjs.com/~vicdata',
  location: 'Madrid',
  email: null,
  hireable: null,
  bio: 'Web Developer',
  twitter_username: null,
  public_repos: 40,
  public_gists: 0,
  followers: 45,
  following: 44,
  created_at: '2017-01-26T21:47:24Z',
  updated_at: '2022-09-15T07:15:15Z',
};
