import NavBar from "../NavBar";
import SearchComponent from "./SearchComponent";

const SearchScreen = () => {
    return(
      <>
          <NavBar page={'search'}/>
          <SearchComponent/>
      </>
    );
}

export default SearchScreen;