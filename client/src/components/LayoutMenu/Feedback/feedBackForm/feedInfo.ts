export interface feedFace {
  id: number;
  img: string;
  text: string;
  name: string;
}

type setFeedInt = React.Dispatch<React.SetStateAction<feedFace>>;

export const feeds = [
  { id: 0, img: '/imgs/Lisa.png', text: 'Outstanding', name: 'Lisa' },
  { id: 1, img: '/imgs/Gabriel.png', text: 'Awesome', name: 'Gabriel' },
  { id: 2, img: '/imgs/Akachi.png', text: 'Nothing to say', name: 'Akachi' },
];

export function nextFeed({
  feed,
  setFeed,
}: {
  feed: feedFace;
  setFeed: setFeedInt;
}): void {
  if (feed.id === 0) setFeed(feeds[1]);
  else if (feed.id === 1) setFeed(feeds[2]);
  else if (feed.id === 2) setFeed(feeds[0]);
}

export function prevFeed({
  feed,
  setFeed,
}: {
  feed: feedFace;
  setFeed: setFeedInt;
}): void {
  if (feed.id === 0) setFeed(feeds[2]);
  else if (feed.id === 2) setFeed(feeds[1]);
  else if (feed.id === 1) setFeed(feeds[0]);
}
