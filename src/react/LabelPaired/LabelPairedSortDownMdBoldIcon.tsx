import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortDownMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5 17.313 7.781 14.5H2.188zm-.719 1.406-4-4a1.01 1.01 0 0 1-.219-1.094C.22 13.25.595 13 1 13h8c.406 0 .75.25.906.625a1.01 1.01 0 0 1-.219 1.094l-4 4a.964.964 0 0 1-1.406 0' />
    </g>
    <defs>
      <clipPath id='b237c027ad6c719c10eb44280fc4c5e8__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortDownMdBoldIcon);
export default ForwardRef;
