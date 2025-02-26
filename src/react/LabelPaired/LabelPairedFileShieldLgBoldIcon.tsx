import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileShieldLgBoldIcon = (
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
      <path d='M2.75 23.625h9.61c.43.586.937 1.133 1.562 1.602-.352.195-.781.273-1.172.273h-10A2.47 2.47 0 0 1 .25 23V8c0-1.367 1.094-2.5 2.5-2.5h6.445c.664 0 1.29.273 1.758.742l3.555 3.555c.469.469.742 1.094.742 1.758v2.03l-1.875.782V11.75H10.25c-.703 0-1.25-.547-1.25-1.25V7.375H2.75A.64.64 0 0 0 2.125 8v15c0 .352.273.625.625.625m14.023-9.297a.97.97 0 0 1 .665 0l4.687 1.875c.39.156.625.508.625.86 0 2.5-1.016 6.601-5.273 8.398a1.2 1.2 0 0 1-.743 0c-4.257-1.797-5.234-5.898-5.234-8.398 0-.352.234-.704.586-.86zm4.063 3.36-3.711-1.485v7.344c2.656-1.29 3.555-3.867 3.71-5.86' />
    </g>
    <defs>
      <clipPath id='142c8a77e922da08a4ce78ece05ad094__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileShieldLgBoldIcon);
export default ForwardRef;
