import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightToBracketXlRegularIcon = (
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
      <path d='M14.953 18.094Q15 18.046 15 18t-.047-.094l-6.187-5.812Q8.672 12 8.578 12a.366.366 0 0 0-.328.328V15q-.047.703-.75.75H1.875q-.328.047-.375.375v3.75q.046.329.375.375H7.5q.703.046.75.75v2.672q.046.281.328.328.094 0 .188-.094zM16.5 18q0 .704-.516 1.172l-6.187 5.86q-.516.468-1.219.468-.797 0-1.312-.516-.516-.514-.516-1.312V21.75H1.875q-.797 0-1.312-.562Q0 20.672 0 19.875v-3.75q0-.797.563-1.312.514-.563 1.312-.563H6.75v-1.922q0-.797.516-1.312.514-.516 1.312-.516.703 0 1.219.516l6.187 5.812q.516.469.516 1.172m-.75 9h4.5a2.45 2.45 0 0 0 1.594-.656q.61-.657.656-1.594v-13.5a2.45 2.45 0 0 0-.656-1.594A2.45 2.45 0 0 0 20.25 9h-4.5q-.703-.047-.75-.75.047-.703.75-.75h4.5q1.594.046 2.672 1.078Q23.953 9.657 24 11.25v13.5q-.046 1.594-1.078 2.672-1.079 1.031-2.672 1.078h-4.5q-.703-.046-.75-.75.047-.704.75-.75' />
    </g>
    <defs>
      <clipPath id='17aa833ee2effabb289ac77c51e7807d__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightToBracketXlRegularIcon);
export default ForwardRef;
