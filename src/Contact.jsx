import React from 'react'

 function Contact({contact}) {
    return(
        <tr>
            <td>
              <img style={{"height":"100px"}} src={contact.pictureUrl} alt="pic"/>
            </td>
            <td>
                {contact.name}
            </td>
            <td>{contact.popularity}</td>
            {contact.wonOscar && <td>🏆</td>}
            {contact.wonEmmy && <td>🏆</td>}
        </tr>
    )
}

export default Contact
