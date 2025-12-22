import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileNotchCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 4.625V5c0 .21-.187.375-.375.375h-2.25A.37.37 0 0 1 3 5v-.375h-.75a.755.755 0 0 0-.75.75v8.25c0 .422.328.75.75.75h4.5c.398 0 .75-.328.75-.75v-8.25a.77.77 0 0 0-.75-.75zm-5.625.75c0-1.031.82-1.875 1.875-1.875h4.5a1.88 1.88 0 0 1 1.875 1.875v8.25A1.866 1.866 0 0 1 6.75 15.5h-4.5a1.85 1.85 0 0 1-1.875-1.875z' />
    </g>
    <defs>
      <clipPath id='eefd9e9f9f3dfbd59caa8aa40648fb58__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchCaptionBoldIcon);
export default ForwardRef;
