import { AppDispatch } from '../../../store';
import { initState } from '../../../types/userInit';

export type feedFormType = {
  setTellBtn: React.Dispatch<React.SetStateAction<boolean>>;
  tellBtn: boolean;
  feedText: string;
  setFeedText: React.Dispatch<React.SetStateAction<string>>;
  user: initState;
  dispatch: AppDispatch;
};
