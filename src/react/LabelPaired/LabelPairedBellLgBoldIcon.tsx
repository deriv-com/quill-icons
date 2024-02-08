import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9 5.5q.547 0 .898.352.352.35.352.898v.703q2.187.39 3.555 1.992 1.406 1.602 1.445 3.867v1.29a7.9 7.9 0 0 0 1.719 4.882l.586.743q.312.469.117.976a.99.99 0 0 1-.86.547H1.188a.99.99 0 0 1-.859-.547q-.234-.508.117-.976l.586-.743a7.9 7.9 0 0 0 1.719-4.882v-1.29q.04-2.265 1.445-3.867 1.368-1.6 3.555-1.992V6.75q0-.547.352-.898Q8.452 5.5 9 5.5m0 3.75h-.312q-1.72.04-2.891 1.172-1.133 1.172-1.172 2.89v1.29q-.04 2.89-1.562 5.273h11.875q-1.563-2.382-1.563-5.273v-1.29q-.04-1.718-1.172-2.89-1.172-1.133-2.89-1.172zM11.5 23q0 1.015-.742 1.758-.742.742-1.758.742t-1.758-.742T6.5 23h5' />
    </g>
    <defs>
      <clipPath id='53b194570307a9d15fde713e5241c9f6__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellLgBoldIcon);
export default ForwardRef;
