import React, { Component } from 'react';
import axios from 'axios';
import { email } from '../../dataStore/mail';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class FormPage extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			message: ''
		};
		//this.handlesubmit = this.handlesubmit.bind(this);
	}
	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
		console.log(this.state);
	};
	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
		console.log(this.state);
	};
	async componentDidMount() {
		this.handlesubmit = e => {
			//e.preventDefault();
			const { name, email, message } = this.state;
			const dataToSubmit = { name, email, message };
			//  const form = await axios.post('api/form', dataToSubmit);
			axios.post('api/form', dataToSubmit).then(response => {
				if (response.data.msg === 'success') {
					alert('Email sent, awesome!');
					this.resetForm();
				} else if (response.data.msg === 'fail') {
					alert('Oops, something went wrong. Try again');
				}
			});
		};
	}

	render() {
		return (
			<Form className="form" action={email} method="POST">
				<FormGroup>
					<Label for="name">Name:</Label>
					<Input type="text" name="name" onChange={this.handleChange} />
				</FormGroup>
				<FormGroup>
					<Label for="email">Email:</Label>
					<Input type="email" name="email" onChange={this.handleChange} />
				</FormGroup>
				<FormGroup>
					<Label for="name">Message:</Label>
					<Input
						type="textarea"
						rows="18"
						name="message"
						onChange={this.handleChange}
					/>
				</FormGroup>
				<Button type="submit"> Wyslij</Button>
			</Form>
		);
	}
}

export default FormPage;
