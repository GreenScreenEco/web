import {Page} from "../components/Page";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import {useState} from "react";
import {useQuery} from "react-query";
import CompaniesTable, {CompanyDetails} from "../components/CompaniesTable";

type QueryCompaniesResponse = {
  results: CompanyDetails[],
}

export default function SearchCompaniesPage() {
  const [searchText, setSearchText] = useState<string>("")
  const {isLoading, isSuccess, isError, data, refetch} = useQuery(['search-companies', searchText], async ({queryKey}) => {
    const [_, searchText] = queryKey

    let fetchUrl = new URL("https://api.greenscreen.eco/v1/companies")
    fetchUrl.searchParams.set("search_text", searchText)

    const response = await fetch(fetchUrl)
    if (!response.ok) {
      throw new Error("HTTP response was not OK")
    }
    return (await response.json() as QueryCompaniesResponse)
  });

  return (
    <Page title="GreenScreen - Search Companies" nav={<Navbar activePage={"search-companies"} />} layout="simple">
      <h2>Search Companies</h2>
      <p>
        Search our database of partner data and GreenScreen official scores to learn more about the companies you fund.
      </p>
      <SearchBar searchText={searchText} setSearchText={setSearchText} onDoSearch={refetch} />
      {isLoading && <p>Loading...</p>}
      {isSuccess && <CompaniesTable companies={data.results} />}
      {isError && <p>Something went wrong.</p>}
    </Page>
  )
}