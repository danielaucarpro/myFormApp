import React from 'react';
import FormComponent from './FormComponent';
import './UserComponent.css';

class UserComponent extends React.Component {
    state = {
        user: [this.props.user],
        id: this.props.user.id,
        name: this.props.user.name,
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
            //create map with user jsut like raphael
            <>
                <div>
                    {this.state.user.map((user) => {
                        <div key= {this.state.id}>
                            <p>Name: {this.state.name} {user.lastName}</p>
                            <p>Email: {user.email}</p>
                            <p>Phrase: {user.catchPhrase}</p>
                        </div>
                    })}
                </div>
                <div>
                    <button onClick={this.onDelete} className='btn-del'>Delete User</button>
                    <button onClick={this.editUser} className='btn-edit'>Edit User</button>
                </div>
            </>
        );
    }
}

export default UserComponent;