import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import TVSchedule from '@/components/TVSchedule';

const Index = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [reminders, setReminders] = useState<{[key: string]: boolean}>({});
  const [activeSection, setActiveSection] = useState<'live' | 'schedule'>('live');

  const channels = [
    {
      id: 'pervyj',
      name: 'Первый канал',
      logo: '1️⃣',
      isLive: true,
      currentProgram: 'Время',
      nextProgram: 'Поле чудес',
      nextTime: '21:00',
      category: 'Общественное'
    },
    {
      id: 'rossiya1',
      name: 'Россия 1',
      logo: '🇷🇺',
      isLive: true,
      currentProgram: 'Вести',
      nextProgram: 'Субботний вечер',
      nextTime: '20:00',
      category: 'Общественное'
    },
    {
      id: 'ntv',
      name: 'НТВ',
      logo: '📺',
      isLive: true,
      currentProgram: 'Сегодня',
      nextProgram: 'Квартирный вопрос',
      nextTime: '18:00',
      category: 'Информационное'
    },
    {
      id: 'tnt',
      name: 'ТНТ',
      logo: '💥',
      isLive: true,
      currentProgram: 'Comedy Club',
      nextProgram: 'Однажды в России',
      nextTime: '23:00',
      category: 'Развлекательное'
    },
    {
      id: 'sts',
      name: 'СТС',
      logo: '🎬',
      isLive: true,
      currentProgram: 'Уральские пельмени',
      nextProgram: 'Большой вопрос',
      nextTime: '22:30',
      category: 'Развлекательное'
    },
    {
      id: 'ren',
      name: 'РЕН ТВ',
      logo: '🔥',
      isLive: true,
      currentProgram: 'Территория заблуждений',
      nextProgram: 'Засекреченные списки',
      nextTime: '23:30',
      category: 'Познавательное'
    }
  ];

  const toggleFavorite = (channelId: string) => {
    setFavorites(prev => 
      prev.includes(channelId) 
        ? prev.filter(id => id !== channelId)
        : [...prev, channelId]
    );
  };

  const toggleReminder = (channelId: string) => {
    setReminders(prev => ({
      ...prev,
      [channelId]: !prev[channelId]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-white">
                <span className="text-red-500">ФЕДЕРАЛЬНЫЕ</span> ТЕЛЕКАНАЛЫ
              </h1>
            </div>
            <nav className="flex items-center space-x-6">
              <Button 
                variant="ghost" 
                className={`${activeSection === 'live' ? 'text-red-500' : 'text-white hover:text-red-500'}`}
                onClick={() => setActiveSection('live')}
              >
                <Icon name="Radio" size={20} className="mr-2" />
                Прямой эфир
              </Button>
              <Button 
                variant="ghost" 
                className={`${activeSection === 'schedule' ? 'text-red-500' : 'text-white hover:text-red-500'}`}
                onClick={() => setActiveSection('schedule')}
              >
                <Icon name="Calendar" size={20} className="mr-2" />
                Программа передач
              </Button>
              <Button variant="ghost" className="text-white hover:text-red-500">
                <Icon name="Newspaper" size={20} className="mr-2" />
                Новости
              </Button>
              <Button variant="ghost" className="text-white hover:text-red-500">
                <Icon name="Archive" size={20} className="mr-2" />
                Архив
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6 animate-fade-in">
            Смотри федеральные каналы
            <span className="block text-red-500 mt-2">в прямом эфире</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in">
            Все главные телеканалы России в одном месте. Не пропускай любимые программы с системой напоминаний.
          </p>
          <div className="flex items-center justify-center space-x-4 animate-scale-in">
            <Badge variant="secondary" className="bg-red-500/20 text-red-400 border-red-500/30">
              <Icon name="Radio" size={16} className="mr-2" />
              6 каналов в эфире
            </Badge>
            <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
              <Icon name="Clock" size={16} className="mr-2" />
              24/7 трансляция
            </Badge>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {activeSection === 'live' && (
            <>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-bold text-white">Прямые эфиры</h3>
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  <Icon name="Settings" size={20} className="mr-2" />
                  Настроить каналы
                </Button>
              </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {channels.map((channel) => (
              <Card 
                key={channel.id} 
                className="group bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-300 hover:scale-105 animate-fade-in"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{channel.logo}</div>
                      <div>
                        <h4 className="font-semibold text-white group-hover:text-red-400 transition-colors">
                          {channel.name}
                        </h4>
                        <Badge variant="outline" className="text-xs border-gray-600 text-gray-400">
                          {channel.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => toggleFavorite(channel.id)}
                        className={`p-2 ${favorites.includes(channel.id) ? 'text-red-500' : 'text-gray-400 hover:text-red-400'}`}
                      >
                        <Icon name="Heart" size={16} />
                      </Button>
                      {channel.isLive && (
                        <Badge className="bg-red-600 text-white px-2 py-1">
                          <Icon name="Radio" size={12} className="mr-1" />
                          LIVE
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-gray-800/50 rounded-lg p-3">
                      <p className="text-sm text-gray-400">Сейчас в эфире:</p>
                      <p className="text-white font-medium">{channel.currentProgram}</p>
                    </div>
                    
                    <div className="bg-gray-800/30 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-400">Далее в {channel.nextTime}:</p>
                          <p className="text-gray-200 font-medium">{channel.nextProgram}</p>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => toggleReminder(channel.id)}
                          className={`p-2 ${reminders[channel.id] ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-400'}`}
                        >
                          <Icon name="Bell" size={16} />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex space-x-2">
                    <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white">
                      <Icon name="Play" size={16} className="mr-2" />
                      Смотреть
                    </Button>
                    <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                      <Icon name="Calendar" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
              </div>
            </>
          )}

          {activeSection === 'schedule' && (
            <TVSchedule />
          )}
        </div>
      </section>

      {/* Reminders Section */}
      {Object.keys(reminders).some(key => reminders[key]) && (
        <section className="py-16 px-4 bg-gray-900/30">
          <div className="container mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Icon name="Bell" size={24} className="mr-3 text-yellow-500" />
              Ваши напоминания
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {channels
                .filter(channel => reminders[channel.id])
                .map(channel => (
                  <Card key={channel.id} className="bg-yellow-500/10 border-yellow-500/30">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{channel.logo}</div>
                        <div className="flex-1">
                          <p className="font-medium text-white">{channel.nextProgram}</p>
                          <p className="text-sm text-gray-400">{channel.name} • {channel.nextTime}</p>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => toggleReminder(channel.id)}
                          className="text-yellow-500 hover:text-yellow-400"
                        >
                          <Icon name="X" size={16} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-4">
        <div className="container mx-auto text-center">
          <h4 className="text-2xl font-bold text-white mb-4">
            <span className="text-red-500">ФЕДЕРАЛЬНЫЕ</span> ТЕЛЕКАНАЛЫ
          </h4>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Официальный портал федеральных телеканалов России. Смотри прямые эфиры, 
            программы передач и настраивай напоминания о любимых шоу.
          </p>
          <div className="flex items-center justify-center space-x-6 mt-6 text-gray-400">
            <a href="#" className="hover:text-red-400 transition-colors">О проекте</a>
            <a href="#" className="hover:text-red-400 transition-colors">Контакты</a>
            <a href="#" className="hover:text-red-400 transition-colors">Техподдержка</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;