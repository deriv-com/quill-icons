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
      <path d='M13.781 10.75q-.054 2.598-1.64 4.43-1.587 1.832-4.075 2.27v-4.731h1.586l.301-1.969H8.066V9.465a.98.98 0 0 1 .22-.711q.245-.328.874-.328h.848V6.758q-.027-.027-.465-.082a9 9 0 0 0-1.04-.055q-1.175 0-1.858.684-.684.683-.711 1.941v1.504H4.21v1.969h1.723v4.73q-2.489-.437-4.075-2.27Q.273 13.35.22 10.75q.027-1.887.93-3.418a6.77 6.77 0 0 1 2.433-2.434q1.53-.901 3.418-.93 1.887.028 3.418.93a6.77 6.77 0 0 1 2.434 2.434q.902 1.53.93 3.418' />
    </g>
    <defs>
      <clipPath id='b73da24241743c4762ca295c1718471c__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFacebookSmIcon);
export default ForwardRef;
