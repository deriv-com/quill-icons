import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenLineSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m.48 15.754.63-2.133c.109-.383.327-.738.6-1.012l8.313-8.312a1.766 1.766 0 0 1 2.489 0l1.066 1.066c.082.082.164.192.219.274a1.745 1.745 0 0 1-.219 2.215l-8.312 8.312c-.028.027-.082.055-.11.11a2.9 2.9 0 0 1-.902.492l-2.133.629-1.176.328a.56.56 0 0 1-.629-.164.56.56 0 0 1-.164-.63zm1.696-1.121-.438 1.504 1.504-.438.63-.191c.19-.055.327-.137.464-.274l6.262-6.261-1.696-1.696-6.261 6.262c-.028 0-.028.027-.055.055-.11.11-.164.246-.219.41zm4.73 1.805h8.313c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H6.906a.63.63 0 0 1-.656-.656c0-.356.273-.657.656-.657' />
    </g>
    <defs>
      <clipPath id='8a3c65dfd92886da9cd023b27de9821d__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenLineSmBoldIcon);
export default ForwardRef;
