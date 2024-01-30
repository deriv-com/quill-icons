import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.414 9.898A.54.54 0 0 1 .25 9.5q0-.235.164-.398L4.54 5.164q.422-.329.797 0 .328.422-.024.797L2.22 8.937h7.969q.514.048.562.563-.047.515-.562.563h-7.97l3.118 2.976q.328.375 0 .797-.375.328-.774 0L.439 9.898z' />
    </g>
    <defs>
      <clipPath id='74cb742d08453e081393cbbee7c61751__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftCaptionBoldIcon);
export default ForwardRef;
