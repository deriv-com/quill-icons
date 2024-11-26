import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortDownLgRegularIcon = (
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
      <path d='M6.266 22.922c.039.078.117.078.234.078.078 0 .156 0 .195-.078l4.688-4.414c.078-.078.117-.117.117-.195a.336.336 0 0 0-.312-.313H1.773c-.156 0-.273.156-.273.313 0 .078 0 .117.078.195zm-.86.937L.72 19.406c-.313-.273-.469-.703-.469-1.093 0-.86.664-1.563 1.523-1.563h9.414c.86 0 1.563.703 1.563 1.563 0 .39-.195.82-.508 1.093L7.555 23.86c-.274.274-.664.391-1.055.391-.43 0-.82-.117-1.094-.39' />
    </g>
    <defs>
      <clipPath id='8d532256fd694f35da339bf4313268bf__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortDownLgRegularIcon);
export default ForwardRef;
