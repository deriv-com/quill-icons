import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortLgBoldIcon = (
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
      <path d='M3.023 12.375h6.954L6.5 8.898zm4.375-5.273 5 5q.547.624.274 1.367-.352.742-1.172.781h-10q-.82-.04-1.172-.781-.273-.742.274-1.367l5-5q.39-.352.898-.352t.898.352M3.023 18.625 6.5 22.102l3.477-3.477zm4.375 5.273q-.39.352-.898.352t-.898-.352l-5-5q-.547-.624-.274-1.367.352-.742 1.172-.781h10q.82.04 1.172.781.273.742-.274 1.367z' />
    </g>
    <defs>
      <clipPath id='0bdcb2b3e0cdcc3c05714eed41aa1c53__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortLgBoldIcon);
export default ForwardRef;
