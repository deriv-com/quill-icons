import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsRightLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M18.164 14.836c.352.39.352.976 0 1.328l-7.5 7.5c-.39.39-.976.39-1.328 0a.856.856 0 0 1 0-1.289l6.836-6.836-6.836-6.875a.855.855 0 0 1 0-1.289.855.855 0 0 1 1.289 0zm-15-7.5 7.5 7.5c.352.39.352.976 0 1.328l-7.5 7.5c-.39.39-.977.39-1.328 0a.856.856 0 0 1 0-1.289l6.836-6.836-6.836-6.875a.855.855 0 0 1 0-1.289.855.855 0 0 1 1.289 0z' />
    </g>
    <defs>
      <clipPath id='e4f14e3c411524c47db6b536cb2d1771__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsRightLgBoldIcon);
export default ForwardRef;
