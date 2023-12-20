import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 11 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m5.8 4.762 4.813 4.812c.183.2.183.401 0 .602-.2.182-.4.182-.601 0L5.937 6.129v10.308c-.018.274-.164.42-.437.438-.273-.018-.42-.164-.437-.437V6.127L.987 10.177c-.2.182-.4.182-.601 0-.183-.2-.183-.401 0-.602l4.812-4.812c.2-.183.401-.183.602 0'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpSmRegularIcon);
export default ForwardRef;
