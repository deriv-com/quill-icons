import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.5 5h12c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-12A1.5 1.5 0 0 0 1 7.5v9c0 .844.656 1.5 1.5 1.5h11a1.5 1.5 0 0 0 1.5-1.5v-7c0-.812-.687-1.5-1.5-1.5h-10a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h10C14.875 7 16 8.125 16 9.5v7c0 1.406-1.125 2.5-2.5 2.5h-11A2.47 2.47 0 0 1 0 16.5v-9C0 6.125 1.094 5 2.5 5m9.5 8.75a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75' />
    </g>
    <defs>
      <clipPath id='af20d8aa034cfc8ef144ce7d2a1e7795__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletMdRegularIcon);
export default ForwardRef;
