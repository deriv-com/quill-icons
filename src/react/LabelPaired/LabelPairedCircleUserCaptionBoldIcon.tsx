import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleUserCaptionBoldIcon = (
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
      <path d='M9.516 12.875A4.83 4.83 0 0 0 10.875 9.5c0-2.672-2.203-4.875-4.875-4.875-2.695 0-4.875 2.203-4.875 4.875 0 1.313.492 2.508 1.336 3.375A3 3 0 0 1 5.25 11h1.5c1.242 0 2.32.773 2.766 1.875m-.938.773a1.88 1.88 0 0 0-1.828-1.523h-1.5c-.914 0-1.687.656-1.852 1.523.75.47 1.641.727 2.602.727.938 0 1.828-.258 2.578-.727M6 15.5a5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3m0-6.375a.89.89 0 0 0 .797-.469.95.95 0 0 0 0-.937A.94.94 0 0 0 6 7.25a.95.95 0 0 0-.82.469.95.95 0 0 0 0 .937c.164.305.468.469.82.469m-2.062-.937c0-.727.374-1.407 1.03-1.782a2.15 2.15 0 0 1 2.063 0 2.09 2.09 0 0 1 1.032 1.782c0 .75-.399 1.43-1.032 1.804a2.15 2.15 0 0 1-2.062 0 2.05 2.05 0 0 1-1.032-1.805' />
    </g>
    <defs>
      <clipPath id='f1d5da05d534604baefd209b688d6f51__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleUserCaptionBoldIcon);
export default ForwardRef;
