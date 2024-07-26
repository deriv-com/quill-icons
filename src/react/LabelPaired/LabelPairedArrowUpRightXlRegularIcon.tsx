import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightXlRegularIcon = (
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
      <path d='M15.75 10.5c.375 0 .75.375.75.75v10.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-8.672L2.766 25.313c-.282.28-.797.28-1.078 0-.282-.282-.282-.797 0-1.079L13.922 12H5.25a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75z' />
    </g>
    <defs>
      <clipPath id='3da11bce47267513b54a7e71aab79739__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightXlRegularIcon);
export default ForwardRef;
