import axios from "axios";
import { RepositoriesActionType } from "../action-types";
import { RepositoriesAction } from '../actions';

export const searchRepositories = (term: string) => {
  return async (dispatch: any) => { 
    dispatch({
      type: RepositoriesActionType.SEARCH_REPOSITORIES
    });

    try {
      const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
        params: {
          text: term
        }
      });

      const names = data.objects.ma((result: any) => { 
        return result.package.name;
      });

      dispatch({
        type: RepositoriesActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names
      });
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