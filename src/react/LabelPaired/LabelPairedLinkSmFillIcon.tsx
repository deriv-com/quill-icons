import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinkSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m16.082 11.078-3.062 3.063a3.91 3.91 0 0 1-5.579 0 3.946 3.946 0 0 1-.437-5.086l.027-.028a.886.886 0 0 1 1.23-.218c.384.273.493.82.192 1.23l-.027.027a2.204 2.204 0 0 0 .246 2.844c.848.875 2.242.875 3.117 0l3.063-3.062c.875-.875.875-2.27 0-3.118a2.204 2.204 0 0 0-2.844-.246l-.027.028a.873.873 0 0 1-1.231-.192.906.906 0 0 1 .191-1.23l.055-.027a3.946 3.946 0 0 1 5.086.437 3.91 3.91 0 0 1 0 5.578M1.891 10.45l3.062-3.09a3.994 3.994 0 0 1 5.606 0c1.367 1.368 1.53 3.528.41 5.114l-.028.027c-.273.41-.847.492-1.23.219a.873.873 0 0 1-.191-1.23l.027-.028A2.2 2.2 0 0 0 9.3 8.617c-.848-.875-2.242-.875-3.117 0L3.12 11.68c-.848.847-.848 2.242 0 3.117a2.204 2.204 0 0 0 2.844.246l.027-.027a.873.873 0 0 1 1.23.191.906.906 0 0 1-.19 1.23l-.055.028c-1.559 1.12-3.72.93-5.086-.438a3.91 3.91 0 0 1 0-5.578' />
    </g>
    <defs>
      <clipPath id='a42a6e397756aec6ead3c8b0fb812c99__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkSmFillIcon);
export default ForwardRef;
