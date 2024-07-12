import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPaperclipSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.328 6.047a1.75 1.75 0 0 0-2.433 0l-5.032 5.031a2.97 2.97 0 0 0 0 4.184 2.97 2.97 0 0 0 4.184 0l4.156-4.157c.3-.3.766-.3 1.067 0 .3.301.3.766 0 1.067l-4.157 4.156a4.456 4.456 0 0 1-6.316 0 4.456 4.456 0 0 1 0-6.316L6.828 4.98a3.186 3.186 0 0 1 4.567 0 3.186 3.186 0 0 1 0 4.567l-4.813 4.812a1.965 1.965 0 0 1-2.816 0 1.965 1.965 0 0 1 0-2.816l3.937-3.938c.3-.3.766-.3 1.067 0 .3.301.3.766 0 1.067l-3.938 3.937a.536.536 0 0 0 0 .684.536.536 0 0 0 .684 0l4.812-4.813a1.75 1.75 0 0 0 0-2.433' />
    </g>
    <defs>
      <clipPath id='65ad8142eead7a6cca15f44b701fbad7__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPaperclipSmFillIcon);
export default ForwardRef;
