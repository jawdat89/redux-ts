import { RepositoriesActionType } from "../action-types";

export type RepositoriesAction =
  SearchRepositoriesActions |
  SearchRepositoriesSuccessAction |
  SearchRepositoriesErrorAction;


interface SearchRepositoriesActions {
  type: RepositoriesActionType.SEARCH_REPOSITORIES
}

interface SearchRepositoriesSuccessAction {
  type: RepositoriesActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: RepositoriesActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}