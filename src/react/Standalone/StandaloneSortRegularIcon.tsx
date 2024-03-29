import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneSortRegularIcon = (
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
    <path d='M11.078 13.531c-.078.078-.078.117-.078.196 0 .156.117.273.273.273h9.415c.156 0 .312-.117.312-.273a.22.22 0 0 0-.117-.196l-4.688-4.414A.22.22 0 0 0 16 9q-.175 0-.234.117zm-.86-.898 4.688-4.453c.274-.274.664-.43 1.094-.43.39 0 .781.156 1.055.43l4.687 4.453c.313.273.508.703.508 1.094 0 .859-.703 1.523-1.562 1.523h-9.415c-.859 0-1.523-.664-1.523-1.523 0-.391.156-.82.469-1.094m.86 6.875 4.688 4.414c.039.078.117.078.234.078.078 0 .156 0 .195-.078l4.688-4.414c.078-.078.117-.117.117-.195a.336.336 0 0 0-.312-.313h-9.415c-.156 0-.273.156-.273.313 0 .078 0 .117.078.195m-.86.898c-.312-.273-.468-.703-.468-1.093 0-.86.664-1.563 1.523-1.563h9.415c.859 0 1.562.703 1.562 1.563 0 .39-.195.82-.508 1.093l-4.687 4.453c-.274.274-.664.391-1.055.391-.43 0-.82-.117-1.094-.39z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSortRegularIcon);
export default ForwardRef;
