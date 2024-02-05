import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMicrophoneXlRegularIcon = (
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
      <path d='M12 10.5q-.047-1.266-.89-2.11-.844-.843-2.11-.89-1.266.047-2.11.89-.843.844-.89 2.11V18q.047 1.266.89 2.11.844.843 2.11.89 1.266-.047 2.11-.89.843-.844.89-2.11zm-7.5 0q.047-1.922 1.313-3.187Q7.078 6.047 9 6q1.922.047 3.188 1.313Q13.452 8.578 13.5 10.5V18q-.047 1.922-1.312 3.188Q10.922 22.452 9 22.5q-1.922-.047-3.187-1.312Q4.547 19.922 4.5 18zM3 15.75V18q.047 2.532 1.734 4.266Q6.47 23.954 9 24q2.532-.047 4.266-1.734Q14.954 20.53 15 18v-2.25q.047-.703.75-.75.704.047.75.75V18q-.046 3-1.969 5.063-1.875 2.062-4.781 2.39V28.5h3q.703.046.75.75-.047.704-.75.75h-7.5q-.703-.046-.75-.75.046-.704.75-.75h3v-3.047q-2.906-.328-4.781-2.39Q1.547 21 1.5 18v-2.25q.046-.703.75-.75.704.047.75.75' />
    </g>
    <defs>
      <clipPath id='b358cc7090b189ecd3070305f1e30b0f__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMicrophoneXlRegularIcon);
export default ForwardRef;
