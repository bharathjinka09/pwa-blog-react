import React, { useState, useEffect } from 'react'
import {Table} from 'react-bootstrap'

function Users(){ 

	const [users, setUsers] = useState([])
	const [mode, setMode] = useState('online')

	useEffect(() => {
		let url = "https://jsonplaceholder.typicode.com/users"
		fetch(url).then((response) => {
			response.json().then((result) => {
				console.log("result",result)
				setUsers(result)
				localStorage.setItem("users", JSON.stringify(result))
			})
		}).catch(error =>{
			let collection = localStorage.getItem("users")
			setUsers(JSON.parse(collection))
			setMode('offline')
		})
	},[])

	return (
		<div>
			<div>
				{
					mode==='offline'?
					<div className='alert alert-warning' role='alert'>
						You are offline. Please check internet connection!
					</div>:null	
				}
			</div>
		    <Table striped bordered hover responsive>
			  <thead>
			    <tr>
			      <th>ID</th>
			      <th>Name</th>
			      <th>Email</th>
			      <th>Address</th>
			    </tr>
			  </thead>
			  <tbody>
			  	{
			  		users.map((user) => 
			  			<tr key={user.id}>
					      <td>{user.id}</td>
					      <td>{user.name}</td>
					      <td>{user.email}</td>
					      <td>{user.address.street}</td>
					    </tr>
			  		)
			  	}
			    
			  </tbody>
			</Table>
		</div>
	)

}

export default Users