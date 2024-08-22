import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownRightXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15.75 25.5H5.25a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h8.672L1.688 11.813c-.282-.282-.282-.797 0-1.079.28-.28.796-.28 1.078 0L15 22.97V14.25c0-.375.328-.75.75-.75.375 0 .75.375.75.75v10.5c0 .422-.375.75-.75.75' />
    </g>
    <defs>
      <clipPath id='26d4cafc4ac74b791b847f87590c1e45__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownRightXlRegularIcon);
export default ForwardRef;
