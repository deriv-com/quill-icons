import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleNineSmBoldIcon = (
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
      <path d='M12.688 10.75c0-2.023-1.094-3.883-2.844-4.922a5.71 5.71 0 0 0-5.688 0 5.68 5.68 0 0 0-2.843 4.922c0 2.05 1.066 3.91 2.843 4.95a5.71 5.71 0 0 0 5.688 0c1.75-1.04 2.844-2.9 2.844-4.95M0 10.75a6.95 6.95 0 0 1 3.5-6.043c2.16-1.258 4.813-1.258 7 0C12.66 5.965 14 8.262 14 10.75a7.02 7.02 0 0 1-3.5 6.07c-2.187 1.258-4.84 1.258-7 0A6.96 6.96 0 0 1 0 10.75m7-2.187c-.492 0-.902.273-1.148.656-.247.41-.247.93 0 1.312.246.41.656.656 1.148.656.465 0 .875-.246 1.121-.656.246-.383.246-.902 0-1.312-.246-.383-.656-.656-1.121-.656m-.71 3.855a2.64 2.64 0 0 1-1.915-2.543 2.626 2.626 0 0 1 5.25 0c0 .902-.41 1.75-1.066 2.324l-2.243 1.914a.68.68 0 0 1-.93-.082.68.68 0 0 1 .083-.93z' />
    </g>
    <defs>
      <clipPath id='7b30bba0adcd4cbc15d5b6503e90a6f7__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleNineSmBoldIcon);
export default ForwardRef;
