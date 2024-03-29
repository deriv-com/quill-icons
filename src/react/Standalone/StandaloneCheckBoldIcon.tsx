import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCheckBoldIcon = (
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
    <path d='M24.477 10.523c.351.391.351.977 0 1.329L14.164 22.164c-.39.39-.976.39-1.328 0l-5.313-5.312a.856.856 0 0 1 0-1.29.856.856 0 0 1 1.29 0l4.648 4.649 9.687-9.688a.92.92 0 0 1 1.29 0z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCheckBoldIcon);
export default ForwardRef;
