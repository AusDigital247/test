interface CTAContentProps {
  title: string;
  description: string;
  isDark?: boolean;
}

export function CTAContent({ title, description, isDark = true }: CTAContentProps) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6`}>
        {title}
      </h2>
      <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
        {description}
      </p>
    </div>
  );
}