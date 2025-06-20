import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleUserSlashXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.234 6.469c.375-.516 1.079-.61 1.547-.188l4.5 3.469C8.531 7.406 11.625 6 15 6c4.266 0 8.25 2.297 10.36 6 2.156 3.75 2.156 8.297 0 12-.094.188-.188.328-.282.516l4.453 3.515c.516.375.61 1.078.188 1.547-.375.516-1.078.61-1.547.188L.422 8.016c-.516-.375-.61-1.078-.188-1.547m3.61 7.078 1.875 1.5c-.328.937-.469 1.922-.469 2.953 0 2.625.984 5.016 2.672 6.75.89-2.156 2.953-3.656 5.39-3.703l2.86 2.203H13.5c-1.828 0-3.375 1.313-3.703 3.047 1.5.937 3.281 1.453 5.203 1.453a9.9 9.9 0 0 0 5.063-1.406l1.875 1.453C19.922 29.203 17.53 30 15 30c-4.312 0-8.25-2.25-10.406-6-1.875-3.187-2.11-7.031-.75-10.453m4.219-2.39 3.187 2.484c.328-.75.938-1.36 1.688-1.828 1.265-.704 2.812-.704 4.124 0 1.266.75 2.063 2.109 2.063 3.562a4.21 4.21 0 0 1-1.547 3.234l5.719 4.5c.89-1.5 1.453-3.234 1.453-5.109 0-5.344-4.406-9.75-9.75-9.75a9.7 9.7 0 0 0-6.937 2.906m5.062 3.984 2.531 2.015c.422-.187.75-.468.938-.797.328-.609.328-1.312 0-1.875A1.78 1.78 0 0 0 15 13.547c-.703 0-1.312.328-1.64.937-.141.188-.188.422-.235.657' />
    </g>
    <defs>
      <clipPath id='716460707cc6b00ead27c9fbb39353b8__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleUserSlashXlBoldIcon);
export default ForwardRef;
