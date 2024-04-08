import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUsersLgBoldIcon = (
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
      <path d='M5.625 11.75a3.16 3.16 0 0 1-2.734-1.562c-.547-.938-.547-2.149 0-3.126C3.477 6.126 4.492 5.5 5.625 5.5c1.094 0 2.11.625 2.695 1.563.547.976.547 2.187 0 3.125-.586.976-1.601 1.562-2.695 1.562m14.375 0a3.16 3.16 0 0 1-2.734-1.562c-.547-.938-.547-2.149 0-3.126C17.852 6.126 18.867 5.5 20 5.5c1.094 0 2.11.625 2.695 1.563.547.976.547 2.187 0 3.125-.586.976-1.601 1.562-2.695 1.562M0 17.18C0 14.875 1.836 13 4.14 13h1.68c.625 0 1.211.156 1.758.39-.078.274-.078.587-.078.86 0 1.523.625 2.852 1.68 3.75H.82a.8.8 0 0 1-.82-.82m15.82.82h-.039a4.88 4.88 0 0 0 1.719-3.75 6 6 0 0 0-.078-.86A4.1 4.1 0 0 1 19.14 13h1.68A4.184 4.184 0 0 1 25 17.18c0 .468-.39.82-.86.82zm-3.32-5.625c-.703 0-1.29.39-1.64.938-.352.585-.352 1.328 0 1.874a1.87 1.87 0 0 0 1.64.938c.664 0 1.25-.352 1.602-.937.351-.547.351-1.29 0-1.876-.352-.546-.938-.937-1.602-.937m0 5.625c-1.367 0-2.578-.703-3.281-1.875-.664-1.133-.664-2.578 0-3.75.703-1.133 1.914-1.875 3.281-1.875 1.328 0 2.54.742 3.242 1.875.664 1.172.664 2.617 0 3.75C15.04 17.297 13.828 18 12.5 18m-2.305 3.125c-1.562 0-2.851 1.094-3.242 2.5h11.055c-.39-1.406-1.68-2.5-3.242-2.5zm0-1.875h4.57A5.235 5.235 0 0 1 20 24.484c0 .586-.469 1.016-1.055 1.016H6.015A1.01 1.01 0 0 1 5 24.484c0-2.89 2.305-5.234 5.195-5.234' />
    </g>
    <defs>
      <clipPath id='72d2ed15c67f5fa1b9a1230c005f85bb__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUsersLgBoldIcon);
export default ForwardRef;
