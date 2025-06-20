import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSterlingLgFillIcon = (
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
      <path d='M10 25.5c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5m.195-13.75c.157 0 .313.04.43.117l1.21.469c.47.195 1.017-.04 1.212-.547a.935.935 0 0 0-.508-1.21l-1.21-.47a2.8 2.8 0 0 0-1.134-.234c-1.68 0-3.047 1.406-3.047 3.086v1.289h-.273a.64.64 0 0 0-.625.625c0 .352.273.625.625.625h.273v.43c0 .625-.117 1.289-.43 1.875l-.39.703a1 1 0 0 0 .04.937c.155.274.468.43.82.43h5.625c.507 0 .937-.39.937-.937a.95.95 0 0 0-.937-.938H8.672a6.3 6.3 0 0 0 .351-2.11v-.39h1.602a.64.64 0 0 0 .625-.625c0-.312-.312-.625-.625-.625H9.023v-1.29c0-.663.508-1.21 1.172-1.21' />
    </g>
    <defs>
      <clipPath id='f07c86cbf60ed6ecea03bc3c35c13c8f__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSterlingLgFillIcon);
export default ForwardRef;
