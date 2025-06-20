import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsSlashLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m15.43 21.047 1.054.82c-.976.625-2.148 1.016-3.359 1.133v1.875a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V23A7.52 7.52 0 0 1 5 16.125H3.125A.617.617 0 0 1 2.5 15.5c0-.312.273-.625.625-.625H5c.078-.625.195-1.21.39-1.797l1.055.86c-.156.507-.195 1.015-.195 1.562a6.22 6.22 0 0 0 6.25 6.25c1.055 0 2.07-.234 2.93-.703M11.875 8.039V6.125c0-.312.273-.625.625-.625.313 0 .625.313.625.625v1.914a7.515 7.515 0 0 1 6.836 6.836h1.914c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-1.914a6.7 6.7 0 0 1-.39 1.797l-1.055-.82a5.5 5.5 0 0 0 .234-1.602c0-3.437-2.812-6.25-6.25-6.25-1.094 0-2.07.273-2.969.742l-1.054-.82a7.8 7.8 0 0 1 3.398-1.133M12.5 19.25a3.73 3.73 0 0 1-3.75-3.516l2.148 1.72.04.038 2.187 1.719c-.195.039-.43.039-.625.039m-.664-7.422c.195-.039.43-.078.664-.078 1.992 0 3.594 1.563 3.71 3.555l-2.148-1.72-.039-.038zM.976 5.656l23.79 18.75c.234.196.312.625.078.86a.584.584 0 0 1-.86.117L.234 6.633c-.273-.195-.351-.625-.117-.86.195-.273.625-.351.86-.117' />
    </g>
    <defs>
      <clipPath id='d0703d03fb53e4397af66c7b206d6b70__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsSlashLgRegularIcon);
export default ForwardRef;
