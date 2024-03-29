import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m6.531 5.25 5.25 5.5c.281.313.281.781-.031 1.063-.312.28-.781.28-1.062-.032L6.75 7.625V18.25A.74.74 0 0 1 6 19a.72.72 0 0 1-.75-.75V7.625l-3.969 4.156c-.281.313-.75.313-1.062.031a.746.746 0 0 1-.031-1.062l5.25-5.5A.78.78 0 0 1 6 5c.188 0 .375.094.531.25' />
    </g>
    <defs>
      <clipPath id='be0719c6c47fe897827754def585409d__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpMdBoldIcon);
export default ForwardRef;
