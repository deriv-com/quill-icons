import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneLightbulbFillIcon = (
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
    <path d='M19.625 21.5h-6.25a11.3 11.3 0 0 0-1.914-3.36v-.038q-.312-.39-.625-.82-1.172-1.68-1.211-3.907.079-2.93 2.031-4.844Q13.57 6.578 16.5 6.5q2.93.079 4.844 2.031 1.953 1.913 2.031 4.844-.04 2.227-1.21 3.906l-.626.86v.039a11.5 11.5 0 0 0-1.914 3.32m-3.125 5q-1.328-.04-2.227-.898-.858-.9-.898-2.227v-.625h6.25v.625q-.04 1.328-.898 2.227-.9.858-2.227.898m-3.125-13.125q.039-1.328.898-2.227.9-.858 2.227-.898.585-.039.625-.625Q17.086 9.04 16.5 9q-1.875.039-3.086 1.29-1.25 1.21-1.289 3.085.039.585.625.625.585-.039.625-.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneLightbulbFillIcon);
export default ForwardRef;
