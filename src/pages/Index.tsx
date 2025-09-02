import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import Icon from '@/components/ui/icon'

export default function Index() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSpecialty, setSelectedSpecialty] = useState('')
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)

  const psychologists = [
    {
      id: 1,
      name: "Доктор Елена Волкова",
      specialty: "Семейная терапия",
      experience: "8 лет",
      rating: 4.9,
      reviews: 127,
      price: "3500₽/час",
      image: "/img/7afd2d4b-b968-4401-ad52-db029362091c.jpg",
      description: "Специализируюсь на работе с парами и семьями. Помогаю решать конфликты и налаживать отношения.",
      tags: ["Семейная терапия", "Парная терапия", "Конфликты"]
    },
    {
      id: 2,
      name: "Михаил Петров",
      specialty: "Когнитивно-поведенческая терапия",
      experience: "12 лет",
      rating: 4.8,
      reviews: 89,
      price: "4000₽/час",
      image: "/img/47f7b9db-c68a-4f93-92a8-c6c29017db7f.jpg",
      description: "Работаю с тревожными расстройствами, депрессией и фобиями. Научный подход к лечению.",
      tags: ["КПТ", "Тревога", "Депрессия", "Фобии"]
    },
    {
      id: 3,
      name: "Анна Смирнова",
      specialty: "Психология развития",
      experience: "6 лет",
      rating: 4.7,
      reviews: 156,
      price: "3000₽/час",
      image: "/img/7afd2d4b-b968-4401-ad52-db029362091c.jpg",
      description: "Помогаю детям и подросткам справляться с трудностями развития и социальной адаптации.",
      tags: ["Детская психология", "Подростки", "Развитие"]
    }
  ]

  const blogPosts = [
    {
      id: 1,
      title: "5 техник управления стрессом в повседневной жизни",
      excerpt: "Простые и эффективные способы справляться со стрессом, которые можно применять каждый день",
      author: "Доктор Елена Волкова",
      date: "2 сентября 2024",
      readTime: "5 мин",
      image: "/img/b22db28a-1f6a-4a4c-9c96-80bf6c686ef6.jpg",
      tags: ["Стресс", "Психология", "Самопомощь"]
    },
    {
      id: 2,
      title: "Как распознать симптомы выгорания и что с этим делать",
      excerpt: "Профессиональное выгорание становится все более распространенной проблемой. Узнайте, как его избежать",
      author: "Михаил Петров",
      date: "30 августа 2024",
      readTime: "8 мин",
      image: "/img/b22db28a-1f6a-4a4c-9c96-80bf6c686ef6.jpg",
      tags: ["Выгорание", "Работа", "Здоровье"]
    },
    {
      id: 3,
      title: "Важность эмоционального интеллекта в отношениях",
      excerpt: "Развитие эмоционального интеллекта поможет улучшить качество ваших отношений с окружающими",
      author: "Анна Смирнова",
      date: "28 августа 2024",
      readTime: "6 мин",
      image: "/img/b22db28a-1f6a-4a4c-9c96-80bf6c686ef6.jpg",
      tags: ["Отношения", "Эмоции", "Развитие"]
    }
  ]

  const filteredPsychologists = psychologists.filter(psychologist => {
    const matchesSearch = psychologist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         psychologist.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSpecialty = !selectedSpecialty || psychologist.specialty === selectedSpecialty
    return matchesSearch && matchesSpecialty
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-therapy-primary to-therapy-secondary rounded-xl flex items-center justify-center">
                  <Icon name="Brain" className="text-white" size={20} />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-therapy-primary to-therapy-secondary bg-clip-text text-transparent">
                  PsychPlatform
                </h1>
              </div>
              
              <nav className="hidden md:flex space-x-6">
                <a href="#home" className="text-gray-700 hover:text-therapy-primary transition-colors">Главная</a>
                <a href="#psychologists" className="text-gray-700 hover:text-therapy-primary transition-colors">Психологи</a>
                <a href="#blog" className="text-gray-700 hover:text-therapy-primary transition-colors">Блог</a>
                <a href="#about" className="text-gray-700 hover:text-therapy-primary transition-colors">О нас</a>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="hidden sm:flex">
                    <Icon name="LogIn" size={16} className="mr-2" />
                    Вход
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Вход в систему</DialogTitle>
                    <DialogDescription>
                      Войдите в свой аккаунт для доступа к персональным функциям
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                    <div>
                      <Label htmlFor="password">Пароль</Label>
                      <Input id="password" type="password" />
                    </div>
                    <Button className="w-full bg-therapy-primary hover:bg-therapy-primary/90">
                      Войти
                    </Button>
                    <div className="text-center">
                      <a href="#" className="text-sm text-therapy-primary hover:underline">
                        Забыли пароль?
                      </a>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-therapy-primary hover:bg-therapy-primary/90">
                    <Icon name="UserPlus" size={16} className="mr-2" />
                    Регистрация
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Регистрация</DialogTitle>
                    <DialogDescription>
                      Создайте аккаунт для доступа к платформе
                    </DialogDescription>
                  </DialogHeader>
                  <Tabs defaultValue="client">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="client">Клиент</TabsTrigger>
                      <TabsTrigger value="psychologist">Психолог</TabsTrigger>
                    </TabsList>
                    <TabsContent value="client" className="space-y-4">
                      <div>
                        <Label htmlFor="client-name">Имя</Label>
                        <Input id="client-name" placeholder="Ваше имя" />
                      </div>
                      <div>
                        <Label htmlFor="client-email">Email</Label>
                        <Input id="client-email" type="email" placeholder="your@email.com" />
                      </div>
                      <div>
                        <Label htmlFor="client-password">Пароль</Label>
                        <Input id="client-password" type="password" />
                      </div>
                      <Button className="w-full bg-therapy-primary hover:bg-therapy-primary/90">
                        Зарегистрироваться как клиент
                      </Button>
                    </TabsContent>
                    <TabsContent value="psychologist" className="space-y-4">
                      <div>
                        <Label htmlFor="psych-name">Полное имя</Label>
                        <Input id="psych-name" placeholder="Ваше полное имя" />
                      </div>
                      <div>
                        <Label htmlFor="psych-email">Email</Label>
                        <Input id="psych-email" type="email" placeholder="your@email.com" />
                      </div>
                      <div>
                        <Label htmlFor="psych-specialty">Специализация</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите специализацию" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="family">Семейная терапия</SelectItem>
                            <SelectItem value="cbt">КПТ</SelectItem>
                            <SelectItem value="child">Детская психология</SelectItem>
                            <SelectItem value="gestalt">Гештальт-терапия</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="psych-password">Пароль</Label>
                        <Input id="psych-password" type="password" />
                      </div>
                      <Button className="w-full bg-therapy-secondary hover:bg-therapy-secondary/90">
                        Зарегистрироваться как психолог
                      </Button>
                    </TabsContent>
                  </Tabs>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Профессиональная{' '}
              <span className="bg-gradient-to-r from-therapy-primary to-therapy-secondary bg-clip-text text-transparent">
                психологическая помощь
              </span>{' '}
              онлайн
            </h2>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in">
              Найдите своего психолога среди сертифицированных специалистов. 
              Безопасно, конфиденциально и эффективно.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-scale-in">
              <Button size="lg" className="bg-therapy-primary hover:bg-therapy-primary/90 text-lg px-8 py-4">
                <Icon name="Search" size={20} className="mr-2" />
                Найти психолога
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-therapy-primary text-therapy-primary hover:bg-therapy-primary hover:text-white">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Читать блог
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-therapy-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" className="text-therapy-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Проверенные специалисты</h3>
                <p className="text-gray-600">Все психологи имеют подтвержденные дипломы и лицензии</p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-therapy-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Lock" className="text-therapy-secondary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">100% конфиденциально</h3>
                <p className="text-gray-600">Ваша приватность защищена современным шифрованием</p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Круглосуточно</h3>
                <p className="text-gray-600">Доступ к платформе и материалам 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Psychologists Catalog */}
      <section id="psychologists" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Каталог психологов
          </h3>
          
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Поиск по имени или специализации..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="h-12"
                />
              </div>
              <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                <SelectTrigger className="w-full md:w-64 h-12">
                  <SelectValue placeholder="Все специализации" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Все специализации</SelectItem>
                  <SelectItem value="Семейная терапия">Семейная терапия</SelectItem>
                  <SelectItem value="Когнитивно-поведенческая терапия">КПТ</SelectItem>
                  <SelectItem value="Психология развития">Психология развития</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Psychologists Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPsychologists.map((psychologist) => (
              <Card key={psychologist.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="p-0">
                  <div className="relative">
                    <img 
                      src={psychologist.image} 
                      alt={psychologist.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white text-gray-900">
                        <Icon name="Star" size={14} className="mr-1 fill-yellow-400 text-yellow-400" />
                        {psychologist.rating}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">{psychologist.name}</CardTitle>
                  <CardDescription className="text-therapy-primary font-medium mb-3">
                    {psychologist.specialty}
                  </CardDescription>
                  
                  <p className="text-gray-600 mb-4 text-sm">{psychologist.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {psychologist.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
                    <span>Опыт: {psychologist.experience}</span>
                    <span>{psychologist.reviews} отзывов</span>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-therapy-primary">
                      {psychologist.price}
                    </span>
                    <Button className="bg-therapy-primary hover:bg-therapy-primary/90">
                      <Icon name="Calendar" size={16} className="mr-2" />
                      Записаться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Полезные статьи
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="p-0">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <CardTitle className="text-xl mb-3 line-clamp-2">
                    {post.title}
                  </CardTitle>
                  
                  <CardDescription className="mb-4 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  
                  <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                    <span>{post.author}</span>
                    <div className="flex items-center space-x-4">
                      <span>{post.readTime}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full border-therapy-primary text-therapy-primary hover:bg-therapy-primary hover:text-white">
                    <Icon name="BookOpen" size={16} className="mr-2" />
                    Читать статью
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-therapy-primary text-therapy-primary hover:bg-therapy-primary hover:text-white">
              <Icon name="Plus" size={20} className="mr-2" />
              Показать больше статей
            </Button>
          </div>
        </div>
      </section>

      {/* Admin Panel Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Панель управления
          </h3>
          
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Обзор</TabsTrigger>
                <TabsTrigger value="psychologists">Психологи</TabsTrigger>
                <TabsTrigger value="clients">Клиенты</TabsTrigger>
                <TabsTrigger value="content">Контент</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">Всего психологов</p>
                          <p className="text-3xl font-bold text-therapy-primary">127</p>
                        </div>
                        <Icon name="Users" className="text-therapy-primary" size={32} />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">Активных клиентов</p>
                          <p className="text-3xl font-bold text-therapy-secondary">1,247</p>
                        </div>
                        <Icon name="UserCheck" className="text-therapy-secondary" size={32} />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">Сессий проведено</p>
                          <p className="text-3xl font-bold text-purple-600">3,456</p>
                        </div>
                        <Icon name="Calendar" className="text-purple-600" size={32} />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">Статей в блоге</p>
                          <p className="text-3xl font-bold text-blue-600">89</p>
                        </div>
                        <Icon name="FileText" className="text-blue-600" size={32} />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="psychologists">
                <Card>
                  <CardHeader>
                    <CardTitle>Управление психологами</CardTitle>
                    <CardDescription>Просмотр и модерация профилей специалистов</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Заявки на модерацию</span>
                        <Badge className="bg-orange-100 text-orange-800">12 новых</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Активные профили</span>
                        <Badge className="bg-green-100 text-green-800">115 одобренных</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Требуют внимания</span>
                        <Badge className="bg-red-100 text-red-800">3 жалобы</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="clients">
                <Card>
                  <CardHeader>
                    <CardTitle>Управление клиентами</CardTitle>
                    <CardDescription>Аналитика и поддержка пользователей</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Новые регистрации (неделя)</span>
                        <span className="text-2xl font-bold text-therapy-primary">+89</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Обращения в поддержку</span>
                        <Badge className="bg-blue-100 text-blue-800">7 открытых</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Активность пользователей</span>
                        <span className="text-therapy-secondary font-semibold">↑ 23%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="content">
                <Card>
                  <CardHeader>
                    <CardTitle>Управление контентом</CardTitle>
                    <CardDescription>Модерация статей блога и материалов</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Черновики статей</span>
                        <Badge className="bg-yellow-100 text-yellow-800">5 в работе</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Опубликованных статей</span>
                        <span className="text-2xl font-bold text-therapy-secondary">89</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Просмотры блога (месяц)</span>
                        <span className="text-therapy-primary font-semibold">45,678</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-therapy-primary to-therapy-secondary rounded-xl flex items-center justify-center">
                  <Icon name="Brain" className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold">PsychPlatform</h3>
              </div>
              <p className="text-gray-400">
                Профессиональная психологическая помощь онлайн. 
                Найдите своего специалиста уже сегодня.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Для клиентов</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Найти психолога</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Как это работает</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Цены</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Отзывы</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Для психологов</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Стать психологом</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Требования</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Заработок</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Поддержка</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Конфиденциальность</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Условия использования</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-800" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2024 PsychPlatform. Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Icon name="Mail" className="text-gray-400 hover:text-white cursor-pointer transition-colors" size={20} />
              <Icon name="Phone" className="text-gray-400 hover:text-white cursor-pointer transition-colors" size={20} />
              <Icon name="MessageCircle" className="text-gray-400 hover:text-white cursor-pointer transition-colors" size={20} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}