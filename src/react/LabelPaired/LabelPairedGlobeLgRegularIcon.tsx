import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGlobeLgRegularIcon = (
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
      <path d='M10 24.25c.625 0 1.563-.547 2.383-2.227.39-.78.742-1.718.976-2.773H6.641c.195 1.055.547 1.992.937 2.773.82 1.68 1.758 2.227 2.422 2.227M6.406 18h7.149c.117-.781.195-1.602.195-2.5 0-.86-.078-1.68-.195-2.5H6.406c-.117.82-.156 1.64-.156 2.5 0 .898.04 1.719.156 2.5m.235-6.25h6.718a11.8 11.8 0 0 0-.976-2.734C11.563 7.336 10.625 6.75 10 6.75c-.664 0-1.602.586-2.422 2.266-.39.78-.742 1.68-.937 2.734M14.844 13c.078.82.156 1.64.156 2.5 0 .898-.078 1.719-.156 2.5h3.515a8.6 8.6 0 0 0 .391-2.5c0-.86-.156-1.68-.39-2.5zm3.047-1.25a8.88 8.88 0 0 0-5.118-4.531c.82 1.093 1.485 2.695 1.836 4.531zm-12.54 0c.391-1.836 1.016-3.437 1.837-4.531A8.88 8.88 0 0 0 2.07 11.75zM1.602 13a9 9 0 0 0-.351 2.5c0 .898.117 1.719.352 2.5h3.554C5.04 17.219 5 16.398 5 15.5c0-.86.04-1.68.156-2.5zm11.172 10.82a8.82 8.82 0 0 0 5.118-4.57h-3.282c-.351 1.875-1.015 3.438-1.836 4.57m-5.585 0c-.82-1.133-1.446-2.695-1.836-4.57H2.07a8.82 8.82 0 0 0 5.118 4.57M10 25.5c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5' />
    </g>
    <defs>
      <clipPath id='c664c4fa8a85979495f8a2d3325e336e__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGlobeLgRegularIcon);
export default ForwardRef;
