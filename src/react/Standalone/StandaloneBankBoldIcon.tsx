import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneBankBoldIcon = (
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
    <path d='m16.469 6.617 8.828 4.883q.664.39.703 1.172 0 .547-.39.937-.391.39-.938.391H7.328q-.546 0-.937-.39Q6 13.218 6 12.671q.039-.782.703-1.172l8.828-4.883a1 1 0 0 1 .938 0m-1.563 5.508a1.24 1.24 0 0 1-.156-.625q0-.547.352-.898.35-.352.898-.352.547 0 .898.352.352.35.352.898 0 .351-.156.625h5.468L16 8.492l-6.562 3.633zM8.5 15.25h1.875v6.25h2.5v-6.25h1.875v6.25h2.5v-6.25h1.875v6.25h2.5v-6.25H23.5v6.25h.313q.858.078.937.938-.079.858-.937.937H8.5q-.86-.079-.937-.937.078-.86.937-.938zm-1.25 9.375h17.813q.858.078.937.938-.079.858-.937.937H7.25q-.86-.079-.937-.937.078-.86.937-.938' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBankBoldIcon);
export default ForwardRef;
