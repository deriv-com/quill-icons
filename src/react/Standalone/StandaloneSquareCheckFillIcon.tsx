import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneSquareCheckFillIcon = (
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
    <path d='M9.75 7.75h12.5c1.367 0 2.5 1.133 2.5 2.5v12.5c0 1.406-1.133 2.5-2.5 2.5H9.75a2.47 2.47 0 0 1-2.5-2.5v-12.5c0-1.367 1.094-2.5 2.5-2.5m10.664 6.914h-.039c.39-.351.39-.937 0-1.328a.92.92 0 0 0-1.29 0L14.75 17.71l-1.836-1.836c-.39-.39-.976-.39-1.328 0a.856.856 0 0 0 0 1.29l2.5 2.5c.351.39.937.39 1.328 0z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSquareCheckFillIcon);
export default ForwardRef;
