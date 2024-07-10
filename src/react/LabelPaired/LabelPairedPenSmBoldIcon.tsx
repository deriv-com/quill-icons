import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenSmBoldIcon = (
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
      <path d='M.984 13.621c.11-.383.329-.738.602-1.012l8.312-8.312a1.766 1.766 0 0 1 2.489 0l1.066 1.066c.082.082.164.192.219.274a1.745 1.745 0 0 1-.219 2.215l-8.312 8.312c-.028.027-.082.055-.11.11a2.9 2.9 0 0 1-.902.492l-2.133.629-1.176.355a.62.62 0 0 1-.629-.191.56.56 0 0 1-.164-.63l.328-1.175zm1.258.383-.191.629-.438 1.504 1.504-.438.63-.191c.19-.055.327-.137.464-.274l6.262-6.261-1.696-1.696-6.261 6.262c-.028 0-.028.027-.055.055-.11.11-.164.246-.219.41' />
    </g>
    <defs>
      <clipPath id='83c0287204922066016ee5bb0577475f__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenSmBoldIcon);
export default ForwardRef;
