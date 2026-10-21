import { company } from '@/data/company';

interface SocialLinksProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showLabels?: boolean;
}

interface SocialItem {
  id: string;
  name: string;
  url: string;
  colorClass: string;
  icon: (props: { className?: string }) => JSX.Element;
}

const socialPlatforms: SocialItem[] = [
  {
    id: 'facebook',
    name: 'Facebook',
    url: company.social.facebook,
    colorClass: 'hover:bg-[#1877F2] hover:border-[#1877F2]',
    icon: ({ className = 'w-4 h-4' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp Community',
    url: company.social.whatsappCommunity,
    colorClass: 'hover:bg-[#25D366] hover:border-[#25D366]',
    icon: ({ className = 'w-4 h-4' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.995.544 1.785.807 2.8.807h.005c3.179 0 5.765-2.587 5.766-5.766 0-1.54-.6-2.988-1.688-4.076-1.09-1.088-2.536-1.688-4.087-1.688zm0-2.172c2.099 0 4.072.818 5.556 2.302 1.485 1.484 2.303 3.457 2.303 5.556 0 4.331-3.525 7.857-7.858 7.857-1.31 0-2.593-.326-3.738-.946l-4.148 1.088 1.107-4.043c-.682-1.185-1.042-2.537-1.042-3.924 0-4.332 3.526-7.858 7.86-7.858zm-2.88 5.892c-.158-.352-.325-.359-.476-.365l-.406-.006c-.141 0-.37.053-.564.264s-.739.722-.739 1.761c0 1.039.757 2.043.863 2.184.106.141 1.464 2.28 3.585 3.167 1.764.738 2.122.591 2.5.556.379-.035 1.216-.497 1.388-.978.172-.48.172-.892.12-.978-.052-.086-.193-.138-.405-.244-.211-.106-1.216-.6-1.406-.67-.19-.07-.328-.106-.466.106-.139.211-.537.67-.659.811-.122.141-.243.159-.455.053-.211-.106-.893-.329-1.701-1.05-.629-.561-1.054-1.254-1.177-1.465-.123-.211-.013-.325.093-.43.095-.095.212-.247.318-.37.106-.123.141-.211.212-.352.071-.141.035-.264-.018-.37-.053-.106-.467-1.156-.653-1.572z" />
      </svg>
    ),
  },
  {
    id: 'x',
    name: 'X (Twitter)',
    url: company.social.x,
    colorClass: 'hover:bg-black hover:border-black',
    icon: ({ className = 'w-4 h-4' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    id: 'youtube',
    name: 'YouTube',
    url: company.social.youtube,
    colorClass: 'hover:bg-[#FF0000] hover:border-[#FF0000]',
    icon: ({ className = 'w-4 h-4' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: company.social.linkedin,
    colorClass: 'hover:bg-[#0A66C2] hover:border-[#0A66C2]',
    icon: ({ className = 'w-4 h-4' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: company.social.instagram,
    colorClass: 'hover:bg-[#E4405F] hover:border-[#E4405F]',
    icon: ({ className = 'w-4 h-4' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

export function SocialLinks({
  variant = 'dark',
  size = 'md',
  className = '',
  showLabels = false,
}: SocialLinksProps) {
  const isDark = variant === 'dark';

  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-4.5 h-4.5',
    lg: 'w-5 h-5',
  };

  return (
    <div className={`flex flex-wrap items-center gap-2.5 sm:gap-3 ${className}`}>
      {socialPlatforms.map((platform) => {
        const Icon = platform.icon;
        const isConfigured = Boolean(platform.url && platform.url.trim() !== '');
        const targetUrl = isConfigured ? platform.url : '#';

        return (
          <a
            key={platform.id}
            href={targetUrl}
            target={isConfigured ? '_blank' : undefined}
            rel={isConfigured ? 'noopener noreferrer' : undefined}
            className={`group inline-flex items-center justify-center rounded-xl transition-all duration-300 active:scale-95 border ${
              sizeClasses[size]
            } ${
              isDark
                ? `bg-slate-800 text-slate-300 border-slate-700/70 hover:text-white ${platform.colorClass}`
                : `bg-white text-slate-600 border-slate-200 shadow-xs hover:text-white ${platform.colorClass}`
            }`}
            title={
              isConfigured
                ? `Follow Emigos Solutions on ${platform.name}`
                : `${platform.name} profile link configurable in company.ts`
            }
            aria-label={`Official Emigos Solutions ${platform.name}`}
          >
            <Icon className={iconSizes[size]} />
            {showLabels && <span className="ml-2 font-medium">{platform.name}</span>}
          </a>
        );
      })}
    </div>
  );
}
