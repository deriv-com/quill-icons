import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpOneNineSmBoldIcon = (
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
      <path d='M12.594 5.281v3.282h.656c.355 0 .656.3.656.656 0 .383-.3.656-.656.656h-2.625a.63.63 0 0 1-.656-.656c0-.356.273-.656.656-.656h.656V6.21l-.465.137a.64.64 0 0 1-.82-.41c-.11-.356.055-.711.41-.82l1.313-.438a.61.61 0 0 1 .601.082.66.66 0 0 1 .274.52m-8.559-.465a.644.644 0 0 1 .902 0l2.625 2.625c.274.274.274.684 0 .93a.6.6 0 0 1-.902 0L5.156 6.867v9.352c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656V6.867L2.34 8.371c-.274.274-.684.274-.93 0a.6.6 0 0 1 0-.902l2.625-2.625zm7.684 7.247c-.41 0-.766.218-.957.546a1.11 1.11 0 0 0 0 1.094c.191.356.547.547.957.547.383 0 .738-.191.93-.547a1.11 1.11 0 0 0 0-1.094 1.09 1.09 0 0 0-.93-.546m-.492 3.472a2.435 2.435 0 0 1-1.915-2.379 2.41 2.41 0 0 1 2.407-2.406 2.43 2.43 0 0 1 2.406 2.406c0 .602-.219 1.149-.574 1.586l-1.559 1.914c-.219.274-.629.301-.93.082-.273-.218-.3-.629-.082-.93z' />
    </g>
    <defs>
      <clipPath id='b1afa9e6769234db173584463fa3a90b__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpOneNineSmBoldIcon);
export default ForwardRef;
