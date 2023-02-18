import axios from "axios";
import { RepositoriesActionType } from "../action-types";
import { RepositoriesAction } from '../actions';

const searchRepositories = (term: string) => {
  return async (dispatch: any) => { 
    dispatch({
      type: RepositoriesActionType.SEARCH_REPOSITORIES
    });

    try {
      
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: RepositoriesActionType.SEARCH_REPOSITORIES_ERROR,
          payload: err.message,
        });
      }
    }
  };
};