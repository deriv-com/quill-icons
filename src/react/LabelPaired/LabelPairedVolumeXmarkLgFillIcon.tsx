import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVolumeXmarkLgFillIcon = (
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
      <path d='M12.008 6.867c.43.196.742.664.742 1.133v15c0 .508-.312.938-.742 1.172a1.26 1.26 0 0 1-1.367-.235L5.367 19.25H2.75a2.47 2.47 0 0 1-2.5-2.5v-2.5c0-1.367 1.094-2.5 2.5-2.5h2.617l5.274-4.648c.39-.352.898-.43 1.367-.235m4.844 5.156L19 14.172l2.148-2.149a.92.92 0 0 1 1.29 0c.39.391.39.977 0 1.329L20.289 15.5l2.148 2.148c.391.391.391.977 0 1.329a.856.856 0 0 1-1.289 0L19 16.828l-2.148 2.149c-.391.39-.977.39-1.329 0-.39-.352-.39-.938 0-1.329l2.149-2.148-2.149-2.148c-.39-.352-.39-.938 0-1.329.352-.351.938-.351 1.329 0' />
    </g>
    <defs>
      <clipPath id='cd164c94011360d8443408921180a1c7__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVolumeXmarkLgFillIcon);
export default ForwardRef;
