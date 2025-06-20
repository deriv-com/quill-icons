import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPresentationScreenCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1 3.5h12c.398 0 .75.352.75.75 0 .422-.352.75-.75.75v5.25c0 .844-.68 1.5-1.5 1.5H7.75v.82l1.64 1.664a.723.723 0 0 1 0 1.055.723.723 0 0 1-1.054 0L7 13.953 5.64 15.29a.723.723 0 0 1-1.054 0 .723.723 0 0 1 0-1.055L6.25 12.57v-.82H2.5a1.48 1.48 0 0 1-1.5-1.5V5a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75M2.5 5v5.25h9V5z' />
    </g>
    <defs>
      <clipPath id='d296469d5818e1e21d4eeae30c5be4c4__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPresentationScreenCaptionFillIcon);
export default ForwardRef;
