import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSterlingLgRegularIcon = (
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
      <path d='M18.75 15.5c0-3.125-1.68-5.977-4.375-7.54-2.734-1.6-6.055-1.6-8.75 0A8.63 8.63 0 0 0 1.25 15.5c0 3.164 1.64 6.016 4.375 7.578 2.695 1.602 6.016 1.602 8.75 0A8.73 8.73 0 0 0 18.75 15.5M0 15.5a9.93 9.93 0 0 1 5-8.633c3.086-1.797 6.875-1.797 10 0 3.086 1.797 5 5.078 5 8.633 0 3.594-1.914 6.875-5 8.672-3.125 1.797-6.914 1.797-10 0-3.125-1.797-5-5.078-5-8.672m10.117-4.375c-.781 0-1.406.664-1.406 1.445v1.68h1.914c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H8.711a5.45 5.45 0 0 1-.703 2.5h4.805c.312 0 .624.313.624.625a.64.64 0 0 1-.624.625H6.875a.69.69 0 0 1-.586-.312.8.8 0 0 1 .04-.665l.39-.507A4.6 4.6 0 0 0 7.46 15.5h-.586a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h.586v-1.68c-.04-1.484 1.172-2.695 2.656-2.695.43 0 .82.117 1.211.313l.82.39c.313.156.43.547.274.86a.64.64 0 0 1-.86.273l-.82-.43a1.6 1.6 0 0 0-.625-.117z' />
    </g>
    <defs>
      <clipPath id='ebad7a69596caedf2ad03bc56eed1db9__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSterlingLgRegularIcon);
export default ForwardRef;
