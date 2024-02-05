import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCaretDownMdBoldIcon = (
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
      <path d='M5 14.281 7.781 11.5H2.22zm.719 1.438A1.04 1.04 0 0 1 5 16q-.405 0-.719-.281l-4-4q-.436-.5-.219-1.094Q.345 10.031 1 10h8q.656.031.938.625.218.594-.22 1.094z' />
    </g>
    <defs>
      <clipPath id='463cec9058165fd3efe01ead1e9c9cb1__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretDownMdBoldIcon);
export default ForwardRef;
