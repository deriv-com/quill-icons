import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCircleStarXlFillIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M0 18c.031-2.188.563-4.188 1.594-6C2.656 10.187 4.125 8.719 6 7.594 7.906 6.53 9.906 6 12 6s4.094.531 6 1.594c1.875 1.125 3.344 2.593 4.406 4.406 1.032 1.813 1.563 3.813 1.594 6-.031 2.188-.563 4.188-1.594 6-1.062 1.813-2.531 3.281-4.406 4.406C16.094 29.47 14.094 30 12 30s-4.094-.531-6-1.594C4.125 27.281 2.656 25.813 1.594 24 .562 22.187.03 20.187 0 18Zm12-7.125c-.313 0-.531.14-.656.422l-1.688 3.422-3.797.562c-.312.063-.515.235-.609.516-.094.281-.031.531.188.75l2.718 2.719-.656 3.75a.784.784 0 0 0 .328.75c.25.156.516.172.797.047L12 22.03l3.422 1.782c.25.125.5.109.75-.047a.784.784 0 0 0 .328-.75l-.656-3.75 2.765-2.672c.188-.25.25-.516.188-.797-.125-.281-.328-.453-.61-.516l-3.796-.562-1.735-3.422c-.125-.281-.344-.422-.656-.422Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleStarXlFillIcon);
export default ForwardRef;
