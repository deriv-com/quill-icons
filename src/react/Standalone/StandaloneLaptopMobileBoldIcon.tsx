import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneLaptopMobileBoldIcon = (
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
    <path d='M8.5 8.375q-.586.039-.625.625v10h9.375v2.5H5.375a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328q.039-.585.625-.625H6V9q.039-1.055.742-1.758T8.5 6.5H21q1.055.039 1.758.742.703.704.742 1.758v1.25h-1.875V9q-.039-.585-.625-.625zm10 5q.039-.78.547-1.328.546-.508 1.328-.547h6.25q.78.039 1.328.547.508.546.547 1.328v11.25q-.039.78-.547 1.328-.546.508-1.328.547h-6.25a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328zm1.875 0v11.25h6.25v-11.25z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneLaptopMobileBoldIcon);
export default ForwardRef;
