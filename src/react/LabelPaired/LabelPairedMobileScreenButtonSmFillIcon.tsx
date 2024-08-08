import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileScreenButtonSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.688 5.5c0-.957.765-1.75 1.75-1.75h6.124c.958 0 1.75.793 1.75 1.75V16c0 .984-.792 1.75-1.75 1.75H2.439c-.985 0-1.75-.766-1.75-1.75zm3.5 10.5c0 .246.19.438.437.438h1.75A.45.45 0 0 0 6.813 16a.47.47 0 0 0-.438-.437h-1.75a.45.45 0 0 0-.437.437M8.563 5.5H2.436v8.75h6.126z' />
    </g>
    <defs>
      <clipPath id='5fe9ba50ad158d00445ec7aeaefecc01__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileScreenButtonSmFillIcon);
export default ForwardRef;
