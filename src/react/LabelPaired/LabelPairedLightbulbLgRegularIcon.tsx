import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightbulbLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.11 15.578q.976-1.367 1.015-3.203-.078-2.383-1.64-3.984Q9.882 6.828 7.5 6.75q-2.384.078-3.984 1.64-1.563 1.602-1.641 3.985.04 1.836 1.016 3.203.156.235.351.508l.156.234q.04.039.04.078.78 1.017 1.445 2.149a6.4 6.4 0 0 1 .664 1.953h-1.29a4 4 0 0 0-.468-1.328q-.585-1.054-1.328-2.031l-.625-.86Q.664 14.601.625 12.375q.079-2.93 2.031-4.844Q4.57 5.578 7.5 5.5q2.93.079 4.844 2.031 1.953 1.913 2.031 4.844-.04 2.227-1.21 3.906-.314.43-.626.82v.04a19 19 0 0 0-1.328 1.992q-.35.664-.469 1.367h-1.25a5.7 5.7 0 0 1 .625-1.953 22 22 0 0 1 1.445-2.227h.04q.273-.39.507-.742M7.5 9.25q-1.328.04-2.227.898-.859.9-.898 2.227-.039.585-.625.625-.586-.039-.625-.625.039-1.875 1.29-3.086Q5.624 8.04 7.5 8q.585.039.625.625-.039.585-.625.625M5.742 23q.47 1.172 1.758 1.25 1.29-.078 1.758-1.25zm-1.367-.625v-.195q.04-.39.43-.43h5.39q.39.04.43.43v.195q-.039 1.328-.898 2.227-.9.858-2.227.898-1.328-.04-2.227-.898-.859-.9-.898-2.227' />
    </g>
    <defs>
      <clipPath id='c3c860d54c8337c9874bd3d9149e9ac9__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightbulbLgRegularIcon);
export default ForwardRef;
