import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowDownRightBoldIcon = (
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
    <path d='M21.313 22.75h-9.375c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h7.109l-9.024-9.023c-.39-.352-.39-.938 0-1.329.352-.351.938-.351 1.329 0l9.023 9.063v-7.148c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938v9.375c0 .546-.43.937-.937.937' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowDownRightBoldIcon);
export default ForwardRef;
