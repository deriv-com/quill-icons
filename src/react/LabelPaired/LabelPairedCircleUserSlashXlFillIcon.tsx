import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleUserSlashXlFillIcon = (
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
      <path d='M.234 6.469c.375-.516 1.079-.61 1.547-.188l4.5 3.469A11.1 11.1 0 0 1 9 7.64c3.703-2.156 8.25-2.156 12 0 3.703 2.11 6 6.094 6 10.36 0 2.344-.703 4.594-1.922 6.516l4.453 3.515c.516.375.61 1.078.188 1.547-.375.516-1.078.61-1.547.188L.422 8.016c-.516-.375-.61-1.078-.188-1.547M3 18c0-1.547.281-3.047.844-4.453l9.469 7.5a5.98 5.98 0 0 0-5.063 3C9.938 25.875 12.328 27 14.953 27c1.64 0 3.14-.422 4.453-1.172l2.532 1.969c-.329.234-.657.422-.985.61-3.703 2.156-8.25 2.156-12 0C5.25 26.25 3 22.312 3 18m8.86-3.844 5.109 3.985c.375-.282.703-.657.937-1.078.61-1.032.61-2.297 0-3.375A3.44 3.44 0 0 0 14.953 12c-1.172 0-2.297.656-2.906 1.688-.094.14-.14.28-.188.468' />
    </g>
    <defs>
      <clipPath id='c4e2ed5af80560da297e198107784282__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleUserSlashXlFillIcon);
export default ForwardRef;
