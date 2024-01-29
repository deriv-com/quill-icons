import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCaretDownBoldIcon = (
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
    <path d='m16 19.352 3.477-3.477h-6.954zm.898 1.796q-.39.352-.898.352t-.898-.352l-5-5q-.547-.624-.274-1.367Q10.18 14.04 11 14h10q.82.04 1.172.781.273.742-.274 1.367z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCaretDownBoldIcon);
export default ForwardRef;
