import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.578 12.531c-.078.078-.078.117-.078.196 0 .156.117.273.273.273h9.414c.157 0 .313-.117.313-.273a.22.22 0 0 0-.117-.196L6.695 8.117A.22.22 0 0 0 6.5 8q-.175 0-.234.117zm-.86-.898L5.407 7.18c.274-.274.664-.43 1.094-.43.39 0 .781.156 1.055.43l4.687 4.453c.313.273.508.703.508 1.094 0 .859-.703 1.523-1.562 1.523H1.773c-.859 0-1.523-.664-1.523-1.523 0-.391.156-.82.469-1.094m.86 6.875 4.688 4.414c.039.078.117.078.234.078.078 0 .156 0 .195-.078l4.688-4.414c.078-.078.117-.117.117-.195a.336.336 0 0 0-.312-.313H1.773c-.156 0-.273.156-.273.313 0 .078 0 .117.078.195m-.86.898c-.312-.273-.468-.703-.468-1.093 0-.86.664-1.563 1.523-1.563h9.414c.86 0 1.563.703 1.563 1.563 0 .39-.195.82-.508 1.093L7.555 23.86c-.274.274-.664.391-1.055.391-.43 0-.82-.117-1.094-.39z' />
    </g>
    <defs>
      <clipPath id='b5035476cb41a759c1cb2e1701aa45d2__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortLgRegularIcon);
export default ForwardRef;
