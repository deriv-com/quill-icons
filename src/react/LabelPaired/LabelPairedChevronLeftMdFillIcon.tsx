import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronLeftMdFillIcon = (
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
      <path d='m.281 11.313 6-6a.964.964 0 0 1 1.407 0 .964.964 0 0 1 0 1.406L2.406 12l5.281 5.313a.964.964 0 0 1 0 1.406.964.964 0 0 1-1.406 0l-6-6a.964.964 0 0 1 0-1.406' />
    </g>
    <defs>
      <clipPath id='2f4a41087b266057b0d32203544b76a0__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronLeftMdFillIcon);
export default ForwardRef;
