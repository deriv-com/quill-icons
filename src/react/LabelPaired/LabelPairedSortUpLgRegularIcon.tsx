import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortUpLgRegularIcon = (
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
      <path d='m6.266 8.117-4.688 4.414c-.078.078-.078.117-.078.196 0 .156.117.273.273.273h9.414c.157 0 .313-.117.313-.273a.22.22 0 0 0-.117-.196L6.695 8.117A.22.22 0 0 0 6.5 8q-.175 0-.234.117m-.86-.937c.274-.274.664-.43 1.094-.43.39 0 .781.156 1.055.43l4.687 4.453c.313.273.508.703.508 1.094 0 .859-.703 1.523-1.562 1.523H1.773c-.859 0-1.523-.664-1.523-1.523 0-.391.156-.82.469-1.094z' />
    </g>
    <defs>
      <clipPath id='294a457ccc73c622611ebdb46db6879e__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortUpLgRegularIcon);
export default ForwardRef;
