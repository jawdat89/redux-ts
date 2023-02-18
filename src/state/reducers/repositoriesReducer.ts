interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}


type RepositoriesActions =
  SearchRepositoriesActions |
  SearchRepositoriesSuccessAction |
  SearchRepositoriesErrorAction;

enum RepositoriesActionTyps {
  SEARCH_REPOSITORIES = 'search_repositories',
  SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success',
  SEARCH_REPOSITORIES_ERROR = 'search_repositories_error'
}

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


const reducer = (state: RepositoriesState, action: RepositoriesActions): RepositoriesState => {
  switch (action.type) {
    case RepositoriesActionTyps.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case RepositoriesActionTyps.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case RepositoriesActionTyps.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
