import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFacebookSmIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M14 10.75c0 3.582-2.707 6.535-6.152 6.973V12.91h1.886l.383-2.16h-2.27v-.738c0-1.149.438-1.586 1.587-1.586.355 0 .629.027.793.027V6.54c-.301-.11-1.067-.191-1.504-.191-2.352 0-3.418 1.12-3.418 3.5v.902h-1.45v2.16h1.45v4.649A7.01 7.01 0 0 1 0 10.75c0-3.855 3.117-7 7-7 3.855 0 7 3.145 7 7' />
    </g>
    <defs>
      <clipPath id='757101ccf84ecd3e4c9281dd5dab8ed6__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFacebookSmIcon);
export default ForwardRef;
