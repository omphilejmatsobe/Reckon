import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitanaFont } from '@/app/ui/fonts';

export default function InsightLogo() {
  return (
    <div
      className={`${lusitanaFont.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Insight</p>
    </div>
  );
}
