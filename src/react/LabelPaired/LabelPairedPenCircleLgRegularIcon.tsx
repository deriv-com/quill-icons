import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenCircleLgRegularIcon = (
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
      <path d='M18.75 15.5c0-3.125-1.68-5.977-4.375-7.54-2.734-1.6-6.055-1.6-8.75 0A8.63 8.63 0 0 0 1.25 15.5c0 3.164 1.64 6.016 4.375 7.578 2.695 1.602 6.016 1.602 8.75 0A8.73 8.73 0 0 0 18.75 15.5M0 15.5a9.93 9.93 0 0 1 5-8.633c3.086-1.797 6.875-1.797 10 0 3.086 1.797 5 5.078 5 8.633 0 3.594-1.914 6.875-5 8.672-3.125 1.797-6.914 1.797-10 0-3.125-1.797-5-5.078-5-8.672m12.93-3.594c-.235-.234-.625-.234-.899 0l-.82.82 1.562 1.563.82-.82a.595.595 0 0 0 0-.899zm-5.82 4.922c-.079.078-.118.195-.157.313l-.469 1.914 1.914-.508c.079 0 .196-.078.274-.156l3.203-3.203-1.562-1.563zm4.062-5.82a1.863 1.863 0 0 1 2.656 0l.664.703a1.816 1.816 0 0 1 0 2.617L9.57 19.29c-.273.234-.547.39-.898.469l-2.93.742c-.195.04-.43 0-.586-.156-.156-.157-.195-.39-.156-.586l.742-2.93c.078-.351.235-.625.469-.898z' />
    </g>
    <defs>
      <clipPath id='c807cfcf6f3368d8fb7d170194346c42__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenCircleLgRegularIcon);
export default ForwardRef;
