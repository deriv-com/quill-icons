import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeSmRegularIcon = (
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
      <path d='M3.324 7.469C2.148 8.562 1.355 9.875 1 10.75c.355.875 1.148 2.188 2.324 3.281C4.5 15.125 6.06 16 8 16c1.914 0 3.473-.875 4.648-1.969 1.176-1.094 1.97-2.406 2.352-3.281-.383-.875-1.176-2.187-2.352-3.281S9.914 5.5 8 5.5c-1.941 0-3.5.875-4.676 1.969M8 4.625c2.188 0 3.965 1.012 5.25 2.215 1.285 1.176 2.133 2.598 2.543 3.582a.98.98 0 0 1 0 .683c-.41.957-1.258 2.38-2.543 3.582-1.285 1.204-3.062 2.188-5.25 2.188-2.215 0-3.992-.984-5.277-2.187C1.438 13.484.59 12.062.18 11.105a.98.98 0 0 1 0-.683c.41-.985 1.257-2.406 2.543-3.582C4.008 5.637 5.785 4.625 8 4.625M5.375 10.75c0 .957.492 1.805 1.313 2.297a2.65 2.65 0 0 0 2.625 0c.792-.492 1.312-1.34 1.312-2.297 0-.93-.52-1.777-1.312-2.27a2.65 2.65 0 0 0-2.626 0c-.82.493-1.312 1.34-1.312 2.27m6.125 0a3.54 3.54 0 0 1-1.75 3.035 3.48 3.48 0 0 1-3.5 0A3.48 3.48 0 0 1 4.5 10.75c0-1.23.656-2.379 1.75-3.008a3.48 3.48 0 0 1 3.5 0c1.066.63 1.75 1.778 1.75 3.008' />
    </g>
    <defs>
      <clipPath id='8f44d36245928c69f1b073d95344d88d__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeSmRegularIcon);
export default ForwardRef;
