import React, { useState } from "react";

import "../style/Signup.css"
const Signup = () => {
	const[name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [contact, setContact] = useState("");
	const [address, setAddress] = useState("");

	const onChangeName = e => {
		setName(e.target.value);
	};
	const onChangeEmail = e => {
		setEmail(e.target.value);
	};
	const onChangeContact = e => {
		setContact(e.target.value);
	};
	const onChangeAddress = e => {
		setAddress(e.target.value);
	};
	useEffect(() => {
		name.length <= 5 && name.length >= 3 ? :console.log("이름의 길이가 적합하지 않습니다."); 
	}, [name])

  return (
    <>
		<h1 className="pageTitle">회원가입 폼</h1>
			<div className="formsignup">
				<legend>입력사항</legend>
					<table>
						<tr>
							<td>이름</td>
							<td><input type="text" name="username" value={name} placeholder="이름" required onChange={onChangeName}/></td>
						</tr>
						<tr>
							<td>이메일</td>
							<td><input type="text" name="useremail" value={email} placeholder="이메일주소" required onChange={onChangeEmail}/></td>
						</tr>
						<tr>
							<td>전화번호</td>
							<td><select name="localnum">
							<option value="010">010</option>
							<option value="031">031</option>
							<option value="02">02</option>
							<option value="063">063</option>
							</select>
							<input type="text" name="usercontact" value={contact} placeholder="전화번호" required onChange={onChangeContact}/></td>
						</tr>
						<tr>
							<td>주소</td>
							<td><select name="localname">
								<option value="서울">서울</option>
								<option value="경기">경기</option>
								<option value="전북">전북</option>
							</select>
								<input type="text" name="useraddress" value={address} placeholder="주소" required onChange={onChangeAddress}/></td>
						</tr>
					</table>
				<input type="submit" name="form" value="가입하기"/>
				<input type="reset" value="다시쓰기" />
				</div>
			</>
	);
  }
export default Signup;