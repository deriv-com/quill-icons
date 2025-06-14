import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleTwoLgBoldIcon = (
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
      <path d='M10 7.375c-2.93 0-5.586 1.563-7.07 4.063-1.446 2.539-1.446 5.624 0 8.124A8.13 8.13 0 0 0 10 23.626c2.89 0 5.547-1.523 7.031-4.062 1.446-2.5 1.446-5.586 0-8.125-1.484-2.5-4.14-4.063-7.031-4.063M10 25.5c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5M8.672 12.727l-.938.703c-.39.312-.976.234-1.289-.157-.351-.43-.234-1.015.157-1.328l.937-.703c.625-.469 1.367-.742 2.149-.703h.156c1.797.04 3.281 1.484 3.281 3.32 0 .899-.39 1.797-1.055 2.422l-2.539 2.344h3.281a.95.95 0 0 1 .938.938c0 .546-.43.937-.937.937H7.187a.99.99 0 0 1-.898-.586.98.98 0 0 1 .234-1.016l4.258-3.984c.274-.273.469-.664.469-1.055 0-.78-.664-1.445-1.445-1.445h-.117c-.391 0-.743.117-1.016.313' />
    </g>
    <defs>
      <clipPath id='e92df4a0c57b503facd8db141f3195fe__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleTwoLgBoldIcon);
export default ForwardRef;
