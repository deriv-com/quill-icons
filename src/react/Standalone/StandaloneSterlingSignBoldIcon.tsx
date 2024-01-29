import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneSterlingSignBoldIcon = (
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
    <path d='M13.5 12.71v2.54h5.313q.858.078.937.938-.078.858-.937.937H13.5v2.46a5.75 5.75 0 0 1-.742 2.852l-.508.938h9.063q.858.078.937.938-.079.858-.937.937H10.688q-.509 0-.82-.469-.236-.43 0-.898l1.25-2.344q.507-.899.507-1.953v-2.461h-.937q-.86-.078-.938-.937.078-.86.938-.938h.937v-2.54q.04-2.108 1.445-3.515 1.407-1.406 3.516-1.445.82 0 1.602.273l3.125 1.016q.78.351.585 1.211-.352.78-1.21.586L17.563 9.78a3 3 0 0 0-.977-.156q-1.29.04-2.188.898-.858.9-.898 2.188' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSterlingSignBoldIcon);
export default ForwardRef;
