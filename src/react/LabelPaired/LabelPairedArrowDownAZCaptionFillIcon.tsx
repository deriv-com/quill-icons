import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownAZCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.54 14.516a.68.68 0 0 1-.54.234.73.73 0 0 1-.562-.234l-2.063-2.25a.744.744 0 0 1 .047-1.055.744.744 0 0 1 1.055.047l.773.82V5c0-.398.328-.75.75-.75.398 0 .75.352.75.75v7.078l.75-.82a.744.744 0 0 1 1.055-.047c.304.281.328.75.047 1.055zM7.75 11c0-.398.328-.75.75-.75h3a.76.76 0 0 1 .68.469.76.76 0 0 1-.164.82l-1.711 1.711H11.5c.398 0 .75.352.75.75 0 .422-.352.75-.75.75h-3a.75.75 0 0 1-.703-.445.76.76 0 0 1 .164-.82l1.71-1.735H8.5a.74.74 0 0 1-.75-.75M10 4.25c.281 0 .54.164.656.422l1.5 3 .375.75a.743.743 0 0 1-.328 1.008.743.743 0 0 1-1.008-.328l-.164-.352H8.945l-.164.352a.743.743 0 0 1-1.008.328.743.743 0 0 1-.328-1.008l.375-.75 1.5-3A.73.73 0 0 1 10 4.25m-.492 3.375h.96L10 6.688z' />
    </g>
    <defs>
      <clipPath id='722be89d174b0175da70b27317f86d19__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownAZCaptionFillIcon);
export default ForwardRef;
