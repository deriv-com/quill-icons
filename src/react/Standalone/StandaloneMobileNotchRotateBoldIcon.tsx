import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneMobileNotchRotateBoldIcon = (
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
    <path d='M5.375 9.625A3.11 3.11 0 0 1 8.5 6.5H16a3.134 3.134 0 0 1 3.125 3.125v4.844c-.195.078-.39.195-.586.273-.312-.39-.781-.625-1.289-.703V9.625c0-.664-.586-1.25-1.25-1.25h-1.25V9a.64.64 0 0 1-.625.625h-3.75A.617.617 0 0 1 9.75 9v-.625H8.5c-.703 0-1.25.586-1.25 1.25v13.75c0 .703.547 1.25 1.25 1.25h7.344c.39.625.898 1.172 1.445 1.602-.39.195-.86.273-1.289.273H8.5c-1.758 0-3.125-1.367-3.125-3.125zM16 16.188c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938v.507a5.53 5.53 0 0 1 3.75-1.445c2.305 0 4.258 1.406 5.156 3.398a.935.935 0 0 1-.508 1.211c-.468.235-1.015 0-1.21-.468-.586-1.328-1.915-2.266-3.438-2.266-1.133 0-2.11.508-2.812 1.25h1.25a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937h-3.125c-.547 0-.938-.39-.938-.937zm.469 6.953c-.235-.47 0-1.016.468-1.25.47-.196 1.016.039 1.25.507.547 1.329 1.875 2.227 3.438 2.227 1.094 0 2.11-.469 2.773-1.25h-1.21c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h3.125a.95.95 0 0 1 .937.938v3.125c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937v-.47a5.65 5.65 0 0 1-3.75 1.407c-2.344 0-4.297-1.367-5.156-3.36' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneMobileNotchRotateBoldIcon);
export default ForwardRef;
