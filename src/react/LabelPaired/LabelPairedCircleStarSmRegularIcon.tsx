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
      <path d='M7 4.625a6.3 6.3 0 0 0-3.062.82 6.3 6.3 0 0 0-2.243 2.242 6.12 6.12 0 0 0 0 6.126 6.3 6.3 0 0 0 2.242 2.242q1.395.792 3.063.82a6.3 6.3 0 0 0 3.063-.82 6.3 6.3 0 0 0 2.242-2.242 6.12 6.12 0 0 0 0-6.126 6.3 6.3 0 0 0-2.242-2.242A6.3 6.3 0 0 0 7 4.625M7 17.75q-1.914-.027-3.5-.93-1.586-.93-2.57-2.57Q0 12.582 0 10.75t.93-3.5q.984-1.64 2.57-2.57 1.586-.903 3.5-.93 1.914.027 3.5.93 1.586.93 2.57 2.57.93 1.668.93 3.5t-.93 3.5q-.984 1.64-2.57 2.57-1.586.903-3.5.93m.383-10.91 1.012 1.996 2.214.328a.49.49 0 0 1 .356.3.55.55 0 0 1-.11.466l-1.613 1.558.383 2.188a.46.46 0 0 1-.191.437.42.42 0 0 1-.438.028L7 13.1l-1.969 1.04a.47.47 0 0 1-.465-.028.46.46 0 0 1-.191-.437l.383-2.188-1.586-1.586a.4.4 0 0 1-.11-.437.43.43 0 0 1 .329-.3l2.214-.33L6.617 6.84A.39.39 0 0 1 7 6.594q.273 0 .383.246M6.289 9.438a.5.5 0 0 1-.328.246l-1.559.218 1.121 1.121a.44.44 0 0 1 .137.383l-.273 1.559 1.394-.738a.41.41 0 0 1 .41 0l1.422.738-.273-1.559a.48.48 0 0 1 .11-.383l1.148-1.12-1.559-.22q-.246-.054-.328-.245L7 8.015z' />
    </g>
    <defs>
      <clipPath id='b28bbd5e5aed8342__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleStarSmRegularIcon);
export default ForwardRef;
