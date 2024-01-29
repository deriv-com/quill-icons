import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneBackwardStepFillIcon = (
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
    <path d='m20.219 23.727-7.5-6.25-.469-.391v5.664q0 .547-.352.898Q11.548 24 11 24q-.547 0-.898-.352-.352-.35-.352-.898v-12.5q0-.547.352-.898Q10.452 9 11 9q.547 0 .898.352.352.35.352.898v5.664l.469-.39 7.5-6.25q.585-.47 1.328-.157.664.352.703 1.133v12.5q-.039.78-.703 1.133-.743.312-1.328-.156' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBackwardStepFillIcon);
export default ForwardRef;
