import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowRightLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 15.5a9.93 9.93 0 0 1 5-8.633c3.086-1.797 6.875-1.797 10 0 3.086 1.797 5 5.078 5 8.633 0 3.594-1.914 6.875-5 8.672-3.125 1.797-6.914 1.797-10 0-3.125-1.797-5-5.078-5-8.672m10.977 5.04 4.375-4.376c.351-.352.351-.937 0-1.328L10.977 10.5c-.391-.39-.977-.39-1.329 0a.856.856 0 0 0 0 1.29l2.774 2.773h-7.11a.925.925 0 0 0-.937.937c0 .547.39.938.938.938l7.109.039-2.774 2.773a.856.856 0 0 0 0 1.29c.352.39.938.39 1.329 0' />
    </g>
    <defs>
      <clipPath id='8ca249ec147df3d109d10c234b15e757__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowRightLgFillIcon);
export default ForwardRef;
