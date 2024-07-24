import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.688 7.25c0-.766-.438-1.477-1.094-1.887-.684-.383-1.532-.383-2.188 0-.683.41-1.093 1.121-1.093 1.887 0 .793.41 1.504 1.093 1.914.657.383 1.504.383 2.188 0 .656-.41 1.093-1.121 1.093-1.914M3 7.25c0-1.23.656-2.379 1.75-3.008a3.48 3.48 0 0 1 3.5 0C9.316 4.872 10 6.02 10 7.25a3.54 3.54 0 0 1-1.75 3.035 3.48 3.48 0 0 1-3.5 0A3.48 3.48 0 0 1 3 7.25m-1.285 9.188h9.543a3.57 3.57 0 0 0-3.528-3.063H5.242a3.57 3.57 0 0 0-3.527 3.063m-1.34.519c0-2.707 2.16-4.895 4.867-4.895H7.73a4.89 4.89 0 0 1 4.895 4.895c0 .438-.383.793-.82.793H1.168a.794.794 0 0 1-.793-.793' />
    </g>
    <defs>
      <clipPath id='9ea4d750d2a7fb3cd13b309f23bcf472__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserSmBoldIcon);
export default ForwardRef;
