import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedWifiXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 30 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.875 14.719c-.562.406-1.094.375-1.594-.094-.406-.562-.375-1.094.094-1.594a22.077 22.077 0 0 1 6.656-4.078C9.531 7.984 12.188 7.5 15 7.5c2.813 0 5.469.484 7.969 1.453a22.078 22.078 0 0 1 6.656 4.078c.469.5.5 1.031.094 1.594-.5.469-1.032.5-1.594.094a19.578 19.578 0 0 0-6-3.656C19.906 10.187 17.531 9.75 15 9.75c-2.531 0-4.906.438-7.125 1.313a19.578 19.578 0 0 0-6 3.656M15 18c-3.094.063-5.719 1.078-7.875 3.047-.531.437-1.062.422-1.594-.047-.406-.562-.375-1.094.094-1.594a13.467 13.467 0 0 1 4.266-2.672c1.593-.656 3.297-.984 5.109-.984 1.813 0 3.516.328 5.11.984a13.467 13.467 0 0 1 4.265 2.672c.469.5.5 1.032.094 1.594-.532.469-1.063.484-1.594.047C20.719 19.078 18.094 18.062 15 18m2.625 7.875c-.031 1-.469 1.75-1.312 2.25-.875.5-1.75.5-2.625 0-.844-.5-1.282-1.25-1.313-2.25.031-1 .469-1.75 1.313-2.25.874-.5 1.75-.5 2.624 0 .844.5 1.282 1.25 1.313 2.25'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWifiXlBoldIcon);
export default ForwardRef;
