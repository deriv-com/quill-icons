import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPresentationScreenLgBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 23 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.188 5.5h20.625c.572.052.885.365.937.938-.052.572-.365.885-.937.937H1.188C.615 7.323.302 7.01.25 6.438c.052-.573.365-.886.938-.938M1.5 8.625h1.875v8.438c.026.182.13.286.313.312h15.625c.182-.026.286-.13.312-.312V8.625H21.5v8.438c-.026.625-.234 1.145-.625 1.562-.417.39-.937.599-1.562.625h-6.875v1.797l2.851 2.851c.365.443.365.886 0 1.329-.443.364-.885.364-1.328 0L11.5 22.766l-2.46 2.46c-.444.365-.886.365-1.33 0-.364-.442-.364-.885 0-1.328l2.853-2.851V19.25H3.686c-.624-.026-1.145-.234-1.562-.625-.39-.417-.599-.937-.625-1.562z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPresentationScreenLgBoldIcon);
export default ForwardRef;
