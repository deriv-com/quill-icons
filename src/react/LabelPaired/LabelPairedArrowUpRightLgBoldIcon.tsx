import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpRightLgBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 15 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M12.813 9.25c.572.052.885.365.937.938v9.375c-.052.572-.365.885-.937.937-.573-.052-.886-.365-.938-.937v-7.11l-9.023 9.024c-.443.364-.886.364-1.329 0-.364-.443-.364-.886 0-1.329l9.024-9.023h-7.11c-.572-.052-.885-.365-.937-.937.052-.573.365-.886.938-.938z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightLgBoldIcon);
export default ForwardRef;
