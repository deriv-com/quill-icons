import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleBookmarkLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10 25.5c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5M6.25 12.375v7.5q0 .41.352.586c.195.117.468.078.664-.078L10 18.195l2.734 2.188c.157.156.43.156.625.078.235-.117.391-.313.391-.586v-7.5c0-1.016-.86-1.875-1.875-1.875h-3.75c-1.055 0-1.875.86-1.875 1.875' />
    </g>
    <defs>
      <clipPath id='7187b6e92e8c6a224196d35c4d394e6f__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleBookmarkLgFillIcon);
export default ForwardRef;
