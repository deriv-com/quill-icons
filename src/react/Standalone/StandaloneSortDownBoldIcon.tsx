import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneSortDownBoldIcon = (
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
    <path d='m16 23.102 3.477-3.477h-6.954zm-.898 1.796-5-5q-.547-.624-.274-1.367.352-.742 1.172-.781h10q.82.04 1.172.781.273.742-.274 1.367l-5 5q-.39.352-.898.352t-.898-.352' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSortDownBoldIcon);
export default ForwardRef;
