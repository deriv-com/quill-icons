import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneOneRegularIcon = (
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
    <path d='M16.625 8.375V24h3.75q.585.039.625.625-.039.585-.625.625h-8.75q-.585-.039-.625-.625.039-.585.625-.625h3.75V9.547l-2.773 1.836q-.508.273-.86-.156-.273-.508.156-.86l3.75-2.5a.67.67 0 0 1 .665-.039q.312.195.312.547' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneOneRegularIcon);
export default ForwardRef;
