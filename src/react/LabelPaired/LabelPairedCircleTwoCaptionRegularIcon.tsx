import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleTwoCaptionRegularIcon = (
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
        d='M6 4.25a5.403 5.403 0 0 0-2.625.703 5.393 5.393 0 0 0-1.922 1.922 5.25 5.25 0 0 0 0 5.25 5.394 5.394 0 0 0 1.922 1.922A5.403 5.403 0 0 0 6 14.75a5.403 5.403 0 0 0 2.625-.703 5.394 5.394 0 0 0 1.922-1.922 5.25 5.25 0 0 0 0-5.25 5.394 5.394 0 0 0-1.922-1.922A5.403 5.403 0 0 0 6 4.25M6 15.5a6.142 6.142 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.075 6.075 0 0 1 0 9.5c0-1.047.266-2.047.797-3A6.2 6.2 0 0 1 3 4.297 6.143 6.143 0 0 1 6 3.5a6.143 6.143 0 0 1 3 .797A6.2 6.2 0 0 1 11.203 6.5c.531.953.797 1.953.797 3a6.074 6.074 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.142 6.142 0 0 1-3 .797m-.914-7.922-.328.328c-.188.14-.367.133-.54-.023-.14-.188-.132-.367.024-.54l.328-.304c.39-.36.852-.539 1.383-.539.547.031 1 .227 1.36.586.359.375.546.836.562 1.383 0 .531-.187.992-.562 1.383L5.414 11.75h2.461c.234.016.36.14.375.375-.016.234-.14.36-.375.375H4.5a.432.432 0 0 1-.352-.234.373.373 0 0 1 .094-.399l2.531-2.531c.235-.25.352-.54.352-.867-.016-.344-.133-.625-.352-.844a1.193 1.193 0 0 0-1.687-.047'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleTwoCaptionRegularIcon);
export default ForwardRef;
