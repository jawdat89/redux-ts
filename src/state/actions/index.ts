import { RepositoriesActionTyps } from "../action-types";

export type RepositoriesActions =
  SearchRepositoriesActions |
  SearchRepositoriesSuccessAction |
  SearchRepositoriesErrorAction;


interface SearchRepositoriesActions {
  type: RepositoriesActionTyps.SEARCH_REPOSITORIES
}

interface SearchRepositoriesSuccessAction {
  type: RepositoriesActionTyps.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: RepositoriesActionTyps.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}