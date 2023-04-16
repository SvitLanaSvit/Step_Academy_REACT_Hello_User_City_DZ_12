function Show(){
    let firstname = 'Svitlana';
    let lastname = 'Kizilpinar';
    let phoneNumber = '05214393603';
    let email = 'svitlana@gmail.com';

    return (
        <>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Firstmame</th>
                        <th>Lastmame</th>
                        <th>Phone number</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{firstname}</td>
                        <td>{lastname}</td>
                        <td>{phoneNumber}</td>
                        <td>{email}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default Show;