import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortUpLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m6.5 8.898-3.477 3.477h6.954zm-.898-1.796q.39-.352.898-.352t.898.352l5 5q.547.624.274 1.367-.352.742-1.172.781h-10q-.82-.04-1.172-.781-.273-.742.274-1.367z' />
    </g>
    <defs>
      <clipPath id='98e746a71211e4b9__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortUpLgBoldIcon);
export default ForwardRef;
