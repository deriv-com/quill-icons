import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpToLineLgBoldIcon = (
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
        d='M.938 6.75h13.125c.572.052.885.365.937.938-.052.572-.365.885-.937.937H.938C.365 8.573.051 8.26 0 7.688c.052-.573.365-.886.938-.938m7.265 5.313h-.039l5 5.312c.365.443.352.872-.039 1.29-.443.364-.872.35-1.29-.04L8.438 15.07v8.242c-.052.573-.364.886-.937.938-.573-.052-.885-.365-.937-.937V15.07l-3.399 3.594c-.417.365-.846.378-1.289.04-.39-.444-.404-.886-.04-1.329l5-5.312a.851.851 0 0 1 .665-.313c.26 0 .495.104.703.313'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpToLineLgBoldIcon);
export default ForwardRef;
