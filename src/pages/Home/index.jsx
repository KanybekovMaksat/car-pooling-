import ListNav from '../../components/listNav'
import { Maps } from '../../components/Maps'
import { SearchForm } from '../../components/searchForm'

export const Home = () => {
  return (
    <>
      <Maps />
      <div className="absolute p-2  bottom-[50px] w-full flex flex-col gap-3">
        <SearchForm />
        <ListNav />
      </div>
    </>
  )
}
