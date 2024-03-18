import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCaretUpRegularIcon = (
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
    <path d='m15.766 12.867-4.688 4.414c-.078.078-.078.117-.078.196 0 .156.117.273.273.273h9.415c.156 0 .312-.117.312-.273a.22.22 0 0 0-.117-.196l-4.688-4.414A.22.22 0 0 0 16 12.75q-.175 0-.234.117m-.86-.937c.274-.274.664-.43 1.094-.43.39 0 .781.156 1.055.43l4.687 4.453c.313.273.508.703.508 1.094 0 .859-.703 1.523-1.562 1.523h-9.415c-.859 0-1.523-.664-1.523-1.523 0-.391.156-.82.469-1.094z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCaretUpRegularIcon);
export default ForwardRef;
