
import { ClimbingBoxLoader } from "react-spinners"
import { useFetch } from "../../../hooks/useFetch"

const Comments = () => {

    const {data: comentario, isLoading,error} = useFetch("https://jsonplaceholder.org/comments")
    return (
        <div>
            { isLoading ? (
                <ClimbingBoxLoader />
            ):(
                    <div>
                        {
                            comentario.map((comentario) => {
                                return (
                                    <div key={comentario.id}>
                                        <h5>{comentario.comment}</h5>
                                    </div>
                                )
                            })
                        }
                    </div>
            )}
        </div>
    )
}

export default Comments