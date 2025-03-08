import { ReactNode } from 'react';
import { AlertCircle, Info, CheckCircle, AlertTriangle } from 'lucide-react';

type AlertType = 'info' | 'success' | 'warning' | 'error';

interface BlogAlertProps {
  type: AlertType;
  title: string;
  children: ReactNode;
}

export function BlogAlert({ type, title, children }: BlogAlertProps) {
  const styles = {
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-800',
      icon: Info
    },
    success: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-800',
      icon: CheckCircle
    },
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      text: 'text-yellow-800',
      icon: AlertTriangle
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      text: 'text-red-800',
      icon: AlertCircle
    }
  };

  const { bg, border, text, icon: Icon } = styles[type];

  return (
    <div className={`${bg} ${border} border rounded-lg p-4 my-4`}>
      <div className="flex items-center gap-2 mb-2">
        <Icon className={`w-5 h-5 ${text}`} />
        <h4 className={`font-semibold ${text}`}>{title}</h4>
      </div>
      <div className={text}>{children}</div>
    </div>
  );
}