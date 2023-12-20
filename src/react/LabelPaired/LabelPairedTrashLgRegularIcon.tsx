import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedTrashLgRegularIcon = (
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
        d='M7.203 6.75a.612.612 0 0 0-.547.313L6.07 8h5.86l-.586-.937a.612.612 0 0 0-.547-.313zM13.414 8H17.125c.39.026.599.234.625.625-.026.39-.234.599-.625.625h-.703l-1.016 13.945a2.45 2.45 0 0 1-.781 1.64c-.469.418-1.042.639-1.719.665H5.094c-.677-.026-1.25-.247-1.719-.664a2.45 2.45 0 0 1-.781-1.64L1.578 9.25H.875c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625H4.586l1.016-1.602c.39-.572.924-.872 1.601-.898h3.594c.677.026 1.21.326 1.601.898zm1.758 1.25H2.828l1.016 13.828c.026.339.156.612.39.82.235.235.521.352.86.352h7.812c.339 0 .625-.117.86-.352.234-.208.364-.481.39-.82z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrashLgRegularIcon);
export default ForwardRef;
