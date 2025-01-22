import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSevenSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.125 5.063a.45.45 0 0 1 .438-.438h7.875c.136 0 .3.11.382.246.055.137.055.3-.027.438l-7 11.375a.433.433 0 0 1-.602.136c-.191-.136-.273-.383-.136-.601L7.645 5.5H.563a.43.43 0 0 1-.438-.437' />
    </g>
    <defs>
      <clipPath id='78458558026c144db4212370c841f027__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSevenSmRegularIcon);
export default ForwardRef;
