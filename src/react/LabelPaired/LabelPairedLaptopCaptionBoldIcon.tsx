import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12 5.375H3a.385.385 0 0 0-.375.375V11H1.5V5.75c0-.82.656-1.5 1.5-1.5h9c.82 0 1.5.68 1.5 1.5V11h-1.125V5.75A.4.4 0 0 0 12 5.375m-9.75 8.25h10.5c.469 0 .89-.305 1.055-.75H1.172c.164.445.586.75 1.078.75M0 12.5c0-.398.328-.75.75-.75h13.5c.398 0 .75.352.75.75a2.25 2.25 0 0 1-2.25 2.25H2.25A2.25 2.25 0 0 1 0 12.5' />
    </g>
    <defs>
      <clipPath id='499ea8e260ca03ed7ff33fda3bb38331__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopCaptionBoldIcon);
export default ForwardRef;
