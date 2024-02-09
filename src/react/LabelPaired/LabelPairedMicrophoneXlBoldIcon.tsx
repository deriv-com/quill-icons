import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMicrophoneXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.25 10.5a2.45 2.45 0 0 0-.656-1.594A2.45 2.45 0 0 0 9 8.25a2.45 2.45 0 0 0-1.594.656A2.45 2.45 0 0 0 6.75 10.5V18q.047.937.656 1.594.657.61 1.594.656a2.45 2.45 0 0 0 1.594-.656q.61-.657.656-1.594zm-6.75 0q.047-1.922 1.313-3.187Q7.078 6.047 9 6q1.922.047 3.188 1.313Q13.452 8.578 13.5 10.5V18q-.047 1.922-1.312 3.188Q10.922 22.452 9 22.5q-1.922-.047-3.187-1.312Q4.547 19.922 4.5 18zM3 16.125V18q.047 2.532 1.734 4.266Q6.47 23.954 9 24q2.532-.047 4.266-1.734Q14.954 20.53 15 18v-1.875q.095-1.03 1.125-1.125 1.032.095 1.125 1.125V18q-.047 3.188-2.062 5.438-1.969 2.25-5.063 2.718v1.594h2.25q1.032.094 1.125 1.125-.093 1.032-1.125 1.125h-6.75q-1.03-.093-1.125-1.125.095-1.03 1.125-1.125h2.25v-1.594q-3.093-.468-5.062-2.718Q.797 21.188.75 18v-1.875Q.845 15.095 1.875 15q1.032.095 1.125 1.125' />
    </g>
    <defs>
      <clipPath id='f045e663918ea265d29c285fb4d6ba6c__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMicrophoneXlBoldIcon);
export default ForwardRef;
