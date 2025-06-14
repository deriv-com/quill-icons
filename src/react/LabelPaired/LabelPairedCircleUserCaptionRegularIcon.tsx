import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleUserCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.656 13.273A5.26 5.26 0 0 0 11.25 9.5c0-2.883-2.367-5.25-5.25-5.25A5.256 5.256 0 0 0 .75 9.5c0 1.477.61 2.813 1.57 3.773A3.044 3.044 0 0 1 5.25 11h1.5c1.383 0 2.578.984 2.906 2.273m-.68.54v.023c-.093-1.172-1.054-2.086-2.226-2.086h-1.5A2.253 2.253 0 0 0 3 13.836c.844.586 1.875.914 3 .914 1.102 0 2.133-.328 2.977-.937M6 15.5a5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3m0-6c.398 0 .75-.21.96-.562.212-.329.212-.774 0-1.126-.21-.328-.562-.562-.96-.562-.422 0-.773.234-.984.563-.211.351-.211.796 0 1.125.21.351.562.562.984.562M4.125 8.375c0-.656.352-1.266.938-1.617a1.91 1.91 0 0 1 1.875 0c.562.351.937.96.937 1.617 0 .68-.375 1.29-.937 1.64a1.91 1.91 0 0 1-1.875 0 1.9 1.9 0 0 1-.938-1.64' />
    </g>
    <defs>
      <clipPath id='c1455bc708abfecc8035b32ff701cbef__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleUserCaptionRegularIcon);
export default ForwardRef;
