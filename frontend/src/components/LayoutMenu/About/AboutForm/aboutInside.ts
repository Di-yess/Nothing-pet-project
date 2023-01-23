const text = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora quae
provident placeat voluptates minima molestiae porro et vero cupiditate
amet, libero, praesentium assumenda possimus impedit repellendus. Minima
accusamus similique odit?`;

const what = `Hi, here should be a very cool description of what this project is about. But after spending several hours thinking, I said to myself: “Man, there is nothing to say”. And that's what I'm telling you. So nothing is nothing, right? And a few more words.`;
const why = `Essentially this project is just a pet project that I want to post on github. To try new fitches and have fun.  So if you are interested all the necessary links in the footer. Have a nice day!`;

export const arrForm = [
  { id: 1, title: 'What is Nothing?', text: what },
  { id: 10, title: 'Why?', text: why },
];

export interface About {
  id: number;
  title: string;
  text: string;
}
