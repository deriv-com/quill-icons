import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpFromBracketLgBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m9.664 5.773 5 5c.365.443.365.886 0 1.329-.443.364-.885.364-1.328 0L9.937 8.703v9.61c-.052.572-.364.885-.937.937-.573-.052-.885-.365-.937-.937v-9.61l-3.399 3.399c-.443.364-.885.364-1.328 0-.365-.443-.365-.886 0-1.329l5-5c.443-.364.885-.364 1.328 0M2.125 18.938v3.125c0 .442.156.807.469 1.093.286.313.65.469 1.094.469h10.625c.442 0 .807-.156 1.093-.469.313-.286.469-.65.469-1.093v-3.125c.052-.573.365-.886.938-.938.572.052.885.365.937.938v3.125c-.026.963-.365 1.77-1.016 2.421-.65.651-1.458.99-2.422 1.016H3.688c-.964-.026-1.771-.365-2.422-1.016-.651-.65-.99-1.458-1.016-2.422v-3.125c.052-.572.365-.885.938-.937.572.052.885.365.937.938'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromBracketLgBoldIcon);
export default ForwardRef;
