import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTrashLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.203 6.75a.61.61 0 0 0-.547.313L6.07 8h5.86l-.586-.937a.61.61 0 0 0-.547-.313zM13.414 8h3.711q.585.039.625.625-.039.585-.625.625h-.703l-1.016 13.945a2.45 2.45 0 0 1-.781 1.64q-.703.627-1.719.665H5.094q-1.015-.039-1.719-.664a2.45 2.45 0 0 1-.781-1.64L1.578 9.25H.875Q.29 9.211.25 8.625.289 8.04.875 8h3.711l1.016-1.602q.585-.859 1.601-.898h3.594q1.015.04 1.601.898zm1.758 1.25H2.828l1.016 13.828q.039.508.39.82.352.352.86.352h7.812q.508 0 .86-.352.351-.312.39-.82z' />
    </g>
    <defs>
      <clipPath id='a37a58f9d62551c8912097b6b05b8312__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrashLgRegularIcon);
export default ForwardRef;
