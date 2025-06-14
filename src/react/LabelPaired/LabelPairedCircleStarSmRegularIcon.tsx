import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleStarSmRegularIcon = (
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
      <path d='M7 4.625a6.11 6.11 0 0 0-5.305 3.063c-1.12 1.914-1.12 4.238 0 6.125C2.79 15.727 4.785 16.875 7 16.875a6.04 6.04 0 0 0 5.277-3.062c1.121-1.887 1.121-4.211 0-6.126A6.1 6.1 0 0 0 7 4.626M7 17.75a6.96 6.96 0 0 1-6.07-3.5c-1.258-2.16-1.258-4.812 0-7A7.02 7.02 0 0 1 7 3.75c2.488 0 4.785 1.34 6.043 3.5 1.258 2.188 1.258 4.84 0 7A6.95 6.95 0 0 1 7 17.75m.383-10.91.984 2.023 2.215.328c.164.028.3.137.355.301a.39.39 0 0 1-.109.438l-1.586 1.558.356 2.215c.027.164-.028.328-.164.41a.48.48 0 0 1-.465.055L7 13.128l-1.996 1.04a.48.48 0 0 1-.465-.055c-.137-.082-.191-.246-.164-.41l.383-2.215L3.145 9.93a.47.47 0 0 1-.11-.465c.055-.137.192-.274.356-.274l2.214-.328.985-2.023A.51.51 0 0 1 7 6.594c.164 0 .3.11.383.246M6.289 9.438c-.055.136-.191.218-.328.246l-1.559.246 1.121 1.093c.11.11.165.247.137.383l-.273 1.559 1.394-.738a.53.53 0 0 1 .41 0l1.395.738-.274-1.559c-.027-.136.028-.273.137-.383L9.57 9.93l-1.558-.246c-.137 0-.274-.11-.328-.22L7 8.044z' />
    </g>
    <defs>
      <clipPath id='2bb02712cf8cc047e44827226359c9ba__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleStarSmRegularIcon);
export default ForwardRef;
