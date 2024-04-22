import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenLineXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m21.234 6.938 1.828 1.828a3.027 3.027 0 0 1 0 4.265l-2.25 2.25-6.093-6.094 2.25-2.25a3.027 3.027 0 0 1 4.265 0M2.72 21.188 13.64 10.266l6.093 6.093L8.812 27.281a4.1 4.1 0 0 1-1.734 1.032l-5.672 1.64a.96.96 0 0 1-1.078-.281.96.96 0 0 1-.281-1.078l1.64-5.672a4.1 4.1 0 0 1 1.032-1.735m8.906 6.562h14.25c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 25.875 30h-14.25c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125' />
    </g>
    <defs>
      <clipPath id='862a462dc66d846e8cd606d1b97c91d9__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenLineXlFillIcon);
export default ForwardRef;
