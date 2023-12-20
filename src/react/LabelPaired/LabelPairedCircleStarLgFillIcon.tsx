import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleStarLgFillIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M0 15.5c.026-1.823.469-3.49 1.328-5C2.214 8.99 3.438 7.766 5 6.828 6.589 5.943 8.255 5.5 10 5.5s3.412.443 5 1.328c1.563.938 2.787 2.162 3.672 3.672.86 1.51 1.302 3.177 1.328 5-.026 1.823-.469 3.49-1.328 5-.886 1.51-2.11 2.734-3.672 3.672-1.588.885-3.255 1.328-5 1.328s-3.411-.443-5-1.328c-1.562-.938-2.786-2.162-3.672-3.672-.86-1.51-1.302-3.177-1.328-5m10-5.937a.553.553 0 0 0-.547.351l-1.406 2.852-3.164.468c-.26.053-.43.196-.508.43-.078.234-.026.443.156.625l2.266 2.266-.547 3.125a.653.653 0 0 0 .273.625.67.67 0 0 0 .665.039L10 18.859l2.852 1.485a.603.603 0 0 0 .625-.04.653.653 0 0 0 .273-.624l-.547-3.125 2.305-2.227a.782.782 0 0 0 .156-.664.702.702 0 0 0-.508-.43l-3.164-.468-1.445-2.852A.553.553 0 0 0 10 9.563'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleStarLgFillIcon);
export default ForwardRef;
