import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenCircleXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12 30c-4.312 0-8.25-2.25-10.406-6-2.157-3.703-2.157-8.25 0-12C3.75 8.297 7.688 6 12 6c4.266 0 8.203 2.297 10.36 6 2.156 3.75 2.156 8.297 0 12A11.91 11.91 0 0 1 12 30m4.734-17.437c-.703-.704-1.922-.704-2.625 0l-1.03 1.03 3.327 3.329 1.032-1.031c.703-.75.703-1.922 0-2.625zm-9.656 6.984a1.5 1.5 0 0 0-.375.703L6 23.063c-.047.28 0 .562.188.75.187.187.468.234.703.187l2.859-.703c.234-.094.469-.235.656-.422l4.969-4.922-3.328-3.328z' />
    </g>
    <defs>
      <clipPath id='2269859c0edb14ff00f25964b89b0766__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenCircleXlFillIcon);
export default ForwardRef;
