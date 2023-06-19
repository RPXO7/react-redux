import React from 'react'

const Userlisting = () => {
    
  return (
    <div>
        <div className='card'>
            <div className='card_header'>
        <h1> User List</h1>
            </div>
            <div className='card_body'>
                <table className='table  table-border'>
                    <thead className='bg-dark text-white'>
                        <tr>
                            <td>id</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Phone</td>
                            <td>Role</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody className=''>
                     <tr>
                        <td>1</td>
                        <td>RP</td>
                        <td>rp@gmail.com</td>
                        <td>1111111111</td>
                        <td>1</td>
                        <td>1</td>
                     </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Userlisting