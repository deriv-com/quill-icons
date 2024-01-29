import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneForwardStepRegularIcon = (
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
    <path d='M19.75 9.625q.039-.585.625-.625.585.039.625.625v13.75q-.039.585-.625.625-.585-.039-.625-.625v-5.312l-6.992 5.703a.99.99 0 0 1-.664.234 1.06 1.06 0 0 1-.781-.312 1.06 1.06 0 0 1-.313-.782V10.094q0-.47.313-.781a1.06 1.06 0 0 1 .78-.313q.391 0 .665.234l6.992 5.704zm-7.5.82v12.11l7.46-6.055z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneForwardStepRegularIcon);
export default ForwardRef;
