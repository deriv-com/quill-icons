import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellSlashLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m1.484 5.734 5.782 4.493C8.164 8.859 9.57 7.844 11.25 7.53V6.75c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25v.781c2.852.547 5 3.086 5 6.094v.742c0 1.836.664 3.633 1.875 5l.273.313c.352.39.43.898.235 1.367 0 0-.04 0-.04.039l3.516 2.773c.43.313.508.899.157 1.29-.313.43-.899.507-1.29.156L.353 7.18c-.43-.313-.508-.899-.157-1.29.313-.43.899-.507 1.29-.156M15.86 21.75H5c-.508 0-.977-.273-1.172-.703a1.26 1.26 0 0 1 .235-1.367l.273-.313a7.6 7.6 0 0 0 1.914-5v-.156zm-1.601 3.047c-.469.469-1.094.703-1.758.703s-1.328-.234-1.797-.703S10 23.664 10 23h5c0 .664-.273 1.328-.742 1.797' />
    </g>
    <defs>
      <clipPath id='c9e1de9070d46e075f0d08c9b12407a6__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellSlashLgFillIcon);
export default ForwardRef;
