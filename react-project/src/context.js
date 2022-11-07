const url = "www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);
};

const fetchDrinks = async () => {
  setLoading(true);
  try {
  } catch (error) {
    console.log(error);
  }
};

return (
  <AppContext.Provider
    value={{
      loading,
      cocktails,
      setSearchTerm,
    }}
  >
    {children}
  </AppContext.Provider>
);
