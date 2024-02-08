import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSearchXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M17.25 15.75a7.47 7.47 0 0 0-.984-3.75A7.8 7.8 0 0 0 13.5 9.234a7.64 7.64 0 0 0-3.75-.984A7.64 7.64 0 0 0 6 9.234 7.8 7.8 0 0 0 3.234 12a7.47 7.47 0 0 0-.984 3.75 7.47 7.47 0 0 0 .984 3.75A7.8 7.8 0 0 0 6 22.266a7.64 7.64 0 0 0 3.75.984 7.64 7.64 0 0 0 3.75-.984 7.8 7.8 0 0 0 2.766-2.766 7.47 7.47 0 0 0 .984-3.75m-1.453 7.64q-2.532 2.064-6.047 2.11-4.125-.094-6.89-2.86Q.093 19.876 0 15.75q.094-4.125 2.86-6.89Q5.624 6.093 9.75 6q4.125.094 6.89 2.86 2.766 2.765 2.86 6.89-.046 3.516-2.11 6.047l6.282 6.281q.656.797 0 1.594-.797.656-1.594 0z' />
    </g>
    <defs>
      <clipPath id='a1f003d8607d9e143874d8e1ac4a2bc2__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSearchXlBoldIcon);
export default ForwardRef;
