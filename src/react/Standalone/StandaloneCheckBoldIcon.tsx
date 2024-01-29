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
    <path d='M24.477 10.523q.546.664 0 1.329L14.164 22.164q-.664.547-1.328 0l-5.313-5.312q-.546-.665 0-1.329.665-.546 1.329 0l4.648 4.649 9.648-9.649q.665-.546 1.329 0' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCheckBoldIcon);
export default ForwardRef;
