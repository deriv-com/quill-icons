import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPaperPlaneTopSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={22}
    viewBox='0 0 15 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.582 5.91a.92.92 0 0 1 .137-1.012.93.93 0 0 1 .984-.191l12.25 5.25a.89.89 0 0 1 .547.793.9.9 0 0 1-.547.82l-12.25 5.25a.89.89 0 0 1-.984-.218.87.87 0 0 1-.137-.985l2.434-4.867zm3.2 5.278L1.374 16l11.21-4.812zm8.804-.876L1.375 5.5l2.406 4.813z' />
    </g>
    <defs>
      <clipPath id='3dc8f69190dea2eb1f253255bca75340__a'>
        <path d='M0 0h15v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPaperPlaneTopSmRegularIcon);
export default ForwardRef;
