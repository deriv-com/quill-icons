import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsSlashXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m1.781 6.281 6.844 5.344c1.406-1.36 3.188-2.297 5.25-2.531V7.125C13.875 6.515 14.344 6 15 6c.61 0 1.125.516 1.125 1.125v1.969c4.031.515 7.266 3.75 7.781 7.781h1.969c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-1.969a8.3 8.3 0 0 1-1.218 3.516l6.843 5.39c.516.375.61 1.078.188 1.547-.375.516-1.078.61-1.547.188L.422 8.016c-.516-.375-.61-1.078-.188-1.547.375-.516 1.079-.61 1.547-.188m8.672 6.75 1.781 1.406A4.68 4.68 0 0 1 15 13.5c2.484 0 4.5 2.016 4.5 4.5 0 .656-.14 1.266-.375 1.828l1.781 1.406A6.8 6.8 0 0 0 21.75 18c0-3.703-3.047-6.75-6.75-6.75a6.7 6.7 0 0 0-4.547 1.781m6.75 5.297V18a2.25 2.25 0 0 0-2.25-2.25c-.281 0-.562.094-.797.188zm.281 5.953 1.922 1.547c-.984.61-2.11.985-3.281 1.125v1.922A1.11 1.11 0 0 1 15 30c-.656 0-1.125-.469-1.125-1.125v-1.922c-4.078-.515-7.312-3.75-7.828-7.781H4.125A1.11 1.11 0 0 1 3 18.047c0-.656.469-1.125 1.125-1.125h1.922c.047-.516.14-.938.281-1.406l1.969 1.547c-.047.328-.047.656-.047.937 0 3.75 3 6.75 6.75 6.75.844 0 1.688-.14 2.484-.469' />
    </g>
    <defs>
      <clipPath id='f05af3db61f363ff41c0dfb5fc938f9f__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsSlashXlBoldIcon);
export default ForwardRef;
