import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneEyeSlashRegularIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='m4.516 6.617 23.75 18.79q.429.39.117.859-.43.429-.899.117L3.734 7.633q-.429-.43-.117-.899.43-.39.899-.117M27.172 16.97q-.625 1.523-2.11 3.476l-.976-.742Q25.453 17.867 26 16.5q-.39-.976-1.21-2.227a16.3 16.3 0 0 0-2.11-2.46 11.4 11.4 0 0 0-2.93-1.993Q18.07 9.04 16 9q-2.343.04-4.18 1.016l-1.054-.82Q12.992 7.827 16 7.75q2.383.04 4.258.938a12.8 12.8 0 0 1 3.281 2.226q1.368 1.29 2.266 2.656.898 1.368 1.367 2.461.156.469 0 .938M6.938 12.555l1.015.78Q6.548 15.134 6 16.5q.39.976 1.21 2.227a16.3 16.3 0 0 0 2.11 2.46q1.29 1.212 2.93 1.993 1.68.78 3.75.82 2.344-.04 4.18-1.016l1.054.82Q19.008 25.173 16 25.25q-2.383-.039-4.258-.937-1.874-.9-3.242-2.227-1.406-1.29-2.305-2.656-.898-1.368-1.328-2.461a1.17 1.17 0 0 1 0-.938q.585-1.523 2.07-3.476M16 21.5q-2.109-.038-3.555-1.484Q11.04 18.609 11 16.5q0-.39.04-.742l1.21.976q.117 1.485 1.172 2.5 1.054.977 2.578 1.016.313 0 .664-.04l1.172.938A4.8 4.8 0 0 1 16 21.5m5-5q0 .39-.04.742l-1.21-.976q-.117-1.485-1.172-2.5-1.054-.977-2.578-1.016-.312 0-.625.078l-1.21-.976A4.8 4.8 0 0 1 16 11.5q2.109.04 3.555 1.445Q20.96 14.391 21 16.5' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneEyeSlashRegularIcon);
export default ForwardRef;
