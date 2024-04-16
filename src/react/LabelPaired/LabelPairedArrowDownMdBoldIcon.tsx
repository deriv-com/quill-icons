import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownMdBoldIcon = (
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
      <path d='m5.438 18.781-5.25-5.5c-.282-.312-.282-.781.03-1.062.313-.281.782-.281 1.063.031l3.969 4.156V5.75A.74.74 0 0 1 6 5a.76.76 0 0 1 .75.75v10.656l3.938-4.156a.746.746 0 0 1 1.062-.031c.313.281.313.75.031 1.062l-5.25 5.5A.73.73 0 0 1 6 19a.75.75 0 0 1-.562-.219' />
    </g>
    <defs>
      <clipPath id='3a42a58dcd69fdccf94fcf4ae7fd7b34__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownMdBoldIcon);
export default ForwardRef;
