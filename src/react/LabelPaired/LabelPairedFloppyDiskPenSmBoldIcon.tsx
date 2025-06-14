import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskPenSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.438 6.375v8.75c0 .246.19.438.437.438h5.633l-.328 1.312H1.875c-.984 0-1.75-.766-1.75-1.75v-8.75c0-.957.766-1.75 1.75-1.75h6.7c.464 0 .902.191 1.23.52l2.05 2.05-.93.93-2.05-2.05v-.028V8.78c0 .383-.3.656-.656.656h-5.25a.63.63 0 0 1-.656-.656V5.937h-.438a.45.45 0 0 0-.437.438m10.417.82c.329.328.52.766.52 1.23v1.778l-1.312 1.313v-3.09a.44.44 0 0 0-.137-.301zm-8.23-1.258v2.188h3.938V5.938zM4.5 12.5c0-.602.328-1.176.875-1.504.52-.3 1.203-.3 1.75 0 .52.328.875.902.875 1.504 0 .629-.355 1.203-.875 1.531-.547.301-1.23.301-1.75 0A1.78 1.78 0 0 1 4.5 12.5m10.637-2.297.41.41c.41.41.41 1.121 0 1.532l-.82.82-1.942-1.942.82-.82c.41-.41 1.122-.41 1.532 0M8.629 15.18l3.555-3.555 1.941 1.941-3.555 3.555a.8.8 0 0 1-.383.219l-1.667.41c-.137.027-.301 0-.41-.11-.11-.109-.137-.273-.11-.41l.41-1.668a.8.8 0 0 1 .219-.382' />
    </g>
    <defs>
      <clipPath id='a922a58d9d4e9771931c530c0db8ffe2__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskPenSmBoldIcon);
export default ForwardRef;
