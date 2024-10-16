import React, { useState } from "react";

export default function MyForm({ addFormData }) {
  const [form, setForm] = useState({
    login: "",
    email: "",
    password: "",
    password2: "",
    sex: "",
    birthday: "",
    about: "",
    news: false,
    confinfo: false,
    image: "",
  });

  const [errors, setErrors] = useState({
    login: "",
    email: "",
    password: "",
    sex: "",
    birthday: "",
  });

  function validateForm() {
    let errors = {};

    if (form.login === "") errors.login = "Поле не заповнене";
    else if (form.login.length < 5)
      errors.login = "Логін занадто короткий, мін. довжина = 5";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (form.email === "") errors.email = "Поле не заповнене";
    else if (!emailPattern.test(form.email))
      errors.email = "Некоректний формат email";

    if (form.password === "") errors.password = "Поле не заповнене";
    else if (form.password.length < 8)
      errors.password = "Пароль занадто короткий, мін. довжина = 8";
    else if (form.password !== form.password2)
      errors.password = "Паролі не співпадають";

    if (form.sex !== "male" && form.sex !== "female")
      errors.sex = "Виберіть стать: чоловічу чи жіночу";

    if (!form.birthday) errors.birthday = "Поле не заповнене";
    else {
      const birthdayDate = new Date(form.birthday);
      const today = new Date();

      if (birthdayDate > today)
        errors.birthday = "Не можна вибрати майбутній час";
    }

    if (Object.keys(errors).length === 0) return null;
    else return errors;
  }

  function handleReset(e) {
    e.preventDefault(); // зупиняємо стандартне перезавантаження
    setForm({
      login: "",
      email: "",
      password: "",
      password2: "",
      sex: "",
      birthday: "",
      about: "",
      news: false,
      confinfo: false,
      image: "",
    });

    setErrors({
      login: "",
      email: "",
      password: "",
      sex: "",
      birthday: "",
    });
  }

  function handleSend(e) {
    e.preventDefault();
    const err = validateForm();
    if (err != null) setErrors(err);
    else {
      addFormData({
        login: form.login,
        email: form.email,
        sex: form.sex,
        birthday: form.birthday,
        about: form.about,
        news: form.news,
        confinfo: form.confinfo,
        image: form.image,
      });
      setForm({
        login: "",
        email: "",
        password: "",
        password2: "",
        sex: "",
        birthday: "",
        about: "",
        news: false,
        confinfo: false,
        image: "",
      });
    }
  }

  return (
    <div>
      <form method="post" enctype="multipart/form-data">
        <h2>Анкета для реєстрації</h2>
        <label>
          Логін:
          <input
            name="login"
            type="text"
            className="inputText"
            value={form.login}
            onChange={(e) => setForm({ ...form, login: e.target.value })}
          />
          <span className="errors">{errors.login}</span>
        </label>
        <label>
          Email:
          <input
            name="email"
            type="email"
            className="inputText"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <span className="errors">{errors.email}</span>
        </label>
        <label>
          Пароль:
          <input
            name="password"
            type="password"
            className="inputText"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <span className="errors">{errors.password}</span>
        </label>
        <label>
          Повторити пароль:
          <input
            name="password2"
            type="password"
            className="inputText"
            value={form.password2}
            onChange={(e) => setForm({ ...form, password2: e.target.value })}
          />
        </label>
        <label>
          Стать:<span className="errors">{errors.sex}</span>
        </label>
        <div>
          <label>
            <input
              type="radio"
              name="sex"
              value="male"
              checked={form.sex === "male"}
              onChange={() => setForm({ ...form, sex: "male" })}
            />{" "}
            Чоловіча
          </label>
          <label>
            <input
              type="radio"
              name="sex"
              value="female"
              checked={form.sex === "female"}
              onChange={() => setForm({ ...form, sex: "female" })}
            />{" "}
            Жіноча
          </label>
        </div>
        <label>
          Дата народження:{" "}
          <input
            name="birthday"
            type="date"
            className="inputText"
            value={form.birthday}
            onChange={(e) => setForm({ ...form, birthday: e.target.value })}
          />
          <span className="errors">{errors.birthday}</span>
        </label>
        <label>Про себе:</label>
        <textarea
          name="about"
          className="inputText"
          value={form.about}
          onChange={(e) => setForm({ ...form, about: e.target.value })}
        ></textarea>
        <label>
          <input
            name="news"
            type="checkbox"
            checked={form.news}
            onChange={(e) => setForm({ ...form, news: e.target.checked })}
          />
          Я погоджуюся на надсилання новин сайту мені на електронну пошту
        </label>
        <label>
          <input
            name="confinfo"
            type="checkbox"
            checked={form.confinfo}
            onChange={(e) => setForm({ ...form, confinfo: e.target.checked })}
          />
          Я погоджуюся на використання конфіденційної інформації з цілями
          покращення сервісу
        </label>
        <label>
          Аватарка:
          <input 
  type="file" 
  accept="image/png, image/jpeg, image/svg" 
  onChange={(e) => setForm({ ...form, image: e.target.files[0] })} 
/>
        </label>
        <button className="deletebtn" onClick={handleReset}>
          Скинути
        </button>
        <button className="greenbtn" onClick={handleSend}>
          Відправити
        </button>
      </form>
    </div>
  );
}
