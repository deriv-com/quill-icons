import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpMdFillIcon = (
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
      <path d='m6.688 5.313 5 5a.964.964 0 0 1 0 1.406.964.964 0 0 1-1.407 0L7 8.438V18c0 .563-.469 1-1 1-.562 0-1-.437-1-1V8.438l-3.312 3.28a.964.964 0 0 1-1.407 0 .964.964 0 0 1 0-1.405l5-5a.964.964 0 0 1 1.407 0' />
    </g>
    <defs>
      <clipPath id='21157d002049597c646bb88515e71416__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpMdFillIcon);
export default ForwardRef;
