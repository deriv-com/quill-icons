import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPercentCaptionRegularIcon = (
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
        d='M1.5 5.75a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54c0 .219.07.398.21.54.142.14.321.21.54.21a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21M1.5 8C.938 7.984.508 7.734.21 7.25c-.28-.5-.28-1 0-1.5.298-.484.728-.734 1.29-.75.563.016.992.266 1.29.75.28.5.28 1 0 1.5-.298.484-.727.734-1.29.75m6 3.75a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54c0 .219.07.398.21.54.142.14.321.21.54.21a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21m0 2.25c-.562-.016-.992-.266-1.29-.75-.28-.5-.28-1 0-1.5.298-.484.728-.734 1.29-.75.563.016.992.266 1.29.75.28.5.28 1 0 1.5-.298.484-.727.734-1.29.75m1.383-8.367-8.25 8.25c-.172.156-.344.156-.516 0-.156-.172-.156-.344 0-.516l8.25-8.25c.172-.156.344-.156.516 0 .156.172.156.344 0 .516'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPercentCaptionRegularIcon);
export default ForwardRef;
