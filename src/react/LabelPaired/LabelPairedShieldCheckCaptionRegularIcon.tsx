import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedShieldCheckCaptionRegularIcon = (
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
        d='M5.719 4.367 1.57 6.125c-.28.14-.43.36-.445.656 0 .75.125 1.625.375 2.625.266.985.727 1.946 1.383 2.883.672.938 1.61 1.711 2.812 2.32a.696.696 0 0 0 .61 0c1.203-.593 2.133-1.367 2.789-2.32.672-.937 1.14-1.898 1.406-2.883.25-1 .375-1.875.375-2.625-.016-.297-.164-.515-.445-.656L6.305 4.367a.761.761 0 0 0-.586 0m.867-.68 4.148 1.758c.266.11.477.282.633.516.172.234.258.508.258.82.016.797-.117 1.735-.398 2.813-.282 1.078-.79 2.125-1.524 3.14-.719 1.032-1.75 1.883-3.094 2.555a1.39 1.39 0 0 1-1.218 0c-1.344-.672-2.375-1.523-3.094-2.555-.735-1.015-1.242-2.062-1.524-3.14C.493 8.516.36 7.578.375 6.78c0-.312.086-.586.258-.82a1.37 1.37 0 0 1 .633-.516l4.148-1.758c.39-.156.781-.156 1.172 0M6 7.814c-.344.03-.531.218-.562.562.03.344.218.531.562.563.344-.032.531-.22.563-.563-.032-.344-.22-.531-.563-.562m1.313.562c0 .297-.086.563-.258.797a1.408 1.408 0 0 1-.68.469v1.734c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375V9.641a1.408 1.408 0 0 1-.68-.47 1.314 1.314 0 0 1-.258-.796c.016-.375.141-.687.375-.937.25-.235.563-.36.938-.375.375.015.688.14.938.375.234.25.359.562.375.937'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShieldCheckCaptionRegularIcon);
export default ForwardRef;