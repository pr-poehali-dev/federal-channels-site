import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

interface Program {
  id: string;
  title: string;
  time: string;
  duration: number;
  category: string;
  description?: string;
  isNew?: boolean;
  isRerun?: boolean;
}

interface DaySchedule {
  [channelId: string]: Program[];
}

interface WeekSchedule {
  [day: string]: DaySchedule;
}

const TVSchedule = () => {
  const [selectedChannel, setSelectedChannel] = useState<string>('all');
  const [reminders, setReminders] = useState<{[key: string]: boolean}>({});

  const channels = [
    { id: 'pervyj', name: 'Первый канал', logo: '1️⃣' },
    { id: 'rossiya1', name: 'Россия 1', logo: '🇷🇺' },
    { id: 'ntv', name: 'НТВ', logo: '📺' },
    { id: 'tnt', name: 'ТНТ', logo: '💥' },
    { id: 'sts', name: 'СТС', logo: '🎬' },
    { id: 'ren', name: 'РЕН ТВ', logo: '🔥' }
  ];

  const weekSchedule: WeekSchedule = {
    'Понедельник': {
      'pervyj': [
        { id: 'p1', title: 'Доброе утро', time: '06:00', duration: 180, category: 'Информационное' },
        { id: 'p2', title: 'Время', time: '12:00', duration: 30, category: 'Новости' },
        { id: 'p3', title: 'Модный приговор', time: '12:30', duration: 60, category: 'Развлекательное' },
        { id: 'p4', title: 'Время', time: '15:00', duration: 30, category: 'Новости' },
        { id: 'p5', title: 'Давай поженимся!', time: '15:30', duration: 60, category: 'Развлекательное' },
        { id: 'p6', title: 'Мужское/Женское', time: '16:30', duration: 60, category: 'Ток-шоу' },
        { id: 'p7', title: 'Время', time: '18:00', duration: 30, category: 'Новости' },
        { id: 'p8', title: 'На самом деле', time: '18:30', duration: 90, category: 'Ток-шоу' },
        { id: 'p9', title: 'Время', time: '21:00', duration: 30, category: 'Новости' },
        { id: 'p10', title: 'Голос. Дети', time: '21:30', duration: 120, category: 'Музыкальное шоу', isNew: true }
      ],
      'rossiya1': [
        { id: 'r1', title: 'Утро России', time: '05:00', duration: 240, category: 'Информационное' },
        { id: 'r2', title: 'Вести', time: '11:00', duration: 60, category: 'Новости' },
        { id: 'r3', title: 'Судьба человека', time: '12:00', duration: 60, category: 'Ток-шоу' },
        { id: 'r4', title: '60 минут', time: '13:00', duration: 120, category: 'Ток-шоу' },
        { id: 'r5', title: 'Вести', time: '17:00', duration: 60, category: 'Новости' },
        { id: 'r6', title: 'Андрей Малахов. Прямой эфир', time: '18:00', duration: 60, category: 'Ток-шоу' },
        { id: 'r7', title: 'Вести', time: '20:00', duration: 60, category: 'Новости' },
        { id: 'r8', title: 'Склифосовский', time: '21:15', duration: 105, category: 'Сериал', isNew: true }
      ],
      'ntv': [
        { id: 'n1', title: 'Утро. Самое лучшее', time: '06:00', duration: 120, category: 'Информационное' },
        { id: 'n2', title: 'Сегодня', time: '10:00', duration: 30, category: 'Новости' },
        { id: 'n3', title: 'Лесник', time: '10:30', duration: 90, category: 'Сериал', isRerun: true },
        { id: 'n4', title: 'Сегодня', time: '14:00', duration: 30, category: 'Новости' },
        { id: 'n5', title: 'Чрезвычайное происшествие', time: '14:30', duration: 30, category: 'Информационное' },
        { id: 'n6', title: 'Место встречи', time: '16:00', duration: 120, category: 'Ток-шоу' },
        { id: 'n7', title: 'Сегодня', time: '19:00', duration: 30, category: 'Новости' },
        { id: 'n8', title: 'Балабол', time: '19:40', duration: 100, category: 'Сериал', isNew: true }
      ]
    },
    'Вторник': {
      'pervyj': [
        { id: 'p11', title: 'Доброе утро', time: '06:00', duration: 180, category: 'Информационное' },
        { id: 'p12', title: 'Время', time: '12:00', duration: 30, category: 'Новости' },
        { id: 'p13', title: 'Модный приговор', time: '12:30', duration: 60, category: 'Развлекательное' },
        { id: 'p14', title: 'Контрольная закупка', time: '13:30', duration: 60, category: 'Развлекательное' },
        { id: 'p15', title: 'Время', time: '15:00', duration: 30, category: 'Новости' },
        { id: 'p16', title: 'Давай поженимся!', time: '15:30', duration: 60, category: 'Развлекательное' },
        { id: 'p17', title: 'Время', time: '21:00', duration: 30, category: 'Новости' },
        { id: 'p18', title: 'Премьера сезона', time: '21:30', duration: 120, category: 'Художественный фильм', isNew: true }
      ],
      'rossiya1': [
        { id: 'r11', title: 'Утро России', time: '05:00', duration: 240, category: 'Информационное' },
        { id: 'r12', title: 'Вести', time: '11:00', duration: 60, category: 'Новости' },
        { id: 'r13', title: 'Судьба человека', time: '12:00', duration: 60, category: 'Ток-шоу' },
        { id: 'r14', title: '60 минут', time: '13:00', duration: 120, category: 'Ток-шоу' },
        { id: 'r15', title: 'Вести', time: '20:00', duration: 60, category: 'Новости' },
        { id: 'r16', title: 'Русская душа', time: '21:15', duration: 105, category: 'Музыкальное шоу' }
      ]
    },
    'Среда': {
      'pervyj': [
        { id: 'p21', title: 'Доброе утро', time: '06:00', duration: 180, category: 'Информационное' },
        { id: 'p22', title: 'Время', time: '12:00', duration: 30, category: 'Новости' },
        { id: 'p23', title: 'Жить здорово!', time: '12:30', duration: 60, category: 'Познавательное' },
        { id: 'p24', title: 'Время', time: '21:00', duration: 30, category: 'Новости' },
        { id: 'p25', title: 'Среда обитания', time: '21:30', duration: 90, category: 'Документальное', isNew: true }
      ]
    }
  };

  const days = Object.keys(weekSchedule);

  const toggleReminder = (programId: string) => {
    setReminders(prev => ({
      ...prev,
      [programId]: !prev[programId]
    }));
  };

  const getFilteredSchedule = (daySchedule: DaySchedule) => {
    if (selectedChannel === 'all') {
      return daySchedule;
    }
    return { [selectedChannel]: daySchedule[selectedChannel] || [] };
  };

  const getCategoryColor = (category: string) => {
    const colors: {[key: string]: string} = {
      'Новости': 'bg-red-500/20 text-red-400 border-red-500/30',
      'Информационное': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Развлекательное': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      'Ток-шоу': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      'Сериал': 'bg-green-500/20 text-green-400 border-green-500/30',
      'Документальное': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      'Музыкальное шоу': 'bg-pink-500/20 text-pink-400 border-pink-500/30',
      'Художественный фильм': 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
      'Познавательное': 'bg-teal-500/20 text-teal-400 border-teal-500/30'
    };
    return colors[category] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours === 0) return `${mins}м`;
    if (mins === 0) return `${hours}ч`;
    return `${hours}ч ${mins}м`;
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Программа передач</h2>
          <p className="text-gray-400">Полное расписание всех федеральных каналов на неделю</p>
        </div>
        <div className="flex items-center space-x-4">
          <Select value={selectedChannel} onValueChange={setSelectedChannel}>
            <SelectTrigger className="w-48 bg-gray-800 border-gray-700 text-white">
              <SelectValue placeholder="Все каналы" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              <SelectItem value="all" className="text-white hover:bg-gray-700">Все каналы</SelectItem>
              {channels.map(channel => (
                <SelectItem key={channel.id} value={channel.id} className="text-white hover:bg-gray-700">
                  {channel.logo} {channel.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="Понедельник" className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 bg-gray-800 border-gray-700">
          {days.map(day => (
            <TabsTrigger 
              key={day} 
              value={day} 
              className="text-gray-300 data-[state=active]:bg-red-600 data-[state=active]:text-white"
            >
              {day.slice(0, 3)}
            </TabsTrigger>
          ))}
        </TabsList>

        {days.map(day => (
          <TabsContent key={day} value={day} className="mt-6">
            <div className="space-y-6">
              {Object.entries(getFilteredSchedule(weekSchedule[day])).map(([channelId, programs]) => {
                const channel = channels.find(ch => ch.id === channelId);
                if (!channel || programs.length === 0) return null;

                return (
                  <Card key={channelId} className="bg-gray-900/50 border-gray-800">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center space-x-3 text-white">
                        <span className="text-2xl">{channel.logo}</span>
                        <span>{channel.name}</span>
                        <Badge variant="outline" className="border-gray-600 text-gray-400">
                          {programs.length} программ
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3">
                        {programs.map((program) => (
                          <div 
                            key={program.id}
                            className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-colors"
                          >
                            <div className="flex items-center space-x-4 flex-1">
                              <div className="text-center min-w-[60px]">
                                <div className="text-white font-mono text-lg">{program.time}</div>
                                <div className="text-gray-400 text-xs">{formatDuration(program.duration)}</div>
                              </div>
                              
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-1">
                                  <h4 className="font-semibold text-white">{program.title}</h4>
                                  {program.isNew && (
                                    <Badge className="bg-red-600 text-white text-xs px-1 py-0">
                                      НОВОЕ
                                    </Badge>
                                  )}
                                  {program.isRerun && (
                                    <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs px-1 py-0">
                                      ПОВТОР
                                    </Badge>
                                  )}
                                </div>
                                <Badge 
                                  variant="outline" 
                                  className={`text-xs ${getCategoryColor(program.category)}`}
                                >
                                  {program.category}
                                </Badge>
                              </div>
                            </div>

                            <div className="flex items-center space-x-2">
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => toggleReminder(program.id)}
                                className={`p-2 ${
                                  reminders[program.id] 
                                    ? 'text-yellow-500' 
                                    : 'text-gray-400 hover:text-yellow-400'
                                }`}
                              >
                                <Icon name="Bell" size={16} />
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                className="text-gray-400 hover:text-white p-2"
                              >
                                <Icon name="Info" size={16} />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Active Reminders */}
      {Object.keys(reminders).some(key => reminders[key]) && (
        <Card className="mt-8 bg-yellow-500/10 border-yellow-500/30">
          <CardHeader>
            <CardTitle className="flex items-center text-yellow-400">
              <Icon name="Bell" size={24} className="mr-3" />
              Напоминания установлены ({Object.values(reminders).filter(Boolean).length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">
              Вы получите уведомления за 15 минут до начала выбранных программ.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TVSchedule;