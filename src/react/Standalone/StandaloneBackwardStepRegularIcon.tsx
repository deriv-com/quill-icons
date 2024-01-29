import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneBackwardStepRegularIcon = (
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
    <path d='M12.25 9.625v5.313l6.992-5.704A.99.99 0 0 1 19.906 9q.469 0 .782.313.312.312.312.78v12.813q0 .469-.312.782a1.06 1.06 0 0 1-.782.312.99.99 0 0 1-.664-.234l-6.992-5.703v5.312q-.039.585-.625.625-.585-.039-.625-.625V9.625q.039-.585.625-.625.585.039.625.625m7.5.82L12.29 16.5l7.46 6.055z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBackwardStepRegularIcon);
export default ForwardRef;
