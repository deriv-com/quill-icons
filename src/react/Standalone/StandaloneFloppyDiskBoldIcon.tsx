import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneFloppyDiskBoldIcon = (
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
    <path d='M9.125 10.25v12.5q.039.585.625.625h12.5q.585-.039.625-.625v-9.57a.64.64 0 0 0-.195-.47l1.328-1.327q.742.742.742 1.797v9.57q-.039 1.055-.742 1.758-.704.703-1.758.742H9.75q-1.055-.039-1.758-.742-.703-.704-.742-1.758v-12.5q.039-1.055.742-1.758T9.75 7.75h9.61q1.015 0 1.757.742l2.89 2.89-1.327 1.329-2.89-2.89-.04-.04v3.906q-.078.86-.937.938h-7.5q-.86-.079-.938-.937V9.625H9.75q-.585.039-.625.625m3.125-.625v3.125h5.625V9.625zM13.5 19q.04-1.406 1.25-2.148 1.25-.705 2.5 0 1.21.741 1.25 2.148-.04 1.407-1.25 2.148-1.25.705-2.5 0-1.21-.741-1.25-2.148' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFloppyDiskBoldIcon);
export default ForwardRef;
