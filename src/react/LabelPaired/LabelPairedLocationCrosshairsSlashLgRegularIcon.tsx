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
      <path d='M15.469 21.008h-.04l1.055.82q-1.484.977-3.359 1.133v1.914q-.039.585-.625.625-.585-.039-.625-.625v-1.914q-2.773-.273-4.687-2.148-1.876-1.914-2.149-4.688H3.125q-.586-.039-.625-.625.039-.585.625-.625h1.914q.079-.937.352-1.797l1.054.82A6.6 6.6 0 0 0 6.25 15.5q.078 2.656 1.836 4.414T12.5 21.75a6.1 6.1 0 0 0 2.969-.742M11.875 8.039V6.125q.039-.585.625-.625.585.039.625.625v1.914q2.774.274 4.688 2.149 1.875 1.913 2.148 4.687h1.914q.585.039.625.625-.039.585-.625.625h-1.914a8 8 0 0 1-.352 1.797l-1.054-.82a6.6 6.6 0 0 0 .195-1.602q-.078-2.655-1.836-4.414T12.5 9.25q-1.602 0-2.93.742l-1.054-.82Q10 8.195 11.875 8.039M12.5 19.25q-1.524-.04-2.578-1.016-1.055-.976-1.172-2.5l2.188 1.72q.038 0 .039.038l2.187 1.719q-.351.039-.664.039m-.625-7.46q.313-.04.625-.04 1.524.04 2.578 1.016 1.055.976 1.172 2.5l-2.187-1.72q-.04 0-.04-.038zM1.015 5.616l23.75 18.79q.43.39.118.859-.43.429-.899.117L.234 6.633q-.429-.43-.117-.899.43-.39.899-.117' />
    </g>
    <defs>
      <clipPath id='60065e41773c92984d1dda9dd1bfaf10__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsSlashLgRegularIcon);
export default ForwardRef;
