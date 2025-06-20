import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleTwoLgRegularIcon = (
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
      <path d='M10 6.75a8.73 8.73 0 0 0-7.578 4.375c-1.602 2.734-1.602 6.055 0 8.75C3.984 22.609 6.836 24.25 10 24.25a8.63 8.63 0 0 0 7.54-4.375c1.6-2.695 1.6-6.016 0-8.75C15.976 8.43 13.124 6.75 10 6.75m0 18.75c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5M8.477 12.336l-.586.508a.58.58 0 0 1-.86-.04.58.58 0 0 1 .04-.859l.546-.508c.586-.585 1.406-.898 2.266-.898 1.797 0 3.242 1.484 3.242 3.242 0 .899-.352 1.719-.977 2.344L8.984 19.25h4.141c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H7.5c-.273 0-.508-.156-.586-.352-.117-.234-.039-.507.117-.703l4.219-4.218c.39-.391.625-.899.625-1.446a2 2 0 0 0-1.992-1.992c-.547 0-1.055.195-1.406.547' />
    </g>
    <defs>
      <clipPath id='6ca668aa68e01841d1d1ae268b054f95__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleTwoLgRegularIcon);
export default ForwardRef;
