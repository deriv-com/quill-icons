import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownRightMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.5 17h-7a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h5.781L1.125 7.875a.53.53 0 0 1 0-.719.53.53 0 0 1 .719 0L10 15.313V9.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5v7c0 .281-.25.5-.5.5' />
    </g>
    <defs>
      <clipPath id='8f9c2308a6ade7c3c72800687dfdb3dc__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownRightMdRegularIcon);
export default ForwardRef;
