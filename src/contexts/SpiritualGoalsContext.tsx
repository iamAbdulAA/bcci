
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface SpiritualGoal {
  id: string;
  title: string;
  description: string;
  targetValue: string;
  currentValue: string;
  progress: number;
  createdAt: Date;
}

interface SpiritualGoalsContextType {
  goals: SpiritualGoal[];
  addGoal: (goal: Omit<SpiritualGoal, 'id' | 'createdAt'>) => void;
  updateGoal: (id: string, updates: Partial<SpiritualGoal>) => void;
  deleteGoal: (id: string) => void;
}

const SpiritualGoalsContext = createContext<SpiritualGoalsContextType | undefined>(undefined);

export const useSpiritualGoals = () => {
  const context = useContext(SpiritualGoalsContext);
  if (!context) {
    throw new Error('useSpiritualGoals must be used within a SpiritualGoalsProvider');
  }
  return context;
};

export const SpiritualGoalsProvider = ({ children }: { children: ReactNode }) => {
  const [goals, setGoals] = useState<SpiritualGoal[]>([
    {
      id: '1',
      title: 'Daily Prayer',
      description: 'Commit to daily prayer practice',
      targetValue: '30 days',
      currentValue: '25 days',
      progress: 85,
      createdAt: new Date('2024-11-01')
    },
    {
      id: '2',
      title: 'Bible Reading',
      description: 'Read through the entire Bible this year',
      targetValue: '365 chapters',
      currentValue: '255 chapters',
      progress: 70,
      createdAt: new Date('2024-01-01')
    },
    {
      id: '3',
      title: 'Scripture Memorization',
      description: 'Memorize key Bible verses',
      targetValue: '12 verses',
      currentValue: '7 verses',
      progress: 60,
      createdAt: new Date('2024-09-01')
    },
    {
      id: '4',
      title: 'Evangelism Outreach',
      description: 'Share the gospel with others',
      targetValue: '10 conversations',
      currentValue: '4 conversations',
      progress: 40,
      createdAt: new Date('2024-10-01')
    }
  ]);

  const addGoal = (newGoal: Omit<SpiritualGoal, 'id' | 'createdAt'>) => {
    const goal: SpiritualGoal = {
      ...newGoal,
      id: Date.now().toString(),
      createdAt: new Date()
    };
    setGoals(prev => [...prev, goal]);
  };

  const updateGoal = (id: string, updates: Partial<SpiritualGoal>) => {
    setGoals(prev => prev.map(goal => 
      goal.id === id ? { ...goal, ...updates } : goal
    ));
  };

  const deleteGoal = (id: string) => {
    setGoals(prev => prev.filter(goal => goal.id !== id));
  };

  return (
    <SpiritualGoalsContext.Provider value={{ goals, addGoal, updateGoal, deleteGoal }}>
      {children}
    </SpiritualGoalsContext.Provider>
  );
};
