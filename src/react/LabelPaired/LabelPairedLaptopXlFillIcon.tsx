import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopXlFillIcon = (
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
      <path d='M6 7.5h18c1.64 0 3 1.36 3 3v12h-3v-12H6v12H3v-12c0-1.64 1.313-3 3-3M.89 24h28.173a.94.94 0 0 1 .937.938c0 1.968-1.64 3.562-3.61 3.562H3.564A3.56 3.56 0 0 1 0 24.938C0 24.422.375 24 .89 24' />
    </g>
    <defs>
      <clipPath id='2d16671cb7bcd5c4a811a7609366f2d0__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopXlFillIcon);
export default ForwardRef;
