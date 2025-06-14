import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileExcelSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 3.75h4.375v3.5c0 .492.383.875.875.875h3.5V16c0 .984-.793 1.75-1.75 1.75H2c-.984 0-1.75-.766-1.75-1.75V5.5c0-.957.766-1.75 1.75-1.75m5.25 0 3.5 3.5h-3.5zm-2.762 6.863a.63.63 0 0 0-.902-.164.63.63 0 0 0-.164.903l1.258 1.804-1.258 1.832c-.219.274-.137.684.164.903.3.218.71.136.902-.164L5.5 14.305l.984 1.422c.22.3.602.382.903.164.3-.22.383-.602.164-.903l-1.258-1.832 1.258-1.804a.63.63 0 0 0-.164-.903.63.63 0 0 0-.903.164L5.5 12.035z' />
    </g>
    <defs>
      <clipPath id='88b6336a41ec5123ca326c49aea740b4__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileExcelSmFillIcon);
export default ForwardRef;
