import Request from './api_request.js';

class Leaderboard {
  constructor() {
    this.reference_id = 'zlQyoYBs8USVSuWg8RPI';
    this.boardContainer = document.querySelector('.list_cost');
    this.list();
  }

  displayContent = (contents) => {
    this.boardContainer.innerHTML = '';
    contents.forEach((content) => {
      const li = document.createElement('li');
      li.innerHTML = `<p>${content.user}: ${content.score}</p>`;
      this.boardContainer.appendChild(li);
    });
  }

  initialize = () => {
    document.querySelector('#submit-button')
      .addEventListener('click', (e) => this.logSubmit(e));
    document.querySelector('#refresh-button')
      .addEventListener('click', () => this.list());
  };

  list = async () => {
    const request = new Request();
    const list = await request.get(`games/${this.reference_id}/scores/`);
    this.displayContent(list.result);
  };

  add = async (user, score) => {
    const request = new Request();
    await request.post(`games/${this.reference_id}/scores/`, {
      user,
      score,
    });
    this.list();
  };

  logSubmit = async (event) => {
    const leadName = document.querySelector('#lead-name').value;
    const leadScpre = document.querySelector('#lead-score').value;
    await this.add(leadName, leadScpre);
    await this.list();
    event.preventDefault();
  };
}
export default Leaderboard;
