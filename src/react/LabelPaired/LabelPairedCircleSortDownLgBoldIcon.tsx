import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSortDownLgBoldIcon = (
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
      <path d='M1.875 15.5a8.13 8.13 0 0 0 4.063 7.07c2.5 1.446 5.585 1.446 8.125 0 2.5-1.484 4.062-4.14 4.062-7.07 0-2.89-1.562-5.547-4.062-7.031-2.54-1.446-5.626-1.446-8.126 0-2.539 1.484-4.062 4.14-4.062 7.031M20 15.5c0 3.594-1.914 6.875-5 8.672-3.125 1.797-6.914 1.797-10 0-3.125-1.797-5-5.078-5-8.672a9.93 9.93 0 0 1 5-8.633c3.086-1.797 6.875-1.797 10 0 3.086 1.797 5 5.078 5 8.633m-9.57 6.094a.66.66 0 0 1-.899 0l-3.75-3.75c-.156-.196-.234-.469-.117-.703.078-.235.313-.391.586-.391h7.5c.234 0 .469.156.547.39.117.235.039.508-.117.704zm0-12.149 3.75 3.75c.156.196.234.47.117.703-.078.235-.313.352-.547.352h-7.5c-.273 0-.508-.156-.586-.352-.117-.234-.039-.507.117-.703l3.75-3.75a.66.66 0 0 1 .899 0M12.227 13 10 10.773 7.734 13z' />
    </g>
    <defs>
      <clipPath id='0355e4bfa723eb2e17290c3f2b509a56__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSortDownLgBoldIcon);
export default ForwardRef;
