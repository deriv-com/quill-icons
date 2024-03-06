import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGoogleSmIcon = (
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
      <path d='M13.672 10.914q-.055 2.954-1.805 4.758-1.777 1.805-4.758 1.86-1.886-.029-3.418-.93a6.77 6.77 0 0 1-2.433-2.434q-.903-1.53-.93-3.418.027-1.887.93-3.418A6.77 6.77 0 0 1 3.69 4.898q1.531-.901 3.418-.93 2.763.056 4.54 1.778L9.815 7.523q-1.284-1.148-2.87-1.039-1.587.082-2.79 1.204Q2.98 8.836 2.898 10.75q.056 1.832 1.23 3.035 1.204 1.204 2.981 1.258 1.341-.027 2.16-.547.821-.519 1.231-1.176.383-.683.465-1.203H7.109V9.766h6.454q.108.491.109 1.148' />
    </g>
    <defs>
      <clipPath id='ed15d6b772cd7e7a39a29d360f8056c6__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGoogleSmIcon);
export default ForwardRef;
