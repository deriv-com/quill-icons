import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShareFromSquareLgBoldIcon = (
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
      <path d='m15.875 15.5 4.14-3.75-4.14-3.71v1.835a.64.64 0 0 1-.625.625H11.5c-2.422 0-4.375 1.992-4.375 4.375 0 .469.04.898.195 1.25A4.42 4.42 0 0 1 11.54 13h3.71c.313 0 .625.313.625.625V15.5m-2.5-.625h-1.836C10.133 14.875 9 16.047 9 17.453c0 .352.04.625.156.86.078.117.117.234.196.351.039.04.078.078.078.117.039.04.078.04.117.078.078.078.117.118.195.157 0 .039.04.039.04.039.234.195.468.468.468.78 0 .352-.312.665-.703.665H9.43c-.078 0-.196 0-.274-.04-.078-.038-.195-.077-.312-.155a2.6 2.6 0 0 0-.469-.235c-.195-.156-.43-.273-.664-.468-1.133-.82-2.461-2.344-2.461-4.727a6.243 6.243 0 0 1 6.25-6.25H14V6.867c0-.742.586-1.367 1.328-1.367.352 0 .664.156.899.352l5.43 4.882c.273.274.468.625.468 1.016 0 .43-.195.781-.469 1.055l-5.43 4.883c-.234.234-.546.312-.859.312h-.117c-.703 0-1.25-.547-1.25-1.25v-1.875zM3.063 6.75h2.5a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937h-2.5a.925.925 0 0 0-.938.938v13.125c0 .546.39.937.938.937h13.125c.507 0 .937-.39.937-.937v-2.5c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938v2.5a2.826 2.826 0 0 1-2.812 2.812H3.063A2.8 2.8 0 0 1 .25 22.688V9.563A2.826 2.826 0 0 1 3.063 6.75' />
    </g>
    <defs>
      <clipPath id='99c5a1ec15d85352072a03bf4cf20757__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShareFromSquareLgBoldIcon);
export default ForwardRef;
