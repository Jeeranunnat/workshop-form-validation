import './Formcomponent.css';
import { useState } from 'react';

const Formcomponent = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const [errorUsername, setErrorUserName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorRePassword, setErrorRePassword] = useState('');

  const [UserNameColor, setUserNameColor] = useState('');
  const [EmailColor, setEmailColor] = useState('');
  const [passwordColor, setPasswordColor] = useState('');
  const [rePasswordColor, setRePasswordColor] = useState('');

  const validateForm = (e) => {
    e.preventDefault();
    if (userName.length > 8) {
      setErrorUserName('');
      setUserNameColor('green');
    } else {
      setErrorUserName('กรุณาป้อนชื่อผู้ใช้จำนวนมากกว่า 8 ตัวอักษร');
      setUserNameColor('red');
    }

    if (email.includes('@')) {
      setErrorEmail('');
      setEmailColor('green');
    } else {
      setErrorEmail('รูปแบบอีเมลไม่ถูกต้อง');
      setEmailColor('red');
    }

    if (password.length > 8) {
      setErrorPassword('');
      setPasswordColor('green');
    } else {
      setErrorPassword('ป้อนรหัสมากกว่า8ตัวอักษร');
      setPasswordColor('red');
    }

    if (rePassword !== '' && rePassword === password) {
      setErrorRePassword('');
      setRePasswordColor('green');
    } else {
      setErrorRePassword('รหัสผ่านไม่ตรงกัน');
      setRePasswordColor('red');
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={validateForm}>
        <h2>แบบฟอร์มลงทะเบียน</h2>

        <div className="form-control">
          <label>ชื่อผู้ใช้</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            style={{ borderColor: UserNameColor }}
          ></input>
          <small>{errorUsername}</small>
        </div>

        <div className="form-control">
          <label>อีเมล</label>
          <input
            type="e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderColor: EmailColor }}
          ></input>
          <small>{errorEmail}</small>
        </div>

        <div className="form-control">
          <label>รหัสผ่าน</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ borderColor: passwordColor }}
          ></input>
          <small>{errorPassword}</small>
        </div>

        <div className="form-control">
          <label>ยืนยันรหัสผ่าน</label>
          <input
            type="password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            style={{ borderColor: rePasswordColor }}
          ></input>
          <small>{errorRePassword}</small>
        </div>

        <button type="submit">ลงทะเบียน</button>
      </form>
    </div>
  );
};
export default Formcomponent;
