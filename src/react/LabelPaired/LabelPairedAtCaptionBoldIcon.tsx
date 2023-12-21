import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedAtCaptionBoldIcon = (
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
        d='M6 4.625c-1.375.031-2.523.508-3.445 1.43-.922.922-1.399 2.07-1.43 3.445.031 1.375.508 2.523 1.43 3.445.922.922 2.07 1.399 3.445 1.43.344.031.531.219.563.563-.032.343-.22.53-.563.562-1.125-.016-2.133-.29-3.023-.82A5.944 5.944 0 0 1 .82 12.523C.29 11.633.016 10.625 0 9.5c.016-1.125.29-2.133.82-3.023A5.944 5.944 0 0 1 2.977 4.32c.89-.53 1.898-.804 3.023-.82 1.125.016 2.133.29 3.023.82a5.945 5.945 0 0 1 2.157 2.157c.53.89.804 1.898.82 3.023v.656c-.016.61-.227 1.117-.633 1.524-.406.406-.914.617-1.523.633-.766-.032-1.352-.336-1.758-.915-.547.579-1.242.883-2.086.915-.797-.016-1.46-.29-1.992-.82-.531-.532-.805-1.196-.82-1.993.015-.797.289-1.46.82-1.992.531-.531 1.195-.805 1.992-.82.688.015 1.281.226 1.781.632a.598.598 0 0 1 .469-.258c.344.032.531.22.563.563v2.531c0 .297.101.54.304.727.188.203.43.305.727.305a.944.944 0 0 0 .726-.305.944.944 0 0 0 .305-.727V9.5c-.031-1.375-.508-2.523-1.43-3.445-.922-.922-2.07-1.399-3.445-1.43M7.688 9.5c-.016-.64-.297-1.125-.844-1.453-.563-.313-1.125-.313-1.688 0-.547.328-.828.812-.843 1.453.015.64.296 1.125.843 1.453.563.313 1.125.313 1.688 0 .547-.328.828-.812.843-1.453'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAtCaptionBoldIcon);
export default ForwardRef;