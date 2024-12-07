import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.length < 5) {
      setError("El nombre debe tener al menos 5 caracteres");
      setSuccess("");
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError("Por favor, ingresa un email válido");
      setSuccess("");
    } else {
      setError("");
      setSuccess(`Gracias ${formData.name}, te contactaremos pronto vía mail.`);
      console.log("Formulario enviado:", formData);
    }
  };

  return }
