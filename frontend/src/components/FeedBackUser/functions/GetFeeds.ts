import axios from 'axios';

export async function getFeeds() {
  try {
    const feeds = await axios.get('/feeds');
    
  } catch (err) {
    console.log(err);
  }
}
