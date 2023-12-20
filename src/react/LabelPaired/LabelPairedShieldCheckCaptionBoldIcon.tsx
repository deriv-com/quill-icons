import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedShieldCheckCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 12 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.71 6.477c-.14.078-.21.18-.21.304 0 .735.125 1.578.375 2.532.25.937.688 1.859 1.313 2.765.64.89 1.53 1.625 2.671 2.203a.433.433 0 0 0 .282 0c1.14-.578 2.03-1.312 2.672-2.203.624-.906 1.062-1.828 1.312-2.765.25-.954.375-1.797.375-2.532 0-.125-.07-.226-.21-.304L6 4.648zm9.024-1.032c.266.11.477.282.633.516.172.234.258.508.258.82.016.797-.117 1.735-.398 2.813-.282 1.078-.79 2.125-1.524 3.14-.719 1.032-1.75 1.883-3.094 2.555a1.39 1.39 0 0 1-1.218 0c-1.344-.672-2.375-1.523-3.094-2.555-.735-1.015-1.242-2.062-1.524-3.14C.493 8.516.36 7.578.375 6.78c0-.312.086-.586.258-.82a1.37 1.37 0 0 1 .633-.516l4.43-1.875A.672.672 0 0 1 6 3.5c.11 0 .21.023.305.07zm-3.421 2.93c-.032.547-.282.945-.75 1.195v1.617c-.032.344-.22.532-.563.563-.344-.031-.531-.219-.562-.562V9.57c-.47-.25-.72-.648-.75-1.195.015-.375.14-.687.375-.937.25-.235.562-.36.937-.375.375.015.688.14.938.375.234.25.359.562.375.937'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShieldCheckCaptionBoldIcon);
export default ForwardRef;
