import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeSlashLgRegularIcon = (
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
      <path d='m1.016 5.617 23.75 18.79q.429.39.117.859-.43.429-.899.117L.234 6.633q-.429-.43-.117-.899.43-.39.899-.117M23.672 15.97q-.625 1.523-2.11 3.476l-.976-.742q1.367-1.836 1.914-3.203-.39-.976-1.21-2.227a16.3 16.3 0 0 0-2.11-2.46 11.4 11.4 0 0 0-2.93-1.993Q14.57 8.04 12.5 8q-2.343.04-4.18 1.016l-1.054-.82Q9.492 6.827 12.5 6.75q2.383.04 4.258.938a12.8 12.8 0 0 1 3.281 2.226q1.368 1.29 2.266 2.656.898 1.368 1.367 2.461.156.469 0 .938M3.438 11.555l1.015.78Q3.047 14.134 2.5 15.5q.39.976 1.21 2.227a16.3 16.3 0 0 0 2.11 2.46Q7.11 21.4 8.75 22.18q1.68.78 3.75.82 2.344-.04 4.18-1.016l1.054.82q-2.226 1.368-5.234 1.446-2.383-.039-4.258-.937-1.875-.9-3.242-2.227-1.406-1.29-2.305-2.656-.898-1.368-1.328-2.461a1.17 1.17 0 0 1 0-.938q.585-1.523 2.07-3.476M12.5 20.5q-2.109-.038-3.555-1.484Q7.54 17.609 7.5 15.5q0-.39.04-.742l1.21.976q.117 1.485 1.172 2.5 1.054.977 2.578 1.016.313 0 .664-.04l1.172.938a4.8 4.8 0 0 1-1.836.352m5-5q0 .39-.04.742l-1.21-.976q-.117-1.485-1.172-2.5-1.054-.977-2.578-1.016-.312 0-.625.078l-1.21-.976A4.8 4.8 0 0 1 12.5 10.5q2.109.04 3.555 1.445Q17.46 13.391 17.5 15.5' />
    </g>
    <defs>
      <clipPath id='9a8544ddb57e0b5097fe0ca6e918a83a__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeSlashLgRegularIcon);
export default ForwardRef;
