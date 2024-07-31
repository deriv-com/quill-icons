import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleFiveCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 15.5a5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3m-1.125-9h-.023c-.258 0-.493.21-.54.469L3.938 9.03a.6.6 0 0 0 .094.446.6.6 0 0 0 .399.21l2.039.235a.735.735 0 0 1 .656.726.736.736 0 0 1-.75.727h-.844a.82.82 0 0 1-.68-.352l-.093-.14a.563.563 0 0 0-.774-.164.57.57 0 0 0-.14.797l.094.14c.351.54.96.844 1.593.844h.844a1.86 1.86 0 0 0 1.875-1.852c0-.937-.727-1.734-1.664-1.851l-1.43-.164.188-1.008h1.968a.555.555 0 0 0 .563-.562.57.57 0 0 0-.562-.563z' />
    </g>
    <defs>
      <clipPath id='a99b73cc4405a4dc2ff65929eb25496f__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleFiveCaptionFillIcon);
export default ForwardRef;
