import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronLeftMdBoldIcon = (
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
      <path d='m.469 11.469 6-5.969c.281-.312.75-.312 1.062 0a.736.736 0 0 1 0 1.031L2.031 12 7.5 17.5a.684.684 0 0 1 0 1.031.684.684 0 0 1-1.031 0l-6-6c-.313-.281-.313-.75 0-1.062' />
    </g>
    <defs>
      <clipPath id='477b2e75fc105235f74e6d6b6d7e1315__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronLeftMdBoldIcon);
export default ForwardRef;
