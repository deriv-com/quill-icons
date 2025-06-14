import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightbulbCaptionBoldIcon = (
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
      <path d='M6.96 9.336a2.97 2.97 0 0 0 .54-1.711c0-1.64-1.36-3-3-3-1.664 0-3 1.36-3 3 0 .656.188 1.242.516 1.71.093.142.187.282.304.423.305.422.657.914.938 1.406.234.445.375.914.422 1.336H2.555c-.07-.281-.14-.54-.282-.797a10 10 0 0 0-.82-1.219l-.351-.492a4.1 4.1 0 0 1-.727-2.367A4.116 4.116 0 0 1 4.5 3.5a4.13 4.13 0 0 1 4.125 4.125 4.1 4.1 0 0 1-.75 2.367l-.352.492a10 10 0 0 0-.82 1.22c-.14.257-.21.515-.281.796H5.297c.07-.422.187-.89.422-1.336.281-.492.633-.984.937-1.406.117-.14.211-.281.305-.422M4.5 6.5c-.633 0-1.125.516-1.125 1.125 0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375c0-1.031.82-1.875 1.875-1.875.188 0 .375.188.375.375 0 .21-.187.375-.375.375m0 9a1.85 1.85 0 0 1-1.875-1.875v-.375h3.75v.375A1.866 1.866 0 0 1 4.5 15.5' />
    </g>
    <defs>
      <clipPath id='52c91289fe2e6775a8e965f3c415e997__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightbulbCaptionBoldIcon);
export default ForwardRef;
