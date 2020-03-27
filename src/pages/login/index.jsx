import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './index.scss';
import { login } from './../../api/index';

export default class Login extends Component {
	handelSubmit = async (values) => {
		let res = await login(values, 'post');
		if (res && res['code'] === '0000') {
			console.log('handelSubmit resp :', res);
			this.props.history.replace('/home');
		}
	};
	render() {
		return (
			<div className="main">
				<div className="container">
					<Form
						name="normal_login"
						className="login-form"
						initialValues={{
							remember: true
						}}
						onFinish={this.handelSubmit}
					>
						<Form.Item
							name="username"
							rules={[
								{
									// required: true,
									message: 'Please input your Username!'
								}
							]}
						>
							<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
						</Form.Item>
						<Form.Item
							name="password"
							rules={[
								{
									// required: true,
									message: 'Please input your Password!'
								}
							]}
						>
							<Input
								prefix={<LockOutlined className="site-form-item-icon" />}
								type="password"
								placeholder="Password"
							/>
						</Form.Item>
						{/* <Form.Item>
						<Form.Item name="remember" valuePropName="checked" noStyle>
							<Checkbox>Remember me</Checkbox>
						</Form.Item>

						<a className="login-form-forgot" href="">
							Forgot password
						</a>
					</Form.Item> */}

						<Form.Item style={{ textAlign: 'center' }}>
							<Button
								type="primary"
								htmlType="submit"
								className="login-form-button"
								style={{ marginRight: '15px' }}
							>
								登录
							</Button>
							<Button htmlType="submit" className="login-form-button">
								马上注册
							</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		);
	}
}
