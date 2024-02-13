import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBriefcaseXlBoldIcon = (
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
      <path d='M8.25 8.625V10.5h7.5V8.625q-.047-.328-.375-.375h-6.75q-.328.047-.375.375M6 10.5V8.625q.046-1.125.75-1.875.75-.703 1.875-.75h6.75q1.125.046 1.875.75.704.75.75 1.875V10.5h3q1.266.047 2.11.89.843.844.89 2.11v12q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89-.843-.844-.89-2.11v-12q.047-1.266.89-2.11.844-.843 2.11-.89zm-3.75 9.75v5.25q.046.704.75.75h18q.704-.046.75-.75v-5.25H15V21q0 .657-.422 1.078-.421.422-1.078.422h-3q-.656 0-1.078-.422Q9 21.657 9 21v-.75zM9 18h12.75v-4.5q-.046-.703-.75-.75H3q-.703.047-.75.75V18z' />
    </g>
    <defs>
      <clipPath id='ec292a0b5995565861bb886d05df503f__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBriefcaseXlBoldIcon);
export default ForwardRef;
