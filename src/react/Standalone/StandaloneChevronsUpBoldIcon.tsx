import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneChevronsUpBoldIcon = (
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
    <path d='m16.664 8.336 7.461 7.539c.39.352.39.938 0 1.29a.856.856 0 0 1-1.29 0l-6.874-6.837-6.836 6.836a.856.856 0 0 1-1.29 0c-.39-.352-.39-.937 0-1.328l7.5-7.5c.352-.352.938-.352 1.33 0m7.5 15-.039.039c.39.352.39.938 0 1.29a.856.856 0 0 1-1.29 0l-6.874-6.837-6.836 6.836a.856.856 0 0 1-1.29 0c-.39-.352-.39-.937 0-1.328l7.5-7.5c.352-.352.938-.352 1.33 0z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChevronsUpBoldIcon);
export default ForwardRef;
