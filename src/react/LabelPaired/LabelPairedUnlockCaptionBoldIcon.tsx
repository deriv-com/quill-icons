import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUnlockCaptionBoldIcon = (
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
      <path d='M3.625 6.5V8H9.25c.82 0 1.5.68 1.5 1.5V14c0 .844-.68 1.5-1.5 1.5h-7.5A1.48 1.48 0 0 1 .25 14V9.5c0-.82.656-1.5 1.5-1.5h.75V6.5c0-1.64 1.336-3 3-3 1.336 0 2.46.89 2.836 2.086a.56.56 0 0 1-.352.703.56.56 0 0 1-.703-.351c-.258-.75-.96-1.313-1.781-1.313A1.866 1.866 0 0 0 3.625 6.5m-2.25 3V14c0 .21.164.375.375.375h7.5A.385.385 0 0 0 9.625 14V9.5a.4.4 0 0 0-.375-.375h-7.5a.385.385 0 0 0-.375.375' />
    </g>
    <defs>
      <clipPath id='e22656bf0e9d6279e9ba01fe9d05f3b6__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUnlockCaptionBoldIcon);
export default ForwardRef;
