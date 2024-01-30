import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSearchLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M14.375 13.625q0-1.68-.82-3.125a6.5 6.5 0 0 0-2.305-2.305 6.37 6.37 0 0 0-3.125-.82A6.37 6.37 0 0 0 5 8.195 6.5 6.5 0 0 0 2.695 10.5a6.2 6.2 0 0 0-.82 3.125q0 1.68.82 3.125A6.5 6.5 0 0 0 5 19.055q1.485.82 3.125.82a6.37 6.37 0 0 0 3.125-.82 6.5 6.5 0 0 0 2.305-2.305q.82-1.445.82-3.125m-1.21 6.367q-2.11 1.719-5.04 1.758-3.438-.078-5.742-2.383Q.079 17.063 0 13.625q.078-3.438 2.383-5.742Q4.687 5.579 8.125 5.5q3.438.078 5.742 2.383 2.305 2.304 2.383 5.742-.039 2.93-1.758 5.04l5.235 5.233q.546.665 0 1.329-.665.546-1.329 0z' />
    </g>
    <defs>
      <clipPath id='99463498588183a66cca0bd961543a21__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSearchLgBoldIcon);
export default ForwardRef;
