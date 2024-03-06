import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWindowsSmIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.375 6.32v4.157h5.031V5.609zm0 8.86v-4.102h5.031v4.813zm5.578.765v-4.867h6.672v5.797zm0-10.39 6.672-.93v5.852H5.953z' />
    </g>
    <defs>
      <clipPath id='91e7367a2458bf1e334612f110a71731__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWindowsSmIcon);
export default ForwardRef;
