interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`${align === 'center' ? 'text-center max-w-3xl mx-auto' : 'text-left max-w-3xl'} ${className}`}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-sm font-medium mb-4 ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {eyebrow}
        </div>
      )}
      <h2 className="heading-2 text-slate-900 mb-4">{title}</h2>
      {description && (
        <p className="text-body text-lg leading-relaxed text-balance">{description}</p>
      )}
    </div>
  );
}
