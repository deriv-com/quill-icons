import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserSlashLgRegularIcon = (
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
      <path d='M17.5 10.5q0 1.289-.586 2.344a4.95 4.95 0 0 1-1.523 1.758l-1.055-.82a4.15 4.15 0 0 0 1.406-1.368 3.7 3.7 0 0 0 .508-1.914q-.038-1.602-1.094-2.656Q14.102 6.789 12.5 6.75q-1.327.039-2.266.781a3.67 3.67 0 0 0-1.328 1.953l-1.054-.82q.586-1.406 1.796-2.266 1.25-.859 2.852-.898 2.109.04 3.555 1.445Q17.46 8.391 17.5 10.5m2.031 13.75 1.29 1.016a1.2 1.2 0 0 1-.743.234H4.922q-.508 0-.82-.352-.352-.312-.352-.82.079-2.93 2.031-4.922 1.992-1.953 4.922-2.031h.156l1.563 1.25h-1.719q-2.383.078-3.984 1.64Q5.078 21.868 5 24.25zM1.016 5.617l23.75 18.79q.429.39.117.859-.43.429-.899.117L.234 6.633q-.429-.43-.117-.899.43-.39.899-.117' />
    </g>
    <defs>
      <clipPath id='b5221e47dd85da197034e027d5de1bd1__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserSlashLgRegularIcon);
export default ForwardRef;
