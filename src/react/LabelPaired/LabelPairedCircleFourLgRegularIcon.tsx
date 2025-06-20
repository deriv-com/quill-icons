import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleFourLgRegularIcon = (
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
      <path d='M18.75 15.5c0-3.125-1.68-5.977-4.375-7.54-2.734-1.6-6.055-1.6-8.75 0A8.63 8.63 0 0 0 1.25 15.5c0 3.164 1.64 6.016 4.375 7.578 2.695 1.602 6.016 1.602 8.75 0A8.73 8.73 0 0 0 18.75 15.5M0 15.5a9.93 9.93 0 0 1 5-8.633c3.086-1.797 6.875-1.797 10 0 3.086 1.797 5 5.078 5 8.633 0 3.594-1.914 6.875-5 8.672-3.125 1.797-6.914 1.797-10 0-3.125-1.797-5-5.078-5-8.672m8.945-4.922c.352.117.508.469.352.781L7.148 16.75h4.102v-3.125c0-.312.273-.625.625-.625.313 0 .625.313.625.625v3.125h.625c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H12.5v1.875a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V18h-5c-.234 0-.43-.078-.547-.273a.55.55 0 0 1-.039-.547l2.5-6.25c.117-.352.469-.508.82-.352z' />
    </g>
    <defs>
      <clipPath id='ff0443fb56e97ec1b16d82bbd331c96c__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleFourLgRegularIcon);
export default ForwardRef;
