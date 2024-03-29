import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneScissorsRegularIcon = (
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
    <path d='M25.844 23.805c-.235.273-.625.273-.899.078l-5.937-5.078c-.274-.196-.274-.625-.078-.86a.63.63 0 0 1 .898-.078l5.938 5.04c.273.234.273.624.078.898m-8.633-8.086 7.734-6.563c.274-.195.664-.195.899.078.195.274.195.664-.078.899l-11.641 9.805a4.2 4.2 0 0 1 .625 2.187c0 2.422-1.992 4.375-4.375 4.375A4.37 4.37 0 0 1 6 22.125c0-2.383 1.953-4.375 4.375-4.375 1.133 0 2.188.469 2.969 1.21l2.89-2.46-2.89-2.422a4.3 4.3 0 0 1-2.969 1.172A4.37 4.37 0 0 1 6 10.875C6 8.492 7.953 6.5 10.375 6.5c2.383 0 4.375 1.992 4.375 4.414a4.2 4.2 0 0 1-.625 2.188zM10.375 14c1.094 0 2.11-.586 2.695-1.562.547-.938.547-2.149 0-3.126-.586-.937-1.601-1.562-2.695-1.562-1.133 0-2.148.625-2.734 1.563-.547.976-.547 2.187 0 3.124A3.16 3.16 0 0 0 10.375 14m0 5c-1.133 0-2.148.625-2.734 1.563-.547.976-.547 2.187 0 3.125a3.16 3.16 0 0 0 2.734 1.562c1.094 0 2.11-.586 2.695-1.562.547-.938.547-2.149 0-3.125C12.484 19.625 11.47 19 10.375 19' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneScissorsRegularIcon);
export default ForwardRef;
