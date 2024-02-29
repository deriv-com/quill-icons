import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEllipsisMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.5 12q-.03.844-.75 1.313-.75.375-1.5 0-.72-.469-.75-1.313.03-.844.75-1.312.75-.375 1.5 0 .72.469.75 1.312m-5 0q-.03.844-.75 1.313-.75.375-1.5 0-.72-.469-.75-1.313.03-.844.75-1.312.75-.375 1.5 0 .72.469.75 1.312M2 13.5q-.843-.03-1.312-.75-.375-.75 0-1.5.468-.72 1.312-.75.844.03 1.313.75.375.75 0 1.5-.469.72-1.313.75' />
    </g>
    <defs>
      <clipPath id='c489f333f32d197248801d88a3789522__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisMdBoldIcon);
export default ForwardRef;
