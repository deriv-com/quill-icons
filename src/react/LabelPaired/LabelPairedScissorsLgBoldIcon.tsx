import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedScissorsLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M19.766 22.648q-.586.625-1.29.118l-6.288-5.235 1.484-1.21 5.976 5.038q.625.586.118 1.29M4.375 7.375q-1.406.04-2.148 1.25-.705 1.25 0 2.5.741 1.21 2.148 1.25 1.407-.04 2.148-1.25.705-1.25 0-2.5-.741-1.21-2.148-1.25m0-1.875q1.875.039 3.086 1.29Q8.71 8 8.75 9.874q0 1.054-.469 1.953l2.969 2.461 7.227-6.055q.702-.508 1.289.118.508.702-.118 1.289L8.281 19.17q.47.899.469 1.954Q8.711 23 7.46 24.211 6.25 25.46 4.376 25.5q-1.875-.039-3.086-1.29Q.04 23 0 21.126q.039-1.875 1.29-3.086 1.21-1.25 3.085-1.289 1.603.04 2.734.977L9.766 15.5l-2.657-2.227q-1.132.938-2.734.977-1.875-.039-3.086-1.29Q.04 11.75 0 9.876.039 8 1.29 6.789 2.5 5.54 4.374 5.5m2.5 15.625q-.04-1.406-1.25-2.148-1.25-.705-2.5 0-1.21.741-1.25 2.148.04 1.407 1.25 2.148 1.25.705 2.5 0 1.21-.741 1.25-2.148' />
    </g>
    <defs>
      <clipPath id='eef5f4b2f7559c637a079a8242678a19__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedScissorsLgBoldIcon);
export default ForwardRef;
