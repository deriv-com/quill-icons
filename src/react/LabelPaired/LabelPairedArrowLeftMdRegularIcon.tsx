import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftMdRegularIcon = (
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
      <path d='m.156 11.656 5.5-5.5q.345-.312.688 0 .312.345 0 .688L1.719 11.5H13.5q.47.031.5.5-.03.47-.5.5H1.719l4.625 4.656q.312.345 0 .688-.345.312-.688 0l-5.5-5.5q-.312-.345 0-.688' />
    </g>
    <defs>
      <clipPath id='51c7e84617b195faab26aeb9fd31a808__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftMdRegularIcon);
export default ForwardRef;
