"use client";

import React from 'react';
import {Button, Col, Row} from "antd";
import Image from "next/image";

import loginImage from "../../assets/login-image.png";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import {SubmitHandler} from "react-hook-form";

type FormValues = {
  id: string;
  password: string;
}

const LoginPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data: any)=> {
    try {
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image src={loginImage} alt="Login Image" width={500} />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0"
          }}
        >First login your account</h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput name="id" type="text" size="large" label="User Id"/>
            </div>
            <div
              style={{
                margin: "15px 0"
              }}
            >
              <FormInput name="password" type="password" size="large" label="User Password"/>
            </div>
            <Button type="primary" htmlType="submit">Login</Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;