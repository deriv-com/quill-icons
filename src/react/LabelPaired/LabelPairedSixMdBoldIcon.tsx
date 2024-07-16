import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSixMdBoldIcon = (
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
      <path d='M8.5 14c0-1.906-1.594-3.5-3.5-3.5a3.44 3.44 0 0 0-2.562 1.125l-.157.188A3.36 3.36 0 0 0 1.5 14c0 1.938 1.563 3.5 3.5 3.5 1.906 0 3.5-1.562 3.5-3.5M4.531 9.031C4.688 9.031 4.844 9 5 9c2.75 0 5 2.25 5 5 0 2.781-2.25 5-5 5-2.781 0-5-2.219-5-5 0-1.281.469-2.469 1.281-3.344l4.375-5.375a.744.744 0 0 1 1.063-.093c.312.25.375.718.093 1.062z' />
    </g>
    <defs>
      <clipPath id='b36393a7c4a6958db39d88839c730f76__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSixMdBoldIcon);
export default ForwardRef;
