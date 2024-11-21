import ListNav from "../../components/listNav";
import { Maps } from "../../components/Maps";
import { SearchForm } from "../../components/searchForm";

export const Home = () => {
  return (
    <>
      <Maps />
      <div className="absolute left-[4rem] bottom-[30px]">
        <SearchForm />
        <ListNav />
      </div>
    </>
  );
};
