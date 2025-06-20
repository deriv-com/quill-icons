import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUsersLgFillIcon = (
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
      <path d='M5.625 5.5c1.094 0 2.11.625 2.695 1.563.547.976.547 2.187 0 3.125-.586.976-1.601 1.562-2.695 1.562a3.16 3.16 0 0 1-2.734-1.562c-.547-.938-.547-2.149 0-3.126C3.477 6.126 4.492 5.5 5.625 5.5M20 5.5c1.094 0 2.11.625 2.695 1.563.547.976.547 2.187 0 3.125-.586.976-1.601 1.562-2.695 1.562a3.16 3.16 0 0 1-2.734-1.562c-.547-.938-.547-2.149 0-3.126C17.852 6.126 18.867 5.5 20 5.5M0 17.18C0 14.875 1.836 13 4.14 13h1.68c.625 0 1.211.156 1.758.39-.078.274-.078.587-.078.86 0 1.523.625 2.852 1.68 3.75H.82a.8.8 0 0 1-.82-.82m15.82.82h-.039c1.055-.898 1.68-2.227 1.68-3.75 0-.273 0-.586-.04-.86a4.1 4.1 0 0 1 1.72-.39h1.68A4.184 4.184 0 0 1 25 17.18c0 .468-.39.82-.86.82zm-7.07-3.75c0-1.328.703-2.54 1.875-3.242 1.133-.664 2.578-.664 3.75 0 1.133.703 1.875 1.914 1.875 3.242 0 1.367-.742 2.578-1.875 3.281-1.172.664-2.617.664-3.75 0-1.172-.703-1.875-1.914-1.875-3.281M5 24.484c0-2.89 2.305-5.234 5.195-5.234h4.57A5.235 5.235 0 0 1 20 24.484c0 .547-.469 1.016-1.055 1.016H6.015C5.47 25.5 5 25.07 5 24.484' />
    </g>
    <defs>
      <clipPath id='746318624d8bb1146d42d42bde48209b__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUsersLgFillIcon);
export default ForwardRef;
