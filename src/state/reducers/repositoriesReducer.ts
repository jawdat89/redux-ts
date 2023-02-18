import { RepositoriesActionTyps } from "../action-types";
import { RepositoriesActions } from "../actions";


interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
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
