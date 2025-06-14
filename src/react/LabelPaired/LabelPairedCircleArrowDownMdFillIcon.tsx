import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowDownMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8 4c2.844 0 5.469 1.531 6.906 4 1.438 2.5 1.438 5.531 0 8A7.94 7.94 0 0 1 8 20c-2.875 0-5.5-1.5-6.937-4-1.438-2.469-1.438-5.5 0-8A8.02 8.02 0 0 1 8 4m-4.031 8.781 3.5 3.5c.281.313.75.313 1.062 0l3.469-3.5a.684.684 0 0 0 0-1.031.684.684 0 0 0-1.031 0L8.75 13.969V8.25A.76.76 0 0 0 8 7.5a.74.74 0 0 0-.75.75l-.031 5.719L5 11.75a.684.684 0 0 0-1.031 0 .684.684 0 0 0 0 1.031' />
    </g>
    <defs>
      <clipPath id='95243996e0881d29862a1278e7187ace__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowDownMdFillIcon);
export default ForwardRef;
