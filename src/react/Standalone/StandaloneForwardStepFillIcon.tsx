import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneForwardStepFillIcon = (
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
    <path d='M11.82 23.727q-.624.468-1.367.156-.664-.352-.703-1.133v-12.5q.039-.78.703-1.133.742-.312 1.367.156l7.5 6.25.43.391V10.25q0-.547.352-.898Q20.452 9 21 9q.547 0 .898.352.352.35.352.898v12.5q0 .547-.352.898Q21.548 24 21 24q-.547 0-.898-.352-.352-.35-.352-.898v-5.664l-.43.39z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneForwardStepFillIcon);
export default ForwardRef;
