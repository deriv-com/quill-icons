import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileScreenButtonSmBoldIcon = (
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
      <path d='M2 16c0 .246.191.438.438.438h6.124A.45.45 0 0 0 9 16v-2.187H2zm0-3.5h7v-7a.47.47 0 0 0-.437-.437H2.436A.45.45 0 0 0 2 5.5zm-1.312-7c0-.957.765-1.75 1.75-1.75h6.124c.958 0 1.75.793 1.75 1.75V16c0 .984-.792 1.75-1.75 1.75H2.439c-.985 0-1.75-.766-1.75-1.75zm3.937 9.188h1.75a.47.47 0 0 1 .438.437.45.45 0 0 1-.438.438h-1.75a.43.43 0 0 1-.437-.438.45.45 0 0 1 .437-.437' />
    </g>
    <defs>
      <clipPath id='ca36a9d826e943459369b506fd0d39ec__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileScreenButtonSmBoldIcon);
export default ForwardRef;
