import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneXmarkBoldIcon = (
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
    <path d='m21.977 11.852-4.688 4.687 4.648 4.648c.391.352.391.938 0 1.29a.856.856 0 0 1-1.289 0l-4.687-4.649-4.648 4.649a.856.856 0 0 1-1.29 0c-.39-.352-.39-.938 0-1.329l4.649-4.648-4.649-4.648c-.39-.352-.39-.938 0-1.329.352-.351.938-.351 1.329 0L16 15.211l4.648-4.648c.352-.391.938-.391 1.329 0a.92.92 0 0 1 0 1.289' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneXmarkBoldIcon);
export default ForwardRef;
