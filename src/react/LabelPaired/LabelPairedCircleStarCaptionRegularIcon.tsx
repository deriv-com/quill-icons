import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleStarCaptionRegularIcon = (
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
        d='M6 4.25a5.403 5.403 0 0 0-2.625.703 5.393 5.393 0 0 0-1.922 1.922 5.25 5.25 0 0 0 0 5.25 5.394 5.394 0 0 0 1.922 1.922A5.403 5.403 0 0 0 6 14.75a5.403 5.403 0 0 0 2.625-.703 5.394 5.394 0 0 0 1.922-1.922 5.25 5.25 0 0 0 0-5.25 5.394 5.394 0 0 0-1.922-1.922A5.403 5.403 0 0 0 6 4.25M6 15.5a6.142 6.142 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.075 6.075 0 0 1 0 9.5c0-1.047.266-2.047.797-3A6.2 6.2 0 0 1 3 4.297 6.143 6.143 0 0 1 6 3.5a6.143 6.143 0 0 1 3 .797A6.2 6.2 0 0 1 11.203 6.5c.531.953.797 1.953.797 3a6.074 6.074 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.142 6.142 0 0 1-3 .797m.328-9.352.867 1.711 1.899.282c.14.03.242.117.304.257a.47.47 0 0 1-.093.399l-1.383 1.336.328 1.875a.392.392 0 0 1-.164.375.361.361 0 0 1-.375.023L6 11.516l-1.687.89a.402.402 0 0 1-.399-.023.392.392 0 0 1-.164-.375l.328-1.875-1.36-1.36a.343.343 0 0 1-.093-.375.364.364 0 0 1 .281-.257l1.899-.282.867-1.71A.332.332 0 0 1 6 5.936c.156 0 .266.07.328.211m-.937 2.227a.43.43 0 0 1-.282.21l-1.336.188.961.961a.378.378 0 0 1 .118.329l-.235 1.335 1.196-.632a.353.353 0 0 1 .351 0l1.219.632-.235-1.335a.412.412 0 0 1 .094-.329l.985-.96-1.336-.188c-.141-.031-.235-.102-.282-.211L6 7.156z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleStarCaptionRegularIcon);
export default ForwardRef;
