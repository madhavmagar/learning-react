import { useParams } from 'react-router'

function User() {

    const { id } = useParams()
    return (
        <div className='bg-gray-500 text-3xl p-4 text-white'>User: {id}</div>
    )
}

export default User