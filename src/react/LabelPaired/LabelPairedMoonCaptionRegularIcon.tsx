import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedMoonCaptionRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 9 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M4.477 5.07c-1.079.203-1.961.711-2.649 1.524C1.125 7.39.766 8.359.75 9.5c.031 1.281.469 2.344 1.313 3.188.843.843 1.906 1.28 3.187 1.312a4.636 4.636 0 0 0 2.203-.586c-1.281-.125-2.336-.64-3.164-1.547-.828-.89-1.258-1.992-1.289-3.305 0-.687.133-1.328.398-1.921.25-.61.61-1.133 1.079-1.57m1.546-.515c.032.187-.03.328-.187.422a4.306 4.306 0 0 0-1.524 1.476c-.375.625-.562 1.328-.562 2.11.031 1.171.43 2.14 1.195 2.906.782.781 1.75 1.187 2.907 1.219.25 0 .484-.024.703-.07.187-.016.32.054.398.21.078.156.055.305-.07.445-.969.954-2.18 1.446-3.633 1.477-.984-.016-1.867-.258-2.648-.727a4.912 4.912 0 0 1-1.875-1.875C.257 11.368.016 10.484 0 9.5c.016-.984.25-1.867.703-2.648a5.084 5.084 0 0 1 1.899-1.875c.78-.47 1.656-.711 2.625-.727.156 0 .304.008.445.023.187.016.305.11.351.282'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoonCaptionRegularIcon);
export default ForwardRef;
