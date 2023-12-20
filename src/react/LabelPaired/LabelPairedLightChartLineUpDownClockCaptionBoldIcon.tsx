import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedLightChartLineUpDownClockCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 15 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M0 4.813c0-.305.234-.563.563-.563a.57.57 0 0 1 .562.563v8.25c0 .328.234.562.563.562H7.78c.14.422.375.797.657 1.125h-6.75A1.68 1.68 0 0 1 0 13.063zm2.602 4.312L4.477 7.25c.21-.234.562-.234.796 0L6.75 8.727c.844-.868 1.71-1.735 2.578-2.602h-.515a.542.542 0 0 1-.563-.562c0-.305.234-.563.563-.563h1.874c.141 0 .282.07.399.164a.665.665 0 0 1 .164.399v1.875a.555.555 0 0 1-.562.562.542.542 0 0 1-.563-.562v-.516L7.148 9.898c-.234.235-.585.235-.796 0L4.875 8.422 3.398 9.898c-.234.235-.586.235-.796 0a.513.513 0 0 1 0-.773m5.648 3c0-1.852 1.5-3.375 3.375-3.375A3.391 3.391 0 0 1 15 12.125a3.376 3.376 0 0 1-3.375 3.375 3.361 3.361 0 0 1-3.375-3.375m3-1.5v1.5c0 .21.164.375.375.375h1.125a.385.385 0 0 0 .375-.375.403.403 0 0 0-.375-.375H12v-1.125a.403.403 0 0 0-.375-.375.385.385 0 0 0-.375.375'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightChartLineUpDownClockCaptionBoldIcon);
export default ForwardRef;
