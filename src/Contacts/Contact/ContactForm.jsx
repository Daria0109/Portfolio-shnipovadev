import React from "react";
import s from './ContactForm.module.scss';
import {useFormik} from 'formik';
import axios from "axios";
import {useState} from "react";


const ContactForm = React.memo(() => {
  const [disabledBtn, setDisabledBtn] = useState(false)
  const btnStyle = disabledBtn ? `${s.sendButton} ${s.disabledBtn}` : s.sendButton

  const validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required!';
    }
    if (!values.subject) {
      errors.subject = 'Required!';
    }
    if (!values.message) {
      errors.message = 'Required!';
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    validate,
    onSubmit: values => {
      setDisabledBtn(true)
      axios.post('https://smtp-gmail-server.herokuapp.com/sendMessage', {
        name: values.name,
        email: values.email,
        subject: values.subject,
        message: values.message
      }).then((res) => setDisabledBtn(false))
    },
  });

  return <form className={s.form} onSubmit={formik.handleSubmit}>
    <div className={`${s.rowForm} ${s.top}`}>
      <input className={s.name}
             placeholder='Name'
             type="text"
             name="name"
             onChange={formik.handleChange}
             value={formik.values.name}/>
      <div className={s.email}>
        <input type="text"
               name="email"
               placeholder={'Email*'}
               onChange={formik.handleChange}
               value={formik.values.email}/>
        {formik.errors.email
          ? <div className={s.required}>{formik.errors.email}</div>
          : null}
      </div>
    </div>

    <div className={s.rowForm}>
      <input type="text"
             name="subject"
             placeholder={'Subject*'}
             onChange={formik.handleChange}
             value={formik.values.subject}/>
      {formik.errors.subject
        ? <div className={s.textRequired}>{formik.errors.subject}</div>
        : null}
    </div>

    <div className={s.rowForm}>
      <textarea name="message"
                rows="5"
                placeholder={'Message*'}
                onChange={formik.handleChange}
                value={formik.values.message}/>
      {formik.errors.message
        ? <div className={s.textRequired}>{formik.errors.message}</div>
        : null}
    </div>

    <button className={btnStyle}
            type='submit'
            disabled={disabledBtn}>Send Message
    </button>

  </form>
})
export default ContactForm;