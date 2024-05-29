import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTabletScreenSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.688 16c0 .246.19.438.437.438h8.75a.45.45 0 0 0 .438-.438v-2.187H1.688zm0-3.5h9.625v-7a.47.47 0 0 0-.438-.437h-8.75a.45.45 0 0 0-.437.437zm-1.313-7c0-.957.766-1.75 1.75-1.75h8.75c.957 0 1.75.793 1.75 1.75V16c0 .984-.793 1.75-1.75 1.75h-8.75c-.984 0-1.75-.766-1.75-1.75zm5.25 9.188h1.75a.47.47 0 0 1 .438.437.45.45 0 0 1-.438.438h-1.75a.43.43 0 0 1-.437-.438.45.45 0 0 1 .437-.437' />
    </g>
    <defs>
      <clipPath id='cb5c0156b6616c58d06b13cb2769e3e0__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTabletScreenSmBoldIcon);
export default ForwardRef;
