import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarsCaptionFillIcon = (
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
      <path d='M.25 5.75C.25 5.352.578 5 1 5h9c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H1a.74.74 0 0 1-.75-.75m0 3.75c0-.398.328-.75.75-.75h9c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H1a.74.74 0 0 1-.75-.75m10.5 3.75c0 .422-.352.75-.75.75H1a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75h9c.398 0 .75.352.75.75' />
    </g>
    <defs>
      <clipPath id='a0a0989f9f1c4f87d5e5a95729d92280__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsCaptionFillIcon);
export default ForwardRef;
