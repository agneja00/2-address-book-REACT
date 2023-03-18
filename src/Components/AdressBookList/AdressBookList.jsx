import AdressBookCard from "../AdressBookCard/AdressBookCard";
import AdressGrid from "../AdressBookGrid/AdressGrid"

const AdressBookList = ({ list }) => {
    return (
        <div>
            <AdressGrid>
                {list && list.map((user) => {
                    return <AdressBookCard name={user.name} surname={user.surname} phone={user.phone} key={user.surname + user.phone} />
                })}
            </AdressGrid>
        </div>
    )
}

// nustatome, ka turi atvaizduoti

export default AdressBookList;