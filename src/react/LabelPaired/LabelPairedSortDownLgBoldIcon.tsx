import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortDownLgBoldIcon = (
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
      <path d='m6.5 22.102 3.477-3.477H3.023zm-.898 1.796-5-5q-.547-.624-.274-1.367.352-.742 1.172-.781h10q.82.04 1.172.781.273.742-.274 1.367l-5 5q-.39.352-.898.352t-.898-.352' />
    </g>
    <defs>
      <clipPath id='c207a6ae9eea2b2a__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortDownLgBoldIcon);
export default ForwardRef;
