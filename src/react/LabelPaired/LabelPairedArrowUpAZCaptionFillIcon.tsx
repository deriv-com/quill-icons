import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpAZCaptionFillIcon = (
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
      <path d='m4.54 4.508 2.062 2.25a.744.744 0 0 1-.047 1.055.744.744 0 0 1-1.055-.047l-.75-.82V14c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75V6.945l-.773.82a.743.743 0 0 1-1.055.048.744.744 0 0 1-.047-1.055l2.063-2.25A.75.75 0 0 1 4 4.25a.7.7 0 0 1 .54.258M7.75 11c0-.398.328-.75.75-.75h3c.305 0 .563.188.68.469a.76.76 0 0 1-.164.82l-1.711 1.734H11.5c.398 0 .75.329.75.75 0 .399-.352.75-.75.75h-3a.77.77 0 0 1-.703-.468.76.76 0 0 1 .164-.82l1.71-1.735H8.5a.74.74 0 0 1-.75-.75M10 4.25c.281 0 .54.164.656.422l1.5 3 .375.75a.743.743 0 0 1-.328 1.008.743.743 0 0 1-1.008-.328l-.164-.352H8.945l-.164.352a.743.743 0 0 1-1.008.328.743.743 0 0 1-.328-1.008l.375-.75 1.5-3A.73.73 0 0 1 10 4.25m-.492 3.375h.96L10 6.688z' />
    </g>
    <defs>
      <clipPath id='e565286937b3837bdbf89e3cd72fbe9f__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpAZCaptionFillIcon);
export default ForwardRef;
