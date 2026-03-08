import * as Icons from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import type { Service } from '@/lib/data/types';

interface ServiceCardProps extends Service {
  accentColor?: 'blue' | 'purple';
}

export default function ServiceCard({
  title,
  description,
  icon,
  details,
  accentColor = 'blue',
}: ServiceCardProps) {
  // Dynamic icon lookup from lucide-react
  const IconComponent = Icons[icon as keyof typeof Icons] as
    | React.ComponentType<{ className?: string }>
    | undefined;

  // Accent color classes - Professional neutrals with accent highlights
  const accentClasses = {
    border:
      accentColor === 'blue'
        ? 'border-slate-200 hover:border-blue-300'
        : 'border-slate-200 hover:border-purple-300',
    iconBg: accentColor === 'blue'
      ? 'bg-gradient-to-br from-slate-100 to-slate-200 ring-2 ring-blue-400/30'
      : 'bg-gradient-to-br from-slate-100 to-slate-200 ring-2 ring-purple-400/30',
    icon: accentColor === 'blue' ? 'text-blue-600' : 'text-purple-600',
    bullet: accentColor === 'blue' ? 'text-blue-500' : 'text-purple-500',
    hoverShadow: accentColor === 'blue'
      ? 'hover:shadow-blue-200/50'
      : 'hover:shadow-purple-200/50',
    cardBg: accentColor === 'blue'
      ? 'bg-gradient-to-br from-slate-50 via-white to-blue-50/30'
      : 'bg-gradient-to-br from-slate-50 via-white to-purple-50/30',
  };

  return (
    <Card
      className={cn(
        'group h-full flex flex-col transition-all duration-300 ease-in-out',
        'hover:shadow-xl hover:-translate-y-1',
        'border-2',
        accentClasses.border,
        accentClasses.hoverShadow,
        accentClasses.cardBg
      )}
    >
      <CardHeader className="flex-row items-start space-y-0 gap-4">
        {IconComponent && (
          <div className={cn(
            'flex-shrink-0 mt-1 p-3 rounded-xl transition-transform duration-300',
            'group-hover:scale-110',
            accentClasses.iconBg
          )}>
            <IconComponent className={cn('h-6 w-6', accentClasses.icon)} />
          </div>
        )}
        <div className="flex-1">
          <CardTitle className="text-xl font-semibold mb-2 group-hover:text-slate-900 transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="text-base leading-relaxed">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      {details && details.length > 0 && (
        <CardContent className="flex-1 pt-4">
          <ul className="space-y-2.5">
            {details.map((detail, index) => (
              <li key={index} className="flex items-start gap-2 group/item">
                <span
                  className={cn(
                    'text-lg font-bold flex-shrink-0 leading-tight',
                    accentClasses.bullet
                  )}
                  aria-hidden="true"
                >
                  •
                </span>
                <span className="text-sm text-muted-foreground leading-relaxed flex-1">{detail}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  );
}