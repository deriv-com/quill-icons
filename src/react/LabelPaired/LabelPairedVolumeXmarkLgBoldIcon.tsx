import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVolumeXmarkLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.46 13.39a.86.86 0 0 1-.585.235H2.438a.31.31 0 0 0-.313.313v3.124c0 .196.117.313.313.313h3.437c.195 0 .43.117.586.273l4.414 3.868V9.523zm5.118-6.64c.625 0 1.172.547 1.172 1.172v15.195c0 .625-.547 1.133-1.172 1.133-.312 0-.586-.078-.781-.273L5.484 19.25H2.438A2.184 2.184 0 0 1 .25 17.063v-3.125c0-1.172.977-2.188 2.188-2.188h3.046l5.313-4.687a1.1 1.1 0 0 1 .781-.313m5.274 5.273L19 14.172l2.148-2.149a.92.92 0 0 1 1.29 0c.39.391.39.977 0 1.329L20.289 15.5l2.148 2.148c.391.391.391.977 0 1.329a.856.856 0 0 1-1.289 0L19 16.828l-2.148 2.149c-.391.39-.977.39-1.329 0-.39-.352-.39-.938 0-1.329l2.149-2.148-2.149-2.148c-.39-.352-.39-.938 0-1.329.352-.351.938-.351 1.329 0' />
    </g>
    <defs>
      <clipPath id='e46fea591ff0c23d4c8130cbf0bab938__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVolumeXmarkLgBoldIcon);
export default ForwardRef;
