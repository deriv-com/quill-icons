import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPuzzleCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.5 3.5h3c.82 0 1.5.68 1.5 1.5v3c0 .21-.187.375-.375.375h-1.219a.285.285 0 0 0-.281.281v.094c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75v-.094c0-.14-.14-.281-.281-.281H7.5A.37.37 0 0 1 7.125 8v-.75c0-.187.164-.375.375-.375h.375c.398 0 .75-.328.75-.75a.77.77 0 0 0-.75-.75H7.5A.37.37 0 0 1 7.125 5V3.875c0-.187.164-.375.375-.375M0 9.5v-3C0 5.68.656 5 1.5 5h3c.188 0 .375.188.375.375v.844a.27.27 0 0 0 .281.281h.094c.398 0 .75.352.75.75 0 .422-.352.75-.75.75h-.094a.285.285 0 0 0-.281.281V9.5c0 .21-.187.375-.375.375h-.75a.37.37 0 0 1-.375-.375v-.375a.77.77 0 0 0-.75-.75.755.755 0 0 0-.75.75V9.5c0 .21-.187.375-.375.375H.375A.37.37 0 0 1 0 9.5M0 14v-3c0-.187.164-.375.375-.375H4.5c.188 0 .375.188.375.375v.75c0 .21-.187.375-.375.375h-.375a.755.755 0 0 0-.75.75c0 .422.328.75.75.75H4.5c.188 0 .375.188.375.375v1.125c0 .21-.187.375-.375.375h-3A1.48 1.48 0 0 1 0 14m5.625-3c0-.187.164-.375.375-.375h.75c.188 0 .375.188.375.375v.375c0 .422.328.75.75.75.398 0 .75-.328.75-.75V11c0-.187.164-.375.375-.375h1.125c.188 0 .375.188.375.375v3c0 .844-.68 1.5-1.5 1.5H6a.37.37 0 0 1-.375-.375z' />
    </g>
    <defs>
      <clipPath id='5e19143e21c8e4d495ae0f601760a25e__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPuzzleCaptionFillIcon);
export default ForwardRef;
