import axios from "axios";
import { Dispatch } from "react";
import { RepositoriesActionType } from "../action-types";
import { RepositoriesAction } from '../actions';

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<RepositoriesAction>) => { 
    dispatch({
      type: RepositoriesActionType.SEARCH_REPOSITORIES
    });

    try {
      const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
        params: {
          text: term
        }
      });

      const names = data.objects.map((result: any) => { 
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