import React, { useState, useEffect } from 'react'
import {Table} from 'react-bootstrap'

function Users(){ 

	const [users, setUsers] = useState([])

	useEffect(() => {
		let url = "https://jsonplaceholder.typicode.com/users"
		fetch(url).then((response) => {
			response.json().then((result) => {
				console.log("result",result)
				setUsers(result)
			})
		})
	},[])

	return (
		<div>
		    <Table striped bordered hover>
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
			  			<tr>
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