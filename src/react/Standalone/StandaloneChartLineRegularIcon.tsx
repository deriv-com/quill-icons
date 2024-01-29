import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneChartLineRegularIcon = (
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
    <path d='M7.25 8.375v13.75q.039.78.547 1.328.546.508 1.328.547h16.25q.585.039.625.625-.039.585-.625.625H9.125q-1.328-.04-2.227-.898-.859-.9-.898-2.227V8.375q.039-.585.625-.625.585.039.625.625m17.305 4.18L18.93 18.18q-.43.39-.86 0l-3.32-3.282-3.945 3.907q-.43.39-.86 0-.39-.43 0-.86l4.375-4.375q.43-.39.86 0l3.32 3.282 5.195-5.157q.43-.39.86 0 .39.43 0 .86' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChartLineRegularIcon);
export default ForwardRef;
