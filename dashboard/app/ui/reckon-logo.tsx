import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitanaFont } from '@/app/ui/fonts';

export default function ReckonLogo() {
  return (
    <div
      className={`${lusitanaFont.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">reck·on</p>
    </div>
  );
}
