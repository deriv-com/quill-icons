import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleUserCaptionBoldIcon = (
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
        d='M9.54 12.875c.858-.906 1.304-2.031 1.335-3.375-.031-1.375-.508-2.523-1.43-3.445-.922-.922-2.07-1.399-3.445-1.43-1.375.031-2.523.508-3.445 1.43-.922.922-1.399 2.07-1.43 3.445.031 1.344.484 2.469 1.36 3.375a2.883 2.883 0 0 1 1.078-1.36c.484-.328 1.046-.5 1.687-.515h1.5c.64.016 1.203.188 1.688.516.5.343.867.797 1.101 1.359m-.962.75h.024a2.03 2.03 0 0 0-.657-1.078c-.328-.266-.726-.406-1.195-.422h-1.5c-.469.016-.867.156-1.195.422-.328.281-.54.64-.633 1.078.75.484 1.61.734 2.578.75.969-.016 1.828-.266 2.578-.75M6 15.5a6.142 6.142 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.075 6.075 0 0 1 0 9.5c0-1.047.266-2.047.797-3A6.2 6.2 0 0 1 3 4.297 6.143 6.143 0 0 1 6 3.5a6.143 6.143 0 0 1 3 .797A6.2 6.2 0 0 1 11.203 6.5c.531.953.797 1.953.797 3a6.074 6.074 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.142 6.142 0 0 1-3 .797m0-6.375a.965.965 0 0 0 .82-.469.996.996 0 0 0 0-.937A.965.965 0 0 0 6 7.25a.965.965 0 0 0-.82.469.996.996 0 0 0 0 .937c.187.297.46.453.82.469m-2.062-.937c.03-.782.374-1.376 1.03-1.782.688-.375 1.376-.375 2.063 0 .657.407 1 1 1.032 1.782-.032.78-.376 1.374-1.032 1.78-.687.376-1.375.376-2.062 0-.657-.405-1-1-1.032-1.78'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleUserCaptionBoldIcon);
export default ForwardRef;
