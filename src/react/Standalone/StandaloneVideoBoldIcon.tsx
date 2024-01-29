import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneVideoBoldIcon = (
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
    <path d='M7.25 10.875q-.585.039-.625.625v10q.039.585.625.625h10q.585-.039.625-.625v-10q-.039-.585-.625-.625zm-2.5.625q.039-1.055.742-1.758T7.25 9h10q1.055.039 1.758.742t.742 1.758v10q-.039 1.055-.742 1.758-.704.703-1.758.742h-10q-1.055-.039-1.758-.742-.703-.704-.742-1.758zm20.625 9.18v-8.36L21 14.273v-2.07l4.063-1.797q.312-.156.664-.156.625 0 1.054.469.47.428.469 1.094v9.414q0 .625-.469 1.054a1.38 1.38 0 0 1-1.054.469q-.352 0-.665-.117L21 20.797v-2.07z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneVideoBoldIcon);
export default ForwardRef;
