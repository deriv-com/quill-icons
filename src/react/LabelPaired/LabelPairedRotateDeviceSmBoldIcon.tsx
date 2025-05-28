import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRotateDeviceSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.43 6.457a4.82 4.82 0 0 1 1.422 3.445h.71a5.61 5.61 0 0 0-1.64-3.964c-.246-.22-.492-.438-.738-.63l-.274-.163a8 8 0 0 0-.984-.493l-.328-.109-.383-.082a3.6 3.6 0 0 0-.93-.137l-.328-.027h-.848L9.242 6.43l.246-.246.246-.247-.847-.847c.054.027.11.027.191.055l.3.082.302.109c.3.11.574.246.847.41l.246.137q.33.246.657.574m-8.696 8.668a4.85 4.85 0 0 1-1.449-3.445H.602c0 1.422.546 2.87 1.64 3.965.219.218.492.437.738.628l.274.165q.45.286.984.492l.328.11.356.081c.328.082.629.137.957.137l.328.027h.82l-2.105-2.16-.246.246-.246.246.847.875c-.054-.027-.136-.027-.191-.055l-.3-.082-.302-.109c-.3-.11-.574-.246-.847-.41l-.246-.137a4.3 4.3 0 0 1-.657-.574m8.914-2.242-2.46 2.488a1.27 1.27 0 0 1-1.75 0l-4.95-4.95c-.465-.491-.465-1.257 0-1.722l2.489-2.488a1.24 1.24 0 0 1 1.722 0l4.95 4.95c.492.491.492 1.257 0 1.722m-6.425-4.95-.985 1.012c-.218.192-.547.192-.738 0l-.137-.136-.355.382c-.219.192-.219.52 0 .739l4.949 4.949c.191.191.52.191.738 0l2.461-2.488c.219-.192.219-.52 0-.739L6.207 6.703c-.191-.191-.52-.191-.738 0l-.383.383.137.11c.191.218.191.546 0 .738m-.438-.355-.191-.191-.93.93.191.19z' />
    </g>
    <defs>
      <clipPath id='8687177f3add02573f618d7bca7c2e7e__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRotateDeviceSmBoldIcon);
export default ForwardRef;
