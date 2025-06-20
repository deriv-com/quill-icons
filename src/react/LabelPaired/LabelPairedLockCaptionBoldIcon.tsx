import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLockCaptionBoldIcon = (
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
      <path d='M3.625 6.5V8h3.75V6.5A1.88 1.88 0 0 0 5.5 4.625 1.866 1.866 0 0 0 3.625 6.5M2.5 8V6.5c0-1.64 1.336-3 3-3 1.64 0 3 1.36 3 3V8h.75c.82 0 1.5.68 1.5 1.5V14c0 .844-.68 1.5-1.5 1.5h-7.5A1.48 1.48 0 0 1 .25 14V9.5c0-.82.656-1.5 1.5-1.5zM1.375 9.5V14c0 .21.164.375.375.375h7.5A.385.385 0 0 0 9.625 14V9.5a.4.4 0 0 0-.375-.375h-7.5a.385.385 0 0 0-.375.375' />
    </g>
    <defs>
      <clipPath id='207fe4b21dd976a61ef99661105907ae__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLockCaptionBoldIcon);
export default ForwardRef;
