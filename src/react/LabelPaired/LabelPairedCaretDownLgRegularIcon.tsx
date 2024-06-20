import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCaretDownLgRegularIcon = (
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
      <path d='m6.695 19.172 4.688-4.414c.078-.078.078-.117.078-.195 0-.157-.117-.313-.274-.313H1.774c-.156 0-.273.156-.273.313 0 .078 0 .117.078.195l4.688 4.414c.039.078.117.078.234.078.078 0 .156 0 .195-.078m.86.937c-.274.274-.664.391-1.055.391-.43 0-.82-.117-1.094-.39L.72 15.655c-.313-.273-.469-.703-.469-1.094C.25 13.704.914 13 1.773 13l9.414.04c.86 0 1.563.663 1.563 1.523 0 .39-.195.82-.508 1.093z' />
    </g>
    <defs>
      <clipPath id='7029241af1d8246f8bdc6063260c5fa6__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretDownLgRegularIcon);
export default ForwardRef;
