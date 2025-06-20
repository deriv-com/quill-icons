import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGlobeSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7 16.438c.191 0 .738-.192 1.285-1.313a7 7 0 0 0 .602-1.75H5.086c.164.684.355 1.258.601 1.75.575 1.121 1.094 1.313 1.313 1.313m-2.133-4.375h4.238q.082-.615.082-1.313 0-.656-.082-1.312H4.867c-.054.437-.054.874-.054 1.312 0 .465 0 .902.054 1.313m.219-3.938h3.8a7 7 0 0 0-.6-1.723C7.737 5.282 7.19 5.062 7 5.062c-.219 0-.738.22-1.312 1.34-.247.493-.438 1.067-.602 1.723m5.332 1.313c.055.437.055.874.055 1.312 0 .465 0 .902-.055 1.313h2.105q.165-.615.165-1.313 0-.656-.165-1.312zm1.613-1.313a5.63 5.63 0 0 0-2.68-2.543c.383.711.684 1.586.876 2.543zm-8.285 0c.192-.957.492-1.832.875-2.543a5.63 5.63 0 0 0-2.68 2.543zM1.45 9.438a7 7 0 0 0-.137 1.312c0 .465.028.902.137 1.313h2.106c-.055-.41-.055-.848-.055-1.313 0-.437 0-.875.055-1.312zm7.903 6.507a5.56 5.56 0 0 0 2.68-2.57h-1.805c-.192.984-.493 1.86-.875 2.57m-4.73 0c-.384-.71-.684-1.586-.876-2.57H1.941a5.56 5.56 0 0 0 2.68 2.57M7 17.75a6.96 6.96 0 0 1-6.07-3.5c-1.258-2.16-1.258-4.812 0-7A7.02 7.02 0 0 1 7 3.75c2.488 0 4.785 1.34 6.043 3.5 1.258 2.188 1.258 4.84 0 7A6.95 6.95 0 0 1 7 17.75' />
    </g>
    <defs>
      <clipPath id='c82fda1bcb341098d52f4395cab3f643__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGlobeSmBoldIcon);
export default ForwardRef;
