import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleStarSmFillIcon = (
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
      <path d='M0 10.75q.027-1.914.93-3.5.93-1.586 2.57-2.57 1.668-.93 3.5-.93t3.5.93q1.64.984 2.57 2.57.903 1.586.93 3.5-.027 1.914-.93 3.5-.93 1.586-2.57 2.57-1.668.93-3.5.93t-3.5-.93q-1.64-.984-2.57-2.57-.903-1.586-.93-3.5m7-4.156a.39.39 0 0 0-.383.246l-.984 1.996-2.215.328a.44.44 0 0 0-.356.3.4.4 0 0 0 .11.438l1.586 1.586-.383 2.188a.46.46 0 0 0 .191.437q.219.136.465.028L7 13.1l1.996 1.04a.42.42 0 0 0 .438-.028.46.46 0 0 0 .191-.437l-.383-2.188 1.613-1.558q.165-.219.11-.465a.49.49 0 0 0-.356-.3l-2.214-.33L7.383 6.84A.39.39 0 0 0 7 6.594' />
    </g>
    <defs>
      <clipPath id='5b3ea2d32847b0c17fd442650c388e4f__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleStarSmFillIcon);
export default ForwardRef;
