import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskPenSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.875 4.625h6.617c.465 0 .93.191 1.258.52l2.105 2.105c.329.328.52.793.52 1.258v1.695l-4.348 4.348a1.75 1.75 0 0 0-.464.82l-.383 1.504H1.875c-.984 0-1.75-.766-1.75-1.75v-8.75c0-.957.766-1.75 1.75-1.75m0 2.625V9c0 .492.383.875.875.875H8A.88.88 0 0 0 8.875 9V7.25A.9.9 0 0 0 8 6.375H2.75a.88.88 0 0 0-.875.875m4.375 4.375c-.629 0-1.203.355-1.531.875-.301.547-.301 1.23 0 1.75.328.547.902.875 1.531.875.602 0 1.176-.328 1.504-.875.3-.52.3-1.203 0-1.75-.328-.52-.902-.875-1.504-.875m8.887-1.422.41.41c.41.41.41 1.121 0 1.532l-.82.82-1.942-1.942.82-.82c.41-.41 1.122-.41 1.532 0M8.629 15.18l3.555-3.555 1.941 1.941-3.555 3.555a.8.8 0 0 1-.383.219l-1.667.41c-.137.027-.301 0-.41-.11-.11-.109-.137-.273-.11-.41l.41-1.668a.8.8 0 0 1 .219-.382' />
    </g>
    <defs>
      <clipPath id='18e890448e0dfcbe2435250823ce0007__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskPenSmFillIcon);
export default ForwardRef;
