import './searchBar.css';
export default function InputBar(){
    return (<>
   <form className="nosubmit">
        <input className="nosubmit" type="search" placeholder="Search..."/>
    </form>
    </>);
}