import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPresentationScreenLgBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.188 5.5h20.625c.572.052.885.365.937.938-.052.572-.365.885-.938.937H1.188C.616 7.323.302 7.01.25 6.437c.052-.572.365-.885.938-.937ZM1.5 8.625h1.875v8.438c.026.182.13.286.313.312h15.625c.182-.026.286-.13.312-.313V8.626H21.5v8.438c-.026.625-.234 1.145-.625 1.562-.417.39-.938.599-1.563.625h-6.875v1.797l2.852 2.851c.365.443.365.886 0 1.329-.443.364-.885.364-1.328 0L11.5 22.766l-2.46 2.46c-.444.365-.886.365-1.33 0-.364-.442-.364-.885 0-1.328l2.853-2.851V19.25H3.686c-.624-.026-1.145-.234-1.562-.625-.39-.417-.599-.938-.625-1.563V8.626Z'
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
