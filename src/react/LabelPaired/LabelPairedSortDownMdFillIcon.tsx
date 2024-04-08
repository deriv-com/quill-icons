import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortDownMdFillIcon = (
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
      <path d='M5.688 18.719a.964.964 0 0 1-1.407 0l-4-4a1.01 1.01 0 0 1-.219-1.094C.22 13.25.595 13 1 13h8c.375 0 .75.25.906.625a1.01 1.01 0 0 1-.219 1.094z' />
    </g>
    <defs>
      <clipPath id='ebb2b5670ad749ed43b30d4a95c50755__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortDownMdFillIcon);
export default ForwardRef;
