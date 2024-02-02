import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCaretDownSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m4.664 13.32 3.281-3.117A.19.19 0 0 0 8 10.066a.214.214 0 0 0-.191-.191H1.19a.214.214 0 0 0-.191.191q0 .082.055.137l3.28 3.117q.083.055.165.055.083 0 .164-.055m.602.63q-.329.3-.766.3-.438 0-.766-.3l-3.28-3.09a1.08 1.08 0 0 1-.329-.794q0-.465.3-.765Q.728 9 1.192 9H7.81q.465.027.765.328.3.3.301.738 0 .466-.328.793z' />
    </g>
    <defs>
      <clipPath id='61fb2c5b6fc1e642__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretDownSmRegularIcon);
export default ForwardRef;
