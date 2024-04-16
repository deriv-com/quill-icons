import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedZeroSmFillIcon = (
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
      <path d='M.125 9A4.37 4.37 0 0 1 4.5 4.625 4.39 4.39 0 0 1 8.875 9v3.5A4.37 4.37 0 0 1 4.5 16.875 4.353 4.353 0 0 1 .125 12.5zM4.5 6.375A2.626 2.626 0 0 0 1.875 9v3.5a2.626 2.626 0 0 0 5.25 0V9A2.626 2.626 0 0 0 4.5 6.375' />
    </g>
    <defs>
      <clipPath id='82701de27cf9a2939441302af6061e6b__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedZeroSmFillIcon);
export default ForwardRef;
