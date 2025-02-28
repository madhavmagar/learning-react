import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router'

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/madhavmagar')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setData(data)
    //         })
    // }, [])

    return (
        <div className='text-center m-4 p-4 text-3xl text-white bg-gray-600 grid grid-cols-4 items-center'>
            <img src={data.avatar_url} alt="" width={200} />
            Github Followars: {data.followers}
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/madhavmagar')
    return response.json()
}