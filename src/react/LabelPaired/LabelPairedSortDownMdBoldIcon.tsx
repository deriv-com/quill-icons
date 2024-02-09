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
      <path d='M5 17.281 7.781 14.5H2.22zm-.719 1.438-4-4q-.436-.5-.219-1.094Q.345 13.031 1 13h8q.656.031.938.625.218.594-.22 1.094l-4 4A1.04 1.04 0 0 1 5 19q-.405 0-.719-.281' />
    </g>
    <defs>
      <clipPath id='247e1eef6a9980fba5ae73d859180614__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortDownMdBoldIcon);
export default ForwardRef;
