import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightbulbCaptionFillIcon = (
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
      <path d='M6.375 12.5h-3.75c-.234-.727-.703-1.383-1.172-2.016l-.351-.492a4.1 4.1 0 0 1-.727-2.367A4.116 4.116 0 0 1 4.5 3.5c2.273 0 4.125 1.852 4.125 4.148 0 .868-.281 1.665-.75 2.344l-.352.492c-.468.633-.937 1.29-1.148 2.016m-1.875 3a1.85 1.85 0 0 1-1.875-1.875v-.375h3.75v.375A1.866 1.866 0 0 1 4.5 15.5M2.625 7.625c0-1.031.82-1.875 1.875-1.875a.385.385 0 0 0 .375-.375A.4.4 0 0 0 4.5 5a2.636 2.636 0 0 0-2.625 2.625c0 .21.164.375.375.375a.385.385 0 0 0 .375-.375' />
    </g>
    <defs>
      <clipPath id='f0ca529c548e3849df2e0c520cef9f5f__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightbulbCaptionFillIcon);
export default ForwardRef;
