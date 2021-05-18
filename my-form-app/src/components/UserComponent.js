import React from 'react';
import FormComponent from './FormComponent';
import './UserComponent.css';

class UserComponent extends React.Component {
    state = {
        name: 'Daniel',
        lastName: 'Felipe',
        email: 'danielaucarpro@gmail.com',
        catchPhrase: 'Hello! Stay a while and listen!',
        isEditOn: false
    }

    onDelete = () => {

    }

    editUser = () => {
        console.log(this.state.isEditOn);
        this.setState({
            isEditOn: true
        });

        this.render = () => {
            return (
                <FormComponent EditUser={this.state.isEditOn}></FormComponent>
            );
        }

    }

    render() {
        return (
            <>
                <div>
                    <h4>{this.state.name} {this.state.lastName}</h4>
                    <p>{this.state.email}</p>
                    <p className='phrase'>"{this.state.catchPhrase}"</p>
                    <button onClick={this.onDelete} className='btn-del'>Delete User</button>
                    <button onClick={this.editUser} className='btn-edit'>Edit User</button>
                </div>
            </>
        );
    }
}

export default UserComponent;