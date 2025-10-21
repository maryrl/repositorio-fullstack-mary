animport { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Moon, Sun, Github, Linkedin, Mail, Code, Database, Server, Smartphone, ExternalLink, ChevronDown, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [filterCategory, setFilterCategory] = useState('all')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const skills = {
    frontend: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'],
    backend: ['Node.js', 'Express', 'NestJS', 'Python', 'Django', 'Flask', 'Java', 'Spring Boot'],
    database: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Redis'],
    devops: ['Docker', 'Git', 'CI/CD', 'AWS', 'Azure', 'Linux']
  }

  const projects = [
    {
      id: 1,
      title: 'E-Commerce de Cosméticos Fullstack',
      description: 'Plataforma completa de e-commerce com carrinho de compras, autenticação e painel administrativo.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
      category: 'fullstack',
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: '🛒'
    },
    {
      id: 2,
      title: 'API RESTful de Gerenciamento',
      description: 'API robusta para gerenciamento de recursos com autenticação JWT e documentação Swagger.',
      technologies: ['NestJS', 'TypeScript', 'MongoDB', 'Redis'],
      category: 'backend',
      github: 'https://github.com',
      demo: null,
      image: '🔧'
    },
    {
      id: 3,
      title: 'Dashboard Analítico',
      description: 'Dashboard interativo com visualizações de dados em tempo real e filtros dinâmicos.',
      technologies: ['React', 'Recharts', 'Tailwind CSS'],
      category: 'frontend',
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: '📊'
    },
    {
      id: 4,
      title: 'Sistema de Gestão Acadêmica',
      description: 'Projeto acadêmico para gerenciamento de alunos, professores e disciplinas com relatórios.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf'],
      category: 'academic',
      github: 'https://github.com',
      demo: null,
      image: '🎓'
    },
    {
      id: 5,
      title: 'App Mobile de Produtividade',
      description: 'Aplicativo mobile para gerenciamento de tarefas com sincronização em nuvem.',
      technologies: ['React Native', 'Firebase', 'Redux'],
      category: 'mobile',
      github: 'https://github.com',
      demo: null,
      image: '📱'
    },
    {
      id: 6,
      title: 'Microserviços de Pagamento',
      description: 'Arquitetura de microserviços para processamento de pagamentos com alta disponibilidade.',
      technologies: ['Python', 'FastAPI', 'RabbitMQ', 'Docker'],
      category: 'fullstack',
      github: 'https://github.com',
      demo: null,
      image: '💳'
    }
  ]

  const filteredProjects = filterCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === filterCategory)

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    setMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Formulário enviado! (Esta é uma demonstração)')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            &lt;Dev/&gt;
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {['home', 'about', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors hover:text-primary ${
                  activeSection === section ? 'text-primary font-semibold' : ''
                }`}
              >
                {section === 'home' ? 'Início' : 
                 section === 'about' ? 'Sobre' : 
                 section === 'projects' ? 'Projetos' : 'Contato'}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-full"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-background border-t border-border overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                {['home', 'about', 'projects', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="text-left capitalize hover:text-primary transition-colors"
                  >
                    {section === 'home' ? 'Início' : 
                     section === 'about' ? 'Sobre' : 
                     section === 'projects' ? 'Projetos' : 'Contato'}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-6xl"
          >
            👨‍💻
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
            Desenvolvedor Fullstack
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Bacharel em Sistemas de Informação | Transformando ideias em soluções digitais
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" onClick={() => scrollToSection('projects')} className="group">
              Ver Projetos
              <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')}>
              Entre em Contato
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:contato@exemplo.com" className="hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Sobre Mim
            </motion.h2>

            <motion.div variants={itemVariants} className="mb-12 text-center max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Sou um desenvolvedor fullstack apaixonado por criar soluções tecnológicas que fazem a diferença. 
                Com formação em <strong>Bacharelado em Sistemas de Informação</strong>, possuo uma base sólida em 
                análise de sistemas, engenharia de software e gestão de projetos.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Minha jornada na tecnologia me permitiu dominar tanto o desenvolvimento frontend quanto backend, 
                sempre buscando as melhores práticas e tecnologias mais modernas para entregar produtos de alta qualidade.
              </p>
            </motion.div>

            {/* Skills Grid */}
            <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Code className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Frontend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Server className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Backend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Database className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Banco de Dados</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.database.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Smartphone className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>DevOps & Cloud</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.devops.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants}>
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl">🎓 Formação Acadêmica</CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-semibold mb-2">Bacharelado em Sistemas de Informação</h3>
                  <p className="text-muted-foreground mb-4">Instituição de Ensino Superior | 2020 - 2024</p>
                  <p className="mb-4">
                    Durante a graduação, desenvolvi competências em análise e projeto de sistemas, engenharia de software, 
                    banco de dados, redes de computadores, segurança da informação e gestão de projetos de TI.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Análise de Sistemas</Badge>
                    <Badge>Engenharia de Software</Badge>
                    <Badge>Banco de Dados</Badge>
                    <Badge>Redes de Computadores</Badge>
                    <Badge>Segurança da Informação</Badge>
                    <Badge>Gestão de Projetos</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Projetos
            </motion.h2>

            {/* Filter Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
              {['all', 'fullstack', 'frontend', 'backend', 'mobile', 'academic'].map((category) => (
                <Button
                  key={category}
                  variant={filterCategory === category ? 'default' : 'outline'}
                  onClick={() => setFilterCategory(category)}
                  className="capitalize"
                >
                  {category === 'all' ? 'Todos' : 
                   category === 'fullstack' ? 'Fullstack' : 
                   category === 'frontend' ? 'Frontend' : 
                   category === 'backend' ? 'Backend' : 
                   category === 'mobile' ? 'Mobile' : 'Acadêmico'}
                </Button>
              ))}
            </motion.div>

            {/* Projects Grid */}
            <motion.div 
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence>
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1">
                      <CardHeader>
                        <div className="text-6xl mb-4">{project.image}</div>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline">{tech}</Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Button variant="outline" size="sm" asChild className="flex-1">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            GitHub
                          </a>
                        </Button>
                        {project.demo && (
                          <Button size="sm" asChild className="flex-1">
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Demo
                            </a>
                          </Button>
                        )}
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Entre em Contato
            </motion.h2>

            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>Vamos trabalhar juntos!</CardTitle>
                  <CardDescription>
                    Preencha o formulário abaixo ou entre em contato através das redes sociais.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Nome</label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="Seu nome"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">Assunto</label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleFormChange}
                        placeholder="Assunto da mensagem"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">Mensagem</label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleFormChange}
                        placeholder="Sua mensagem..."
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-center space-x-6 border-t pt-6">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="mailto:contato@exemplo.com" className="hover:text-primary transition-colors">
                    <Mail className="h-6 w-6" />
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Desenvolvedor Fullstack. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">Feito com ❤️ usando React, Tailwind CSS e Framer Motion</p>
        </div>
      </footer>
    </div>
  )
}

export default App

