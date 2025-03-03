
import { MoonLoader } from "react-spinners";
import { useFetch } from "../../../hooks/useFetch";

const Users = () => {
    const {data: usuario, isLoading,error} = useFetch("https://jsonplaceholder.org/users")

    return (
        <div>
            {isLoading ?(
                <MoonLoader />
            ):(
                    <div>
                        {
                            usuario.map((usuario) => {
                                return (
                                    <div key={usuario.id}>
                                        <h4>{usuario.firstname}</h4>
                                        <h4>{usuario.lastname}</h4>
                                        <h4>{usuario.phone}</h4>
                                        <h4>{usuario.email}</h4>
                                    </div>
                                )
                            })
                        }
                    </div>
            )

            }
        </div>
    )
}

export default Users