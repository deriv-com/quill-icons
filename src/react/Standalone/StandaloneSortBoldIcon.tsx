import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneSortBoldIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M12.523 13.375h6.954L16 9.898zm4.375-5.273 5 5q.547.624.274 1.367-.352.742-1.172.781H11q-.82-.04-1.172-.781-.273-.742.274-1.367l5-5q.39-.352.898-.352t.898.352m-4.375 11.523L16 23.102l3.477-3.477zm4.375 5.273q-.39.352-.898.352t-.898-.352l-5-5q-.547-.624-.274-1.367.352-.742 1.172-.781h10q.82.04 1.172.781.273.742-.274 1.367z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSortBoldIcon);
export default ForwardRef;
