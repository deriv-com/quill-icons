import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneForwardStepBoldIcon = (
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
    <path d='M19.125 9.938c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938v13.124c0 .547-.43.938-.937.938-.547 0-.938-.39-.938-.937V18.96l-6.914 4.844c-.195.156-.43.195-.664.195a1.15 1.15 0 0 1-1.172-1.172V10.211c0-.664.508-1.211 1.172-1.211.234 0 .469.078.664.234l6.914 4.844zm0 6.757v-.351l-6.875-4.805V21.5z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneForwardStepBoldIcon);
export default ForwardRef;
