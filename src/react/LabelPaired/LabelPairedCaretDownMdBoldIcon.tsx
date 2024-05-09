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
      <path d='M5 14.313 7.781 11.5H2.188zm.688 1.406a.964.964 0 0 1-1.407 0l-4-4a1.01 1.01 0 0 1-.219-1.094C.22 10.25.595 10 1 10h8c.375 0 .75.25.906.625a1.01 1.01 0 0 1-.219 1.094z' />
    </g>
    <defs>
      <clipPath id='68f4807f2d72e487a34b24e08d9c0873__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretDownMdBoldIcon);
export default ForwardRef;
