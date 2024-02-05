import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightFromBracketXlBoldIcon = (
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
      <path d='M16.5 12.844v2.531q-.093 1.032-1.125 1.125H9.75v3h5.625q1.032.094 1.125 1.125v2.531L21.656 18zM24 18q0 .844-.61 1.453l-5.437 5.39q-.61.657-1.547.657a1.97 1.97 0 0 1-1.5-.656 2.2 2.2 0 0 1-.656-1.5V21.75h-4.5a2.45 2.45 0 0 1-1.594-.656A2.45 2.45 0 0 1 7.5 19.5v-3q.047-.937.656-1.594a2.45 2.45 0 0 1 1.594-.656h4.5v-1.594q.047-.891.656-1.5a2.2 2.2 0 0 1 1.5-.656q.937 0 1.547.656l5.438 5.39Q24 17.157 24 18M7.875 9.75h-3.75q-.797 0-1.312.563-.563.514-.563 1.312v12.75q0 .797.563 1.313.514.562 1.312.562h3.75q1.032.094 1.125 1.125-.093 1.032-1.125 1.125h-3.75q-1.734-.046-2.906-1.219Q.046 26.11 0 24.375v-12.75q.047-1.734 1.219-2.906T4.125 7.5h3.75Q8.907 7.595 9 8.625 8.907 9.657 7.875 9.75' />
    </g>
    <defs>
      <clipPath id='833aa6914d70ead945efa07400fc1634__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightFromBracketXlBoldIcon);
export default ForwardRef;
