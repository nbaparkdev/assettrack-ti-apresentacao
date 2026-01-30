import React from 'react';

export interface FeatureItem {
  title: string;
  route?: string;
  description: string;
  permission?: string;
}

export interface StatCardProps {
  label: string;
  value: string | number;
  trend?: string;
  icon?: React.ReactNode;
}

export enum AssetState {
  AVAILABLE = 'Disponível',
  IN_USE = 'Em Uso',
  MAINTENANCE = 'Manutenção',
  STORED = 'Armazenado',
  WRITTEN_OFF = 'Baixado'
}

export interface GeminiResponse {
  imageUrl?: string;
  text?: string;
}