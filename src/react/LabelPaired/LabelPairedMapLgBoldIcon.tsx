import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMapLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M22.32 6.945c.274.157.43.47.43.742v13.125c0 .391-.273.743-.625.899l-6.562 2.5a.86.86 0 0 1-.626 0L7.75 21.828 1.5 24.211a.86.86 0 0 1-.86-.117c-.273-.157-.39-.469-.39-.782V10.188c0-.39.234-.703.586-.859l6.562-2.5a.86.86 0 0 1 .625 0l7.188 2.383 6.25-2.383a.86.86 0 0 1 .86.117M2.125 10.852v11.132l4.688-1.797V9.056zm12.188 11.171V10.891L8.686 9.016v11.132zm1.874-.039 4.688-1.797V9.056l-4.687 1.797z' />
    </g>
    <defs>
      <clipPath id='5972b884e4ebdd7c92e29f9741b4d201__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMapLgBoldIcon);
export default ForwardRef;
