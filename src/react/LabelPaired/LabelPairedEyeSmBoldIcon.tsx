import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeSmBoldIcon = (
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
      <path d='M8 5.938c-1.805 0-3.254.82-4.375 1.859a9.8 9.8 0 0 0-2.16 2.953c.383.82 1.094 1.996 2.16 2.98 1.121 1.04 2.57 1.832 4.375 1.832 1.777 0 3.227-.792 4.348-1.832 1.066-.984 1.804-2.16 2.16-2.98-.356-.82-1.094-1.969-2.133-2.953-1.148-1.04-2.598-1.86-4.375-1.86m-5.277.902C4.008 5.637 5.785 4.625 8 4.625c2.188 0 3.965 1.012 5.25 2.215s2.133 2.598 2.543 3.582a.98.98 0 0 1 0 .683c-.41.957-1.258 2.38-2.543 3.582-1.285 1.204-3.062 2.188-5.25 2.188-2.215 0-3.992-.984-5.277-2.187C1.438 13.484.59 12.062.18 11.105a.98.98 0 0 1 0-.683c.41-.985 1.257-2.406 2.543-3.582M8 12.938a2.176 2.176 0 0 0 2.188-2.188A2.194 2.194 0 0 0 8 8.563h-.055c.028.164.055.3.055.437 0 .984-.793 1.75-1.75 1.75-.164 0-.3 0-.437-.055v.055A2.16 2.16 0 0 0 8 12.938M8 7.25c1.23 0 2.379.684 3.008 1.75a3.48 3.48 0 0 1 0 3.5A3.47 3.47 0 0 1 8 14.25a3.48 3.48 0 0 1-3.035-1.75 3.48 3.48 0 0 1 0-3.5A3.54 3.54 0 0 1 8 7.25' />
    </g>
    <defs>
      <clipPath id='a99f8e3876ba9b2f18684002c4fdd433__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeSmBoldIcon);
export default ForwardRef;
