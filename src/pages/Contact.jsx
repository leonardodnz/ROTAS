import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Dados do formulário:', formData)
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="contact">
      <h2>Entre em Contato</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Mensagem:</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        
        <button type="submit">Enviar Mensagem</button>
      </form>
    </div>
  )
}