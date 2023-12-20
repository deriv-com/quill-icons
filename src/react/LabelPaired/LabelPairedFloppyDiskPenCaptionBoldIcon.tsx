import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFloppyDiskPenCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.375 5.75v7.5c.016.234.14.36.375.375h4.852L6.32 14.75H1.75a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 .25 13.25v-7.5c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445h5.766c.406 0 .757.148 1.054.445l1.735 1.735-.797.797-1.735-1.735-.023-.023v2.343c-.031.344-.219.532-.562.563h-4.5c-.344-.031-.532-.219-.563-.562V5.374H1.75c-.234.016-.36.14-.375.375m8.93.68c.297.297.445.656.445 1.078V9.03l-1.125 1.125V7.508c0-.11-.04-.203-.117-.281zM3.25 5.375V7.25h3.375V5.375zM4 11c.016-.562.266-.992.75-1.29.5-.28 1-.28 1.5 0 .484.298.734.727.75 1.29-.016.563-.266.992-.75 1.29-.5.28-1 .28-1.5 0-.484-.298-.734-.727-.75-1.29m9.14-1.969.329.328c.187.204.281.422.281.657 0 .25-.094.476-.281.68l-.68.679-1.664-1.664.68-.68c.203-.187.422-.281.656-.281.25 0 .476.094.68.281m-5.578 4.242 3.024-3.023 1.664 1.664-3.023 3.024a.882.882 0 0 1-.352.21l-1.406.352a.408.408 0 0 1-.352-.117A.408.408 0 0 1 7 15.03l.352-1.406a.883.883 0 0 1 .21-.352'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskPenCaptionBoldIcon);
export default ForwardRef;
