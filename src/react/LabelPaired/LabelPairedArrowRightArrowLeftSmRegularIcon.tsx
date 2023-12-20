import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowRightArrowLeftSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 13 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m12.488 7.55-2.625 2.626c-.2.182-.4.182-.601 0-.183-.2-.183-.401 0-.602l1.86-1.886H.811C.54 7.669.394 7.523.376 7.25c.018-.273.164-.42.438-.437H11.12l-1.86-1.887c-.182-.2-.182-.401 0-.602.201-.182.402-.182.602 0l2.625 2.625c.183.2.183.401 0 .602m-9.351 9.626L.512 14.55c-.183-.2-.183-.401 0-.602l2.625-2.625c.2-.182.4-.182.601 0 .183.2.183.401 0 .602l-1.86 1.886h10.31c.273.019.419.165.437.438-.018.273-.164.42-.437.438H1.877l1.86 1.886c.183.2.183.401 0 .602-.2.182-.4.182-.601 0'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightArrowLeftSmRegularIcon);
export default ForwardRef;
